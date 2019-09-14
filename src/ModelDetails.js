import * as React from 'react'

export default function ModelDetails(props) {

  return (<div>

    {
          props &&
          <ul>{props.computers.computerSelected.map(computer => 
            <div><li key = {computer.name}>Name: {computer.name}</li>
                <li key = {computer.manufacturer}>Manufactuer: {computer.manufacturer}</li> 
                <li key = {computer.year}>Year: {computer.year}</li>
                <li key = {computer.origin}>Origin: {computer.origin}</li>
                <br />
          </div>
          )}</ul>
    }
  </div>)
}