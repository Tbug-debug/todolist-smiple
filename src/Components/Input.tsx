import React, { useState } from "react";
import styles from "./Input.module.css";

interface Todoprops {
  todo: string[];
  doing: string[];
  setodo: (e: string[]) => void;
  setdoing: (e: string[]) => void;
}

const Input = ({ todo, doing, setodo, setdoing }: Todoprops) => {
  const [todoInput, setodoInput] = useState("");
  const [doingInput, setdoingInput] = useState("");

  function addTood(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = event;
    setodoInput(value);
  }
  function addTodoing(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = event;
    setdoingInput(value);
  }

  function addTotodoing() {
    let todoCopy = [...todo];
    let todoingCopy = [...doing];
    if (todoInput === "" || doingInput === "") {
      return;
    } else {
      todoCopy.push(todoInput);
      todoingCopy.push(doingInput);
      setodo(todoCopy);
      setdoing(todoingCopy);
      setodoInput("");
      setdoingInput("");
    }
  }

  return (
    <div className={styles.inputbox_in}>
      <input
        placeholder={"제목"}
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: "rgb(233, 233, 233)",
          border: "none",
          outline: "none",
        }}
        value={todoInput}
        onChange={addTood}
      />
      <input
        placeholder={"내용"}
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: "rgb(233, 233, 233)",
          border: "none",
          outline: "none",
        }}
        value={doingInput}
        onChange={addTodoing}
      />
      <button
        style={{
          background: "white",
          border: "3px solid #222831",
          color: "black",
          fontWeight: "bolder",
          padding: "10px",
          marginRight: "20px",
          cursor: "pointer",
          borderRadius: "10px",
          fontSize: "14px",
        }}
        onClick={addTotodoing}
      >
        제출
      </button>
    </div>
  );
};

export default Input;
