let testArr = [];

const getData = async () => {
    const url = new URL(`https://openapi.foodsafetykorea.go.kr/api/fd04dde2eddf4489b7d7/I2790/json/0/1000`)
    
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

}
getData();

// let contents = ``;

// let testUi = ()=> {
//     for(let i=0;i<testArr.length;i++) {
//         contents += `
//         <dl>
//             <dt>${testArr[i].title}</dt>
//             <dd><a href=""><img src="${testArr[i].firstimage}" alt=""></a></dd>
//             <dd>장소 : ${testArr[i].addr1}</dd>
//             <dd>문의 : ${testArr[i].tel}</dd>
//         </dl>
//         `
//     }
// }