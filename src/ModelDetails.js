import * as React from 'react'

export default function ModelDetails(props) {

  return (<div>

    {
          props &&
          <ul>{props.computers.computerSelected.map(computer => 
            <div><li key = {computer.name}>{computer.name}</li>
                <li key = {computer.manufacturer}> {computer.manufacturer}</li> 
                <li key = {computer.year}>{computer.year}</li>
                <li key = {computer.origin}> {computer.origin}</li>
                <br />
          </div>
          )}</ul>
    }
  </div>)
}