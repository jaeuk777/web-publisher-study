// alert('연결')
const artiHead = document.querySelectorAll('.art_h2');
const boarderlist = document.querySelectorAll('.section_board article ul');
const art_h2 = document.querySelectorAll('.section_board article h2 button');
const bannerImg = document.querySelectorAll('.banner_imgbox img')
const imgbox = document.querySelector('.banner_imgbox')
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.btn_prev');
const nextBtn = document.querySelector('.btn_next');
const stopBtn = document.querySelector('.btn_stop');
const startBtn = document.querySelector('.btn_start');
const slideCounter = document.querySelector('.slide_counter');
let slideIndex = 0;
let autoSlideInterval;

// console.log(boarderlist);
// console.log(bannerImg);

document.addEventListener("DOMContentLoaded", function() {
  const navInfo = document.querySelector(".header_nav.nav_info");
  const submenuContainer = document.querySelector(".submenu_container");

  navInfo.addEventListener("mouseenter", function() {
    submenuContainer.style.display = "block";
  });

  navInfo.addEventListener("mouseleave", function() {
    submenuContainer.style.display = "none";
  });

  submenuContainer.addEventListener("mouseenter", function() {
    submenuContainer.style.display = "block";
  });

  submenuContainer.addEventListener("mouseleave", function() {
    submenuContainer.style.display = "none";
  });
});

let leftWidth = 0;
artiHead.forEach((item, index) => {
    // item.style.display = 'flex';
    item.style.padding = '1.8rem'
    item.style.position = 'absolute';
    item.style.top = '-3rem';
    item.style.left = leftWidth + 'px';
    leftWidth += 90;
});

boarderlist[0].style.display = 'block';
for (let i = 0; i < boarderlist.length; i++) {
    art_h2[i].addEventListener('click', () => {
        for (let j = 0; j < boarderlist.length; j++) {
            boarderlist[j].style.display = 'none';
        }
        boarderlist[i].style.display = 'block';
    })
}


function showSlides() {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${slideIndex * 630}px)`;

  // 현재 슬라이드 인덱스를 표시
  slideCounter.textContent = `${slideIndex + 1} / ${slides.length}`;
}

showSlides();

// function showSlidesMath (x) {
//   if (x.matches) {
//     document.slider.style.width = '100px';
//   }else {
//     document.slifer.style.position = 'none';
//   }
// }
// var x = window.matchMedia("(max-width : 700px)")

// showSlidesMath(x);


prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
  showSlides();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
  showSlides();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    showSlides();
  }, 3000);
}

startAutoSlide(); // 페이지 로드 시 자동 슬라이딩 시작

stopBtn.style.display = 'inline-block'; // 초기에는 멈춤 버튼을 표시
startBtn.style.display = 'none';

stopBtn.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  stopBtn.style.display = 'none'; // 멈춤 버튼 클릭 시 멈춤 버튼 숨기고
  startBtn.style.display = 'inline-block'; // 재생 버튼 표시
});

startBtn.addEventListener('click', () => {
  startAutoSlide(); // 자동 슬라이딩 시작
  startBtn.style.display = 'none'; // 재생 버튼 클릭 시 재생 버튼 숨기고
  stopBtn.style.display = 'inline-block'; // 멈춤 버튼 표시
});

// console.log(slides);

for(let i=0; i<slides.length; i++) {

  slides[i].addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
    // console.log(imgbox);
  });

}

for(let i=0; i<slides.length; i++) {
slides[i].addEventListener('mouseleave', () => {
  startAutoSlide(); // 자동 슬라이딩 다시 시작
});
}

// ------------------------------------section3----------------------------------
const videoBtn = document.querySelector('.videoBtn');
const cardBtn = document.querySelector('.cardBtn');
const cardNews = document.querySelector('.card_news');
const videoNews = document.querySelector('.video_news');
videoBtn.addEventListener('click', () => {
  videoNews.style.display = 'flex';
  cardNews.style.display = 'none';
})
cardBtn.addEventListener('click', ()=> {
  videoNews.style.display = 'none';
  cardNews.style.display = 'flex'
})

// ------------------------------------section4----------------------------------









