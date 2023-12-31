// JSON : 데이터 전달 목적으로 특정 언어에 종속되지 않는 문자열 형태의 자바스크립트 자료 구조
// Javascript Object Notation : 문자화 시킨 객체

/*
fetch() : 실시간으로 외부 데이터를 가져오는 ES6내장함수
fetch 자체가 반환된 데이터를 promise로 감싸서 리턴해줌 
: 결국 사용자가 Promise 생성을 할 필요가 없음
: 외부 데이터를 가져와야 하기 떄문에 시간이 걸리는 메서드이고, Promise를 적용할 수 밖에 없는 메서드이기 때문에 아예 기본적으로 Promise기능을 내장

fetch('data.json').then((파라미터) =>{인자}).catch((에러)=>{인자})
body (비동기 데이터 위치) : Json형태로 변환시키기 전(parsing)까지 확인이 안돼용~
*/

const main = document.querySelector('main');

fetch('member.json')
	.then((data) => data.json())
	.catch((err) => console.log(err))
	.then((json) => createDom(json.members));

// 함수분리
function createDom(arr) {
	let tags = '';
	arr.forEach((data) => {
		tags += `
    <article>
      <div class="pic"><img src=${data.pic} /></div>
      <h2>${data.name}</h2>
      <p>${data.position}</p>
    </article> 
    `;
	});
	main.innerHTML = tags;
}

/*
  fetch('member.json')
    .then(data => data.json())
    .catch(err => console.log(err))
    .then(json => {
      console.log(json.members);
      let tags = '';

      json.members.forEach((data) => {
        console.log(data.name);
        tags += `
        <article>
          <div class="pic"><img src=${data.pic} /></div>
          <h2>${data.name}</h2>
          <p>${data.position}</p>
        </article> 
        `
      });
      main.innerHTML = tags;
    });
*/

// promise.all(), promise.race(), asyn await
