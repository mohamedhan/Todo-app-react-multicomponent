import React from 'react'

export default function Item(props) {
    const el=props.element
    return (
        <div className="items" >
            <button onClick={()=>props.complete(el.id)} > {(el.isCompleted) ?"undo":"complete" } </button>
              <button onClick={()=>props.delete(el.id)} >delete</button>
              <p  style={{textDecoration:(el.isCompleted)&& "line-through" }} > {el.text} </p>
        </div>
    )
}
