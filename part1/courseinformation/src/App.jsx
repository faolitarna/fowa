const Header = (props) => {
  console.log('Header props:' , props)
  return (
    <h1>{props.data.name}</h1>
  )
}

const Part = (props) => {
  console.log('Part props:', props)
  return (
    <p>Part {props.content.name}, exercises: {props.content.exercises}</p>
  )
}

const Content = (props) => {
  // console.log('Content props:', props)
  return (
    <>
      <Part content={props.data.parts[0]}/>
      <Part content={props.data.parts[1]}/>
      <Part content={props.data.parts[2]}/>
    </>

  )
}
const Total = (props) => {
  console.log('Total props:', props)
  return (
    <p>Number of exercises in the whole course: {props.data.parts[0].exercises+props.data.parts[1].exercises+props.data.parts[2].exercises}</p>
  )
} 



const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]}

  return (
    <div>
      <Header data={course} />
      <Content data={course} />
      <Total data={course} /> 
    </div>
  )
  
}

export default App