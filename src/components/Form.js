import React from "react";
import uuid from "react-uuid";

const Form = props => {
  const textHandler = e => {
    props.setText(e.target.value);
  };
  const submitInputHandler = e => {
    e.preventDefault();
    props.setList([
      ...props.list,
      { id: uuid(), text: props.text, completed: false }
    ]);
    props.setText("");
    props.setModalIsOpenToFalse();
  };
  return (
    <form>
      <br />
      <label>Task : </label>
      <input
        onChange={textHandler}
        value={props.text}
        type="text"
        className="todo-input"
      />
      <br />
      <button
        onClick={submitInputHandler}
        className="todo-button"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
