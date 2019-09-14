//Computer Select ModelDetails

import * as React from 'react'

export default function ModelDetails(props) {

  console.log("props.computers.selected is", props.computers.selected)
  return (<div>

    There are { props.computers.selected.length } computers available.
    {

          props &&
          <ul>{props.computers.selected.map(computer => <li>{computer.selected}</li>)}</ul>
    }
  </div>)
}