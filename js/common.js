//
function test(delay, callback) {
	setTimeout(() => {
		callback();
	}, delay);
}

// console.log => js가 순수하게 처리해주는데 test 실행후 안쪽에 setTimeout을 web api로 넘겨서 strar,end,(test1,test2) 뿜 찍힘 = 군대식으로 한다 이거임

// 순서 1 - start콘솔 출력(callstack)
console.log('start');
// 순서 2 - test함수 호출(callstack,web api)
// 순서 3 - setTimeout구문 외주주고 다음 코드 바로 실행(callstack)
// 순서 7 - setTimeout수행 후 그 안쪽의 test1콘솔문을 callstack에 전달(이때 이미 callstack에는 end까지 업무가 등록된 상태이기 때문에 그 다음에 호출 대기)
test(2000, () => console.log('test1'));
// 순서 4 - 두번째 test 함수 호출 (callstack)
// 순서 5 - setTimeout구문 외주주고 다음 코드 바로 실행(callstack)
// 순서 8 - setTimeout수행 후 그 안쪽의 test2콘솔문을 callstack에 전달(이때 이미 callstack에는 test1까지 업무가 등록된 상태이기 때문에 그 다음에 호출 대기)
test(2000, () => console.log('test2'));
// 순서 6 - end콘솔 출력
console.log('end');
