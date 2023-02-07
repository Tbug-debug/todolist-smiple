import style from "./Todo.module.css";

interface Todoprops {
  todo: string[];
  doing: string[];
  todon: string[];
  donetext: string[];
  setodo: (e: string[]) => void;
  setdoing: (e: string[]) => void;
  setTodon: (e: string[]) => void;
  setDone: (e: string[]) => void;
  setBtnstate: (e: boolean) => void;
  numb: number;
  btnstate: boolean;
}

const Todo = ({
  todo,
  doing,
  todon,
  donetext,
  setodo,
  setdoing,
  setTodon,
  setDone,
  numb,
  btnstate,
  setBtnstate,
}: Todoprops) => {
  function movetoDone(e: number) {
    let todoCopy = [...todo];
    let todoingCopy = [...doing];
    let todonCopy = [...todon];
    let todoneCopy = [...donetext];
    let doon = todoCopy.splice(e, 1);
    let goingon = todoingCopy.splice(e, 1);
    todonCopy.push(...doon);
    todoneCopy.push(...goingon);
    setodo(todoCopy);
    setdoing(todoingCopy);
    setTodon(todonCopy);
    setDone(todoneCopy);
    setBtnstate(true);
  }

  function deleteTodo(e: number) {
    let todoCopy = [...todo];
    let todoingCopy = [...doing];
    todoCopy.splice(e, 1);
    todoingCopy.splice(e, 1);
    setodo(todoCopy);
    setdoing(todoingCopy);
  }

  return (
    <div>
      <h3>{todo[numb]}</h3>
      <h4>{doing[numb]}</h4>
      <button className={style.btnstyle} onClick={() => movetoDone(numb)}>
        {btnstate === false ? "완료" : "완료"}
      </button>
      <button className={style.btnstyle} onClick={() => deleteTodo(numb)}>
        삭제
      </button>
    </div>
  );
};

export default Todo;
