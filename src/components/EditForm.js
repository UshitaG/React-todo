import React, { useState } from "react";

const EditForm = props => {
  const [text, setText] = useState(" ");

  const textHandler = e => {
    setText(e.target.value);
  };
  const editTodoHandler = e => {
    e.preventDefault();
    props.setList(
      props.list.map(todo => {
        if (todo.id === props.item.id) {
          return {
            ...todo,
            text: text
          };
        }
        return todo;
      })
    );
    props.close();
  };
  return (
    <>
      <input
        onChange={textHandler}
        defaultValue={props.item.text}
        type="text"
        className="todo-input"
      />

      <button onClick={editTodoHandler} type="submit">
        Edit
      </button>
    </>
  );
};

export default EditForm;
