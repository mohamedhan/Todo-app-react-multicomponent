import React from "react";
import Item from "./Item";

export default function TodoList(props) {
  return (
    <div>
      {
        props.list.map((el,index)=> <Item element={el} delete={props.delete} complete={props.complete} />
           
        )
      }
    </div>
  );
}
