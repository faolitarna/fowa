import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
        <div>
          button press history: {props.allClicks.join(' ')}
        </div>
      )
  }  
  
  // const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  const Button = (props) => { 

    console.log('props value is', props)
    const { onClick, text } = props
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}

      <p>total: {total}</p>
      <History allClicks={allClicks}    />
    </div>
  )
}

export default App
