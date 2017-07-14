import React,{Component} from 'react'

class Notebook extends Component{
  constructor (props){
    super(props)
    this.state={
      notebookList:[
        "Meeting1",
        "Shooping",
        "Dinner"
      ]
    }
  }
  render(){
    let notebookLists=this.state.notebookLists.map((list,id)=>{
      return(
        <li key={id}>
          {list}
          <button onClick={()=>{this.props.addItem(list)}}>+</button>
        </li>
      )
    })
    return(
      <div>
        <h2>Todo List </h2>
        <ul>
          {notebookLists}
        </ul>
      </div>
    )
  }

}

export default Notebook
