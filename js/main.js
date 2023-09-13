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

