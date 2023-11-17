//
function test(delay, callback) {
	setTimeout(() => {
		callback();
	}, delay);
}

// -start => 2초 후 test1 => 또 2초 후 test => end
// ES5에서 callback을 통해 동기화 하는 원리
// 애초에 동기화시키고 싶은코드를 모두 callback형태로 묶어 통채로 web api에게 넘김으로써 callstack입장에서 ㄷ음에 실행할 코드들을 원천적으로 제거하는 방법

// 순서 1 - start출력(callstack)
console.log('start');
// 순서 2 - 첫번째 함수 호출(callstack)
// 순서 3 - setTimeout을 web api에게 전달(callstack)
test(2000, () => {
	// 순서 4 - setTimeout호출시 안쪽 구문을 다시 callstack에 전달(wep api)
	// 순서 5 - web api로 부터 setTimeout안쪽의 callstack함수 전달받고 호출(callstack)
	console.log('💕');
	// 순서 6 - 다시 두번재 함수 호출하고 안쪽의 setTimeout을 다시 web api로 전달(callstack)
	test(2000, () => {
		// 순서 7 - setTimeout을 수행하고 아래쪽의 callback으로 전달된 구문을 다시 callstack에 전달(web api)
		// 순서 8 - 아래 구문을 실행하고 종료 (callstack)
		console.log('💕');
		console.log('end');
	});
});

/* 
문제점 !
- 가독성 떨어짐(콜백지옥)
해결법 !
- promise
*/
