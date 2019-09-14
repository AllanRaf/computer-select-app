import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'


export class App extends Component {

  state = {

    computerSelected: ""

  }
  
  updateSelection = (event) => {

    event.preventDefault()

    this.setState({ computerSelected: event.target.value })

  }

  addComputer = (event, data)=>{

    if(this.state.computerSelected === ""){

      return null

    }

    // retrieve data for computer which has been selected
    let computerPayload = ""
    
    for(let i = 0;i<data.length; i++){

      if(data[i].name === this.state.computerSelected){

        computerPayload = data[i]
        break;

      }

    }
    // end of retrieve data for computer which has been selected

    const action = {

      type: 'ADD',
      payload: computerPayload

    }

    
    this.props.dispatch(action)

  }
  
  
  render(){
  
    const data = [
      {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ]


      return (

        <div className="App">

          <ModelDetails computers = {this.props}/>
          
          <select onChange = {(event)=> this.updateSelection(event)} >
            <option value = "">-- pick a model --</option>
            <option value = {data[0].name}>{data[0].name} ({data[0].year})</option>
            <option value = {data[1].name}>{data[1].name} ({data[1].year})</option>
            <option value = {data[2].name}>{data[2].name} ({data[2].year})</option>
            <option value = {data[3].name}>{data[3].name} ({data[3].year})</option>

          </select>

          <button onClick = {(event)=> this.addComputer(event, data)}>Add</button>
          
        </div>
  
      );
  }
}


const mapStateToProps = (state) => {

  return {

    computerSelected: state

  }
}

export default connect(mapStateToProps)(App)
