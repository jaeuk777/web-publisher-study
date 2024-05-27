let nutritionData = [];
let currentPage = 1;
const itemsPerPage = 10;
let totalCalories = 0;

fetch('./data.json')
    .then(response => response.json())
    .then(data => nutritionData = data)
    .catch(error => console.error('Error loading JSON:', error));

// 검색 기능
function searchNutrition() {
    const searchInput = document.getElementById('searchInput').value;
    const resultBody = document.getElementById('resultBody');
    const paginationDiv = document.getElementById('pagination');

    // 재검색 시 이전 결과 지우기
    resultBody.innerHTML = '';
    paginationDiv.innerHTML = '';

    // 입력된 값에 따라 영양 정보를 검색합니다.
    const result = nutritionData.filter(item => item.DESC_KOR.includes(searchInput));
    if (result.length === 0) {
        resultBody.innerHTML = '<tr><td colspan="7">결과를 찾을 수 없습니다.</td></tr>';
        return;
    }

    // 페이지네이션 설정
    const totalPages = Math.ceil(result.length / itemsPerPage);

    // 첫 페이지 결과 표시
    displayResults(result, currentPage, itemsPerPage);

    // 페이지네이션 버튼 생성
    displayPagination(totalPages);
}

function displayResults(result, page, itemsPerPage) {
    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const paginatedItems = result.slice(start, end);

    paginatedItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.DESC_KOR}</td>
            <td>${item.MAKER_NAME}</td>
            <td>${item.NUTR_CONT1} kcal</td>
            <td>${item.NUTR_CONT3} g</td>
            <td>${item.NUTR_CONT4} g</td>
            <td>${item.NUTR_CONT2} g</td>
            <td><button onclick="addCalories(${item.NUTR_CONT1})">추가</button></td>
        `;
        resultBody.appendChild(tr);
    });
}

function displayPagination(totalPages) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);

    if (startPage > 1) {
        const firstButton = document.createElement('button');
        firstButton.innerText = '<<';
        firstButton.onclick = () => {
            currentPage = 1;
            searchNutrition();
        };
        paginationDiv.appendChild(firstButton);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        if (i === currentPage) {
            button.classList.add('disabled');
        }
        button.onclick = () => {
            currentPage = i;
            searchNutrition();
        };
        paginationDiv.appendChild(button);
    }

    if (endPage < totalPages) {
        const lastButton = document.createElement('button');
        lastButton.innerText = '>>';
        lastButton.onclick = () => {
            currentPage = totalPages;
            searchNutrition();
        };
        paginationDiv.appendChild(lastButton);
    }
}

function addCalories(calories) {
    totalCalories += parseFloat(calories);
    document.getElementById('caloriesToday').innerText = `오늘 먹은 칼로리: ${totalCalories.toFixed(2)} kcal`;
}

document.getElementById('resetCalories').addEventListener('click', function() {
    totalCalories = 0;
    document.getElementById('caloriesToday').innerText = '오늘 먹은 칼로리: 0 kcal';
});

// ------------------------------ 날씨 정보 가져오기 -------------------------
const onload = document.querySelector('header_bottom') 
window.onload = function() { // 페이지에 들어갈때 작동하는 함수 (이 함수 안에 geoloction 으로 경도 위도 값 가져오기, 유져 정보입력 칸에서 입력된 정보를 json 데이터로 값 가져오기)
    navigator.geolocation.getCurrentPosition(success);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        document.getElementById('standardWeight').innerHTML = '표준 몸무게: ' + `<span class="sp1">` + calculateStandardWeight(userInfo.height, userInfo.gender) +`</span>`; // li 의 id값을 가져와서 남성 여성의 표준 몸무게 가져오기
        document.getElementById('currentWeight').innerHTML = '내 몸무게: <span class="sp1">' + userInfo.weight + ' kg</span>'; // 입력정보창의 몸무게 가져오기 
        document.getElementById('bmi').innerHTML = 'BMI지수: <span class="sp2">' + calculateBMI(userInfo.height, userInfo.weight) + `</span>`; // BMI 지수 계산해서 가져오기
        document.getElementById('weightStatus').innerHTML = '체중: <span class="sp3">' + getWeightStatus(calculateBMI(userInfo.height, userInfo.weight)) + `</span>`; // bmi값으로 비만도 계산 함수 가져와서 표시(??표시된 글자 css 먹히는 법 찾아야함)
        document.getElementById('recommendedIntake').innerHTML = '최소권장량: ' + getRecommendedIntake(userInfo.age, userInfo.gender); // 남자 2500 여자 2000 의 기본 칼로리로 나이와 성별로 기본 권장량 계산해서 표기
    } else {
        alert('사용자 정보를 입력해주세요.');
        window.location.href = 'input.html'; // 정보입력창에서 html로 표시
    }
}


// const button = document.querySelector('.button')
// button.addEventListener('click',() => {
//     navigator.geolocation.getCurrentPosition(success);
// });

const API_KEY = 'ac8c6dcb13dbbf70179b8cb69254643f';
const success = (position) => {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;

getWeather(latitude, longitude);
};
const getWeather = (lat, lon) => {
    const tempSection = document.querySelector('.temperature');
    const placeSection = document.querySelector('.place');
    const descSection = document.querySelector('.description');
    const iconSection = document.querySelector('.icons');
fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&mode=json&lang=kr`
)
    .then((response) => {
    return response.json();
    })
    .then((json) => {
    const temperature = (json.main.temp-273.15).toFixed(0);
    const place = json.name;
    const description = json.weather[0].description;
    const icon = json.weather[0].icon;
    console.log(icon);
    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    iconSection.setAttribute('src', iconURL);

    tempSection.innerHTML = temperature + `도`;
    placeSection.innerHTML = place;
    descSection.innerHTML = description;
    console.log(json);
    })
    .catch((error) => {
    alert(error);
    });
}

// ------------------------------ 내 정보 불러오기 -------------------------

function calculateStandardWeight(height, gender) {
    // 간단한 표준 몸무게 계산 공식 (예: 남성: height - 100, 여성: height - 105)
    if (gender === 'male') {
        return (height - 100).toFixed(2) + ' kg';
    } else {
        return (height - 105).toFixed(2) + ' kg';
    }
}

function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function getWeightStatus(bmi) {
    if (bmi < 18.5) return '<span class=bmi1>미달</span>';
    if (bmi >= 18.5 && bmi < 24.9) return '<span class="bmi2">정상</span><img class="img2" src="/img/2024_min_v_01.jpg" alt="">';
    if (bmi >= 25 && bmi < 29.9) return '<span class="bmi3">과체중</span>';
    return '<span class="bmi4">비만</span>';
}

function getRecommendedIntake(age, gender) {
    // 예시로 간단한 권장 섭취량 계산 (나이와 성별에 따라 다름)
    if (gender === 'male') {
        return (2500 - (age * 10)) + ' kcal';
    } else {
        return (2000 - (age * 10)) + ' kcal';
    }
};
