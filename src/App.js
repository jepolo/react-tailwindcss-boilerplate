import React from 'react'
import { render } from 'react-dom'
import './style.css'

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-300">
      <div className="text-3xl text-blue-700">
        React TailwindCss Boilerplate
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
