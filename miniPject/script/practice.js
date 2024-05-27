let nutritionData = [];

fetch('./data.json')
    .then(response => response.json())
    .then(data => nutritionData = data)
    .catch(error => console.error('Error loading JSON:', error));

// 검색 기능
function searchNutrition() {
    const searchInput = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('result');
    // 입력된 값에 따라 영양 정보를 검색합니다.
    const result = nutritionData.filter(item => item.DESC_KOR.includes(searchInput));
    console.log(result);

    // 결과를 표시합니다.
    for(let i=0;i<result.length;i++) {
        if (result) {
            resultDiv.innerHTML += `
                <h2>${result[i].DESC_KOR}의 영양 정보</h2>
                <p>브랜드명: ${result[i].MAKER_NAME}</p>
                <p>칼로리: ${result[i].NUTR_CONT1} kcal /${result[i].SERVING_UNIT}g</p>
                <p>단백질: ${result[i].NUTR_CONT3} g</p>
                <p>지방: ${result[i].NUTR_CONT4} g</p>
                <p>탄수화물: ${result[i].NUTR_CONT2} g</p>
            `;
        } else {
            resultDiv.innerHTML = '<p>결과를 찾을 수 없습니다.</p>';
        }
    }
}

// let foodData = fetch("./data.json").then((Response) => Response.json())
// console.log(foodData);

// let foodDataSector = foodData[Array[100]];

// console.log(foodDataSector);

// fetch("./data.json")//json파일 읽어오기
// .then((response) => response.json())//읽어온 데이터를 json으로 변환
// .then((json) => {
//     data = json;//json에 있는 items만 받아오기
//     // console.log(data);

//     let html = '';
//     data.forEach(element => {//foreach 배열의 개수만큼 반복문을 돌려라
//         console.log(element)//element에는 하나 하나의 배열이 담아져 있음
//     html+=`<li>
//                 음식이름: ${element.DESC_KOR}<br>
//                 총 칼로리: ${element.NUTR_CONT1}
//             </li>`

    
//     });
// $('.list1').html(html)//화면에 출력
// });

// const getData = async () => {
//     const url =  // 실제 API URL을 입력하세요.

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('네트워크 응답이 올바르지 않습니다.');
//         }
//         const data = await response.json();
//         if (data && data.row) {
//             return data.row; // 데이터를 반환
//         } else {
//             console.error('올바른 데이터 형식이 아닙니다.', data);
//             return [];
//         }
//     } catch (error) {
//         console.error('데이터를 가져오는 중 오류 발생:', error);
//         return [];
//     }
// };

// const searchFood = async () => {
//     const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = '';

//     const foodData = await getData(); // 데이터를 가져옴

//     const foundFoods = foodData.filter(food => food.DESC_KOR && food.DESC_KOR.toLowerCase().includes(searchInput));
//     if (foundFoods.length > 0) {
//         foundFoods.forEach(food => {
//             const foodDiv = document.createElement('div');
//             foodDiv.textContent = `이름: ${food.DESC_KOR}, 칼로리: ${food.NUTR_CONT1} kcal, 단백질: ${food.NUTR_CONT3} g`;
//             resultsDiv.appendChild(foodDiv);
//         });
//     } else {
//         resultsDiv.textContent = '검색 결과가 없습니다.';
//     }
// };

// document.getElementById('search-button').addEventListener('click', searchFood);
