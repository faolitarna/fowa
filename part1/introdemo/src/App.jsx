const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
} 

const App = () => {
  console.log('Hello from component.')
  const a = 10
  const b = 20
  const sum = a + b   
  const age = 33
  console.log('Sum:', sum)

  
  return (
    <div>
      <p>Hello world</p>
      <br />
      <Hello  name="George" age={99+1}/>
      <Hello  name="Daisy" age={age}/>
      <Hello  />
      <br />
      <p>Sum of {a} plus {b} is: {sum}</p>
    </div>
  )
}

export default App