const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

//CCC
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
  event.preventDefault(); // 기본 새로고침 방지

  const newTodo = toDoInput.value; //뉴투두에 인풋 벨류 저장
  toDoInput.value = ""; //그리고 인풋창을 비움

  const newTodoObject = {
    //아이디와 텍스트로 이루어진 객체로 만듬
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObject); //투두스 배열에 객체를 저장
  paintTodo(newTodoObject); //화면에 새로 저장된 객체를 그리도록 함
  saveTodos(); //로컬 스토리지에 저장
}

toDoForm.addEventListener("submit", handleTodoSubmit);
//서브밋 기능을 활성화 하여 폼을 제출하도록 함

const savedTodos = localStorage.getItem(TODOS_KEY);
//로컬스토리지에 기존에 저장되어 있던 아이템을 불러옴

if (savedTodos !== null) {
  //저장된 로컬 스토리지가 비어있지 않다면
  const parsedTodos = JSON.parse(savedTodos); //저장되있던 것들을 담아
  toDos = parsedTodos; //투두스 배열에 넣고
  parsedTodos.forEach(paintTodo); //포이치 반복문을 돌려 그것을 출력함
}

//RRR
function paintTodo(newTodo) {
  const li = document.createElement("li"); //하위에 li를 생성
  li.id = newTodo.id; //삭제를 위한 구별 아이디 부여

  const span = document.createElement("span"); //span 생성
  span.innerText = newTodo.text; //생성한 span에 새로 작성한 newTodo 더함

  const button = document.createElement("button"); //button
  button.innerText = "X"; //X 를 넣음
  button.addEventListener("click", deleteTodo); //delete 기능 함수 연결

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//DDD
function deleteTodo(event) {
  const li = event.target.parentElement; // 부모 요소를 선택함
  li.remove(); // 지움

  toDos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  //필터를 돌려서 선택된 것과 다른 아이디만 남기는 새로운 투두배열을 생성함
  //선택된것과 같은 아이디는 삭제해야 하므로 새로운 투두에서 빼야 함!
  //선택된 것 == 삭제할 것
  saveTodos(); //문자열 화 해서 로컬 스토리지에 넣음
}
