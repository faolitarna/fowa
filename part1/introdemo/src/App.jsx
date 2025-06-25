import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}



// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old.</p>
//     </div>
//   )
// } 

// const App = () => {
//   console.log('Hello from component.')
//   const a = 10
//   const b = 20
//   const sum = a + b   
//   const age = 33
//   console.log('Sum:', sum)

  
//   return (
//     <div>
//       <p>Hello world</p>
//       <br />
//       <Hello  name="George" age={99+1}/>
//       <Hello  name="Daisy" age={age}/>
//       <Hello  />
//       <br />
//       <p>Sum of {a} plus {b} is: {sum}</p>
//     </div>
//   )
// }

export default App

