import { useState } from "react";
import Todo from "./Components/Todo";
import Input from "./Components/Input";
import styles from "./App.module.css";
import Todone from "./Components/Todone";

function App() {
  const [todo, setTodo] = useState(["밥먹기"]);
  const [doing, setDoing] = useState(["짜장면 먹기"]);
  const [todon, setTodon] = useState(["밖에서 놀기"]);
  const [donetext, setDone] = useState(["피방가기"]);
  const [btnstate, setBtnstate] = useState(false);

  return (
    <div className={styles.todolayout}>
      <div className={styles.titlename}>
        <span className={styles.titlename_text}>TODO LIST</span>
        <span className={styles.titlename_text}>React</span>
      </div>
      <div className={styles.inputbox}>
        <Input todo={todo} doing={doing} setodo={setTodo} setdoing={setDoing} />
      </div>
      <div>
        <div className={styles.todobox}>
          <div className={styles.todobox_doing}>
            <div>
              <h2>오늘 할일</h2>
            </div>
            <div className={styles.todobox_outbox}>
              {todo.map((_, i) => {
                return (
                  <Todo
                    key={i}
                    numb={i}
                    todo={todo}
                    setodo={setTodo}
                    setdoing={setDoing}
                    doing={doing}
                    todon={todon}
                    donetext={donetext}
                    setTodon={setTodon}
                    setDone={setDone}
                    btnstate={btnstate}
                    setBtnstate={setBtnstate}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.todonebox}>
            <div>
              <h2>오늘 끝난 일</h2>
            </div>
            <div className={styles.todonebox_outbox}>
              {todon.map((_, i) => {
                return (
                  <Todone
                    key={i}
                    numb={i}
                    todo={todo}
                    setodo={setTodo}
                    setdoing={setDoing}
                    doing={doing}
                    todon={todon}
                    donetext={donetext}
                    setTodon={setTodon}
                    setDone={setDone}
                    btnstate={btnstate}
                    setBtnstate={setBtnstate}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
