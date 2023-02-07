import style from "./Todone.module.css";

interface Todonprops {
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

const Todone = ({
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
}: Todonprops) => {
  function movetoDo(e: number) {
    let todoCopy = [...todo];
    let todoingCopy = [...doing];
    let todonCopy = [...todon];
    let todoneCopy = [...donetext];
    let toding = todonCopy.splice(e, 1);
    let doingtext = todoneCopy.splice(e, 1);
    todoCopy.push(...toding);
    todoingCopy.push(...doingtext);
    setDone(todoneCopy);
    setTodon(todonCopy);
    setodo(todoCopy);
    setdoing(todoingCopy);
    setBtnstate(false);
  }

  function deleteTodon(e: number) {
    let todonCopy = [...todon];
    let todoneCopy = [...donetext];
    todonCopy.splice(e, 1);
    todoneCopy.splice(e, 1);
    setDone(todoneCopy);
    setTodon(todonCopy);
  }

  return (
    <div>
      <h3>{todon[numb]}</h3>
      <h4>{donetext[numb]}</h4>
      <button className={style.btnstyle} onClick={() => movetoDo(numb)}>
        {btnstate === false ? "취소" : "취소"}
      </button>
      <button className={style.btnstyle} onClick={() => deleteTodon(numb)}>
        삭제
      </button>
    </div>
  );
};

export default Todone;
