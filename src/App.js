import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'
import { throwStatement } from '@babel/types';
//import {Provider} from 'react-redux'
//import store from './store'

//COMPUTER SELECT

export class App extends Component {

  state = {

    selected: ""

  }
  updateSelection = (event) => {

    event.preventDefault()

    const computerSelected = event.target.value
    //console.log("event options is", event.target)

    this.setState({ selected: computerSelected })

    //console.log("the value of this.state.selected is", this.state)

  }

  addComputer = ()=>{

    //console.log("Button clicked right?")
    const action = {

      type: 'ADD',
      payload: this.state
    }

    this.props.dispatch(action)
    console.log("this.props is?", this.props.selected)

    //console.log("action is", action)
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

          Computer Select
          <ModelDetails computers = {this.props}/>
          
          <select onChange = {(event)=> this.updateSelection(event)} >
            <option value = "">-- pick a model --</option>
            <option value = {data[0].name}>{data[0].name} ({data[0].year})</option>
            <option value = {data[1].name}>{data[1].name} ({data[1].year})</option>
            <option value = {data[2].name}>{data[2].name} ({data[2].year}</option>
            <option value = {data[3].name}>{data[3].name} ({data[3].year}</option>

          </select>
          <button onClick = {this.addComputer}>Add</button>
          
        </div>
  
      );
  }
}

const mapStateToProps = (state) => {

  return {

    selected: state

  }
}

//export default App;

export default connect(mapStateToProps)(App)
