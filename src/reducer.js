//computer select reducer
const reducer = (state = [], action = {}) => {
    switch (action.type) {
    
    case 'ADD':
        console.log("state is: ", state)
        console.log("action.payload is:", action.payload)
        
        return [...state, {...action.payload}]

    default:
      return state
    }
  }
  
  export default reducer