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

