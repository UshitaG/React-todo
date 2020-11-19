import React, { useState } from "react";
import Modal from "react-modal";
import Form from "./Form";
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
const Input = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = e => {
    e.preventDefault();

    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    props.setText("");

    setModalIsOpen(false);
  };

  const statusHandler = e => {
    props.setStatus(e.target.value);
  };
  return (
    <form>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>

          <option value="done">Done</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <button onClick={setModalIsOpenToTrue}>
        <i className="fas fa-plus-square"></i>
        <span className="add-text">Add</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <button onClick={setModalIsOpenToFalse}>x</button>
        <Form
          text={props.text}
          setText={props.setText}
          list={props.list}
          setList={props.setList}
          setModalIsOpenToFalse={setModalIsOpenToFalse}
        />
      </Modal>
    </form>
  );
};

export default Input;
