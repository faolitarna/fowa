const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>Part {props.content.part}, exercises: {props.content.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part content={props.content[0]}/>
      <Part content={props.content[1]} />
      <Part content={props.content[2]} />
    </>

  )
}
const Total = (props) => {
  return (
    <p>Number of exercises in the whole course: {props.total}</p>
  )
} 



const App = () => {
  const course = 'Half Stack application development'
  const content = [
      {part: 'Fundamentals of React', exercises: 10},
      {part: 'Using props to pass data', exercises: 7},
      {part: 'State of a component', exercises: 14}
  ]

  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={content[0].exercises+content[1].exercises+content[2].exercises} />
    </div>
  )
}

export default App