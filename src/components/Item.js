import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import EditForm from "./EditForm";

const customStyles = {
  content: {
    top: "35%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#334d4d"
  }
};
const Item = props => {
  const deleteHandler = () => {
    props.setList(props.list.filter(todo => todo.id !== props.item.id));
  };
  const completeHandler = () => {
    props.setList(
      props.list.map(todo => {
        if (todo.id === props.item.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo">
      <button
        className={`complete-btn ${props.item.completed ? "question" : "tick"}`}
        onClick={completeHandler}
      >
        <i
          className={
            props.item.completed ? "fas fa-question-circle" : "fas fa-check"
          }
        ></i>
        {props.item.completed && <span>Redo</span>}
        {!props.item.completed && <span>Done</span>}
      </button>
      <li className={`todo-item ${props.item.completed ? "completed" : ""}`}>
        {props.item.text}
      </li>

      <Popup
        className="my-popup"
        trigger={
          <button className="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
        }
        position="right center"
        closeOnDocumentClick
      >
        {close => (
          <div>
            <a className="close" onClick={close}>
              &times;
            </a>
            <EditForm
              setText={props.setText}
              list={props.list}
              setList={props.setList}
              item={props.item}
              close={close}
            />
          </div>
        )}
      </Popup>

      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i> Delete
      </button>
    </div>
  );
};
export default Item;
