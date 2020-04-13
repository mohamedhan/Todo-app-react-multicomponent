import React, { Component } from 'react'
import '../App.css'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
export default class Main extends Component {
  state={
      items:[{text:"mouadh",id:0,isCompleted:false},{text:"anas",id:1,isCompleted:false},{text:"mohamed",id:2,isCompleted:false}]
  }
  
  //step1
  addItem=(inputt)=>{
    this.setState({
        items:[...this.state.items,inputt]
    })
  }

  deleteItem=(indice)=>{
      this.setState({
          items:this.state.items.filter((el,index)=> (el.id!==indice)  )
      })

  }

  completetItem=(indice)=>{
      this.setState({
          items:this.state.items.map((el,index)=> (el.id===indice)?{...el,isCompleted:!el.isCompleted} : el )
      })

  }

    render() {
        return (
            <div>
                {/* step 2:pass callback function as a props */}
                <TodoItem add={this.addItem} />
                <TodoList  list={this.state.items}  delete={this.deleteItem}  complete={this.completetItem} />
            </div>
        )
    }
}
