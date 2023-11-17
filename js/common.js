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

Promise란 3가지 내부 상태값을 가지고 있는 객체, 각 객체의 내부 상태 변화에 따른 특정 메서드의 호출을 약속받은 객체

Promise생성자 함수를 통해서 동기화 처리 할 코드의 호출 시점을 메서드로 Promise객체 인스턴트 형태로 리턴
이때 Promise생성자 내부에서 자동으로 res, rej라는 2개의 인수(함수)가 전달되고
해당 함수를 전달받은 코드가 동기적으로 수행되게 하고 싶은 시점에 res를 호출(then 호출시점)
전달받은 코드를 기반으로 동기적으로 에러를 반환하고 싶은 시점에 rej호출(catch)
*/

function delay(time, isSucess) {
	//delay내부에서 생성되는 promise인스턴스를 다시 delay함수 외부로 리턴
	//delay함수뒤에 바로 then구문을 호출하기 위함
	//then을 이어서 호출하기 위해서는 이전함수가 promise인스턴스를 반환해야됨
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('특정로직이 성공적으로 수행되었을떄 실행할 구문');
			// isSucess상태에 따라 res, rej가 분기 호출
			isSucess ? res('sucess💜') /* fullfiled 실행시점 */ : rej('fail🖤') /* rejected 실행 시점 */;
		}, time);
	});
}
// promise의 변화되는 상태에 따라 then, catch 동기적으로 호출 가능
const p2 = delay(2000, false)
	.then((data) => console.log(data))
	.catch((err) => console.error(err));

/*
Promise를 통해 동기화 처리하는 방법
1. 비동기가 발생하는 (setTimeout)구문을 new Promise의 생성자 함수 콜백으로 전달
2. Promise 생성자 콜백 안에서 동기적으로 호출하고 싶은 시점에 첫번째 인수로 전달되는 res() / rej()메서드를 호출시킴
3. 해당 Promise 생성자는 인스턴스 객체를 반환하고 
4. 해당 인스턴스 객체의 .then메서드나 .catch메서드로 동기화 시킬 코드 호출 가능
*/
