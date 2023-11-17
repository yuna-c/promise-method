/*
ES6 Promise라는 동기화 처리하기 위한 특별한 생성자 함수가 추가
Promise는 일반 인스턴스 객체와는 달리 생성 시점에 값이 정해지는 것이 아닌 상태값 3가지를 품은 상태에서 반환됨
추후에 상태값 변환단계에 따라 각각 등록된 메서드가 동기적으로 실행되는 방식

Promise의 3가지 상태
[pending] : 특정 요청이 들어간 이후 그 요청이 수행될 떄까지의 '대기'상태
[fullfiled] : 요청이 성공적으로 수행 완료 된 상태
[rejected] : 요청이 실패해서 수행 완료된 상태

Promise 인스턴스를 생성해야 하는 대표적인 경우
- [외부 데이터]를 가지고 올 때까지 다음 업무를 holding 시키면서 동기화 처리해야 하는 경우
- 코드 내부적으로 setTimeout같은 [지연시간이 발생하는 코드]인 경우 해당 코드가 끝날 때까지 holding하면서 동기화 처리
*/
function test(delay, callback) {
	setTimeout(() => {
		callback();
	}, delay);
}
