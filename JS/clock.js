const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //매 초마다 함수를 반복 실행
// setTimeout(sayHello, 3000);  //일정시간 기다렸다가 한번만 실행

//padStart : String이 가져야 하는 길이를 2로 설정함
// -> 6자리 모두 00:00:00 이렇게 나오도록
