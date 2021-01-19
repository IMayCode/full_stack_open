import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  ]


  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercise}</p>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
      </div>
    )
  }
  const Footer = (props) => {
    let sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
      <div>
        <p>Number of exercises {sum}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Footer parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))