// 검색 영역(div.search) 클릭 시 강제 포커스 및 제어
// 검색 영역 찾기
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input');
// 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 포커스 강제 적용
});

// input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  // HTML 속성을 추가하는 메소드
  searchInputEl.setAttribute('placeholder', '통합검색'); 
})

// input 요소에 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); 
})

// 스크롤 시 전역 배지(고정 배너) 숨기기
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function() {
  // console.log(window.scrollY); // y축으로 얼마나 스크롤 했는지 페이지 스크롤 위치

  // Quiz:
  // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기!
  if (window.scrollY > 500) {
    badgeEl.style.display = 'none';
  } else {
    badgeEl.style.display = 'block';  
  }
})
