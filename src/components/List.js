import React from "react";
import Item from "./Item";
const List = props => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.list.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            list={props.list}
            setList={props.setList}
          />
        ))}
      </ul>
    </div>
  );
};
export default List;
