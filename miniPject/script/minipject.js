// ------------------------------ 탭메뉴 -------------------------
function toggleMenu() {
    const menuTab = document.getElementById('menuTab');
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuTab.style.display === 'none' || menuTab.style.display === '') {
        menuTab.style.display = 'block';
        menuOverlay.style.display = 'block';
    } else {
        menuTab.style.display = 'none';
        menuOverlay.style.display = 'none';
    }
}

// 메뉴 오버레이 클릭 시 메뉴 닫기
document.getElementById('menuOverlay').onclick = function() {
    toggleMenu();
}
// ------------------------------ 영양 정보 검색 -------------------------
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

    // 입력된 값에 따라 영양 정보를 검색
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
            <td class="td5">${item.NUTR_CONT4} g</td>
            <td class="td6">${item.NUTR_CONT2} g</td>
            <td><button class="addbutton" onclick="addCalories(${item.NUTR_CONT1})">추가</button></td>
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

document.getElementById('resetCalories').addEventListener('click', function () {
    totalCalories = 0;
    document.getElementById('caloriesToday').innerText = '오늘 먹은 칼로리: 0 kcal';
});

const onload = document.querySelector('header_bottom')
window.onload = function () { // 페이지에 들어갈때 작동하는 함수 (이 함수 안에 geoloction 으로 경도 위도 값 가져오기, 유져 정보입력 칸에서 입력된 정보를 json 데이터로 값 가져오기)
    navigator.geolocation.getCurrentPosition(success);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        document.getElementById('standardWeight').innerHTML = '표준 몸무게: ' + `<span class="sp1">` + calculateStandardWeight(userInfo.height, userInfo.gender) + ` kg</span>`; // li 의 id값을 가져와서 남성 여성의 표준 몸무게 가져오기
        document.getElementById('currentWeight').innerHTML = '내 몸무게: <span class="sp1">' + calculatemyWeight(userInfo.weight, calculateStandardWeight(userInfo.height, userInfo.gender)) + ' </span>'; // 입력정보창의 몸무게 가져오기 
        document.getElementById('bmi').innerHTML = 'BMI지수: <span class="sp2">' + calculateBMI(userInfo.height, userInfo.weight) + `</span>`; // BMI 지수 계산해서 가져오기
        document.getElementById('weightStatus').innerHTML = '체중: <span class="sp3">' + getWeightStatus(calculateBMI(userInfo.height, userInfo.weight)) + `</span>`; // bmi값으로 비만도 계산 함수 가져와서 표시(??표시된 글자 css 먹히는 법 찾아야함)
        document.getElementById('recommendedIntake').innerHTML = '최소권장량: ' + getRecommendedIntake(userInfo.age, userInfo.gender); // 남자 2500 여자 2000 의 기본 칼로리로 나이와 성별로 기본 권장량 계산해서 표기
    } else {
        alert('사용자 정보를 입력해주세요.');
        window.location.href = './index.html'; // 정보입력창에서 html로 표시
    }
}



// const button = document.querySelector('.button')
// button.addEventListener('click',() => {
//     navigator.geolocation.getCurrentPosition(success);
// });

// ------------------------------ 날씨 정보 가져오기 -------------------------
// const API_KEY = '';
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
            const temperature = (json.main.temp - 273.15).toFixed(0);
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
        return (height - 100) ;
    } else {
        return (height - 105) ;
    }
}
function calculatemyWeight(weight, exweight) {
    if (exweight <= weight) {
        return weight.innerHTML = `<span style="color: red;">${weight} kg</span>`;
    } else {
        return weight.innerHTML = `<span style="color: green;">${weight} kg</span>`;
    }
}

function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function getWeightStatus(bmi) {
    if (bmi < 18.5) return '<span class=bmi1>미달</span>';
    if (bmi >= 18.5 && bmi < 24.9) return '<span class="bmi2">정상</span>'; //<img class="img2" src="/img/2024_min_v_01.jpg" alt="">'
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

// ------------------------------ 오늘 걸음수 측정 -------------------------
let previousBeta = null;
let isStepDetected = false;
let stepCount = 0;
const walkinginfo = document.querySelector('.walking');
const chartColorchange = document.querySelector('.walking-chat');
const chartPlus = document.querySelector('.center');

function startStepCounting() {
    // 걸음 수 측정을 위해 이벤트 리스너 등록
    window.addEventListener("deviceorientation", (event) => {
        const { beta } = event;

        // 이전 beta 값이 null인 경우 초기화
        if (previousBeta === null) {
            previousBeta = beta;
            return;
        }

        if (DeviceOrientationEvent.requestPermission) {
            DeviceOrientationEvent.requestPermission().then(permissionState => {
                if (permissionState === 'granted') {
                window.addEventListener('deviceorientation', (event) => {
                    console.log('Alpha: ' + event.alpha);
                    console.log('Beta: ' + event.beta);
                    console.log('Gamma: ' + event.gamma);
                    const { beta } = event;
                    
                            // 이전 값과 현재 값의 차이 계산
                    const deltaBeta = beta - previousBeta;

                    // 걸음을 감지하는 조건 설정
                    if (!isStepDetected && deltaBeta > 10) {
                        isStepDetected = true;
                    } else if (isStepDetected && deltaBeta < -10) {
                        isStepDetected = false;
                        stepCount++;
                    }

                    previousBeta = beta;
                    displayStepCount();
                    // 이전 beta 값이 null인 경우 초기화
                    if (previousBeta === null) {
                        previousBeta = beta;
                        return;
                    }
                });
            }
            }).catch(console.error);
            } else {
            // 권한 요청이 필요 없는 브라우저의 경우
            window.addEventListener('deviceorientation', (event) => {
                console.log(event.alpha, event.beta, event.gamma);
            });
            }

        // 이전 값과 현재 값의 차이 계산
        const deltaBeta = beta - previousBeta;

        // 걸음을 감지하는 조건 설정
        if (!isStepDetected && deltaBeta > 10) {
            isStepDetected = true;
        } else if (isStepDetected && deltaBeta < -10) {
            isStepDetected = false;
            stepCount++;
        }

        previousBeta = beta;
        displayStepCount();
    });
}

// 걸음 수 출력
function displayStepCount(item) {
    chartPlus.innerHTML = `<span class="walking-counter">걸음수${stepCount}</span>`;
    chartColorchange.style.background = `conic-gradient(#00ADB5 ${stepCount}deg, white ${stepCount}deg 1000deg)`    
    // console.log("걸음 수:", stepCount);
    // chartPlus.innerHTML = `<div class="walk-info">오늘 걸음수 : ${stepCount}</div>`
}

// 걸음 수 측정 시작
startStepCounting();
// ------------------------------ 건강 레시피 -------------------------

document.addEventListener('DOMContentLoaded', () => {
    fetch('recipedata.json')
        .then(response => response.json())
        .then(data => {
            const recipesData = data.COOKRCP01.row;
            const recipeList = document.getElementById('recipes');
            const recipeDetail = document.getElementById('recipe-detail');
            const recipeTitle = document.getElementById('recipe-title');
            const recipeContent = document.getElementById('recipe-content');
            const backButton = document.getElementById('back-button');
            const prevButton = document.getElementById('prev');
            const nextButton = document.getElementById('next');

            // 레시피 목록 생성
            recipesData.forEach((recipe, index) => {
                const recipeItem = document.createElement('li');
                recipeItem.classList.add('recipe-item');

                const img = document.createElement('img');
                img.src = recipe.ATT_FILE_NO_MAIN;
                img.alt = recipe.RCP_NM;
                img.classList.add('mainimg');

                const recipeName = document.createElement('div');
                recipeName.textContent = recipe.RCP_NM;
                // recipeName.className.add('img-name');

                recipeItem.appendChild(img);
                recipeItem.appendChild(recipeName);
                recipeItem.addEventListener('click', () => showRecipeDetail(index));

                recipeList.appendChild(recipeItem);
            });

            backButton.addEventListener('click', () => {
                recipeList.parentElement.style.display = 'flex';
                recipeDetail.style.display = 'none';
                recipeContent.style.transform = 'translateX(0%)';
                currentIndex = 0;
            });

            let currentIndex = 0;

            function showRecipeDetail(index) {
                const recipe = recipesData[index];
                recipeTitle.textContent = recipe.RCP_NM;
                recipeContent.innerHTML = '';

                // 슬라이드 콘텐츠 생성
                for (let i = 1; i <= 20; i++) {
                    const imgKey = `MANUAL_IMG${i.toString().padStart(2, '0')}`;
                    const manualKey = `MANUAL${i.toString().padStart(2, '0')}`;
                    if (recipe[imgKey] && recipe[manualKey]) {
                        const slide = document.createElement('div');
                        slide.classList.add('slide');

                        const img = document.createElement('img');
                        img.classList.add('recipe-img');
                        img.src = recipe[imgKey];
                        slide.appendChild(img);

                        const p = document.createElement('p');
                        p.textContent = recipe[manualKey];
                        slide.appendChild(p);

                        recipeContent.appendChild(slide);
                    }
                }

                recipeList.parentElement.style.display = 'none';
                recipeDetail.style.display = 'block';

                // 슬라이드 초기화
                currentIndex = 0;
                updateSlides();
            }

            function updateSlides() {
                const slides = document.querySelectorAll('.slide');
                const totalSlides = slides.length;
                const percentage = -100 * currentIndex;
                recipeContent.style.transform = `translateX(${percentage}%)`;

                prevButton.disabled = currentIndex === 0;
                nextButton.disabled = currentIndex === totalSlides - 1;
            }

            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlides();
                }
            });

            nextButton.addEventListener('click', () => {
                const totalSlides = document.querySelectorAll('.slide').length;
                if (currentIndex < totalSlides - 1) {
                    currentIndex++;
                    updateSlides();
                }
            });
        })
        .catch(error => console.error('Error fetching the recipes:', error));
});

// const backBtn = document.querySelector('.back-button')
// backBtn.addEventListener('click', ()=> {
//     window.location.href = './index.html';
// })

