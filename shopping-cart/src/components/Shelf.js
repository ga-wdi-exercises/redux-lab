import React,{Component} from 'react'

class Shelf extends Component{
  constructor (props){
    super(props)
    this.state={
      shelfItem:[
        "Bananas",
        "Frozen Pizza",
        "Flamin' Hot Cheetos",
        "Arugula"
      ]
    }
  }
  render(){
    let shelfItems=this.state.shelfItem.map((item,id)=>{
      return(
        <li key={id}>
          {item}
          <button onClick={()=>{this.props.addItem(item)}}>+</button>
        </li>
      )
    })
    return(
      <div>
        <h2>Store Inventory</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    )
  }

}

export default Shelf
