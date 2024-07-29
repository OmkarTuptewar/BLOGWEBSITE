import React from 'react'
import './App.css'
import {Route} from "react-router-dom"
import Hompage from './pages/Hompage'
import BlogPage from './pages/BlogPage'

const App = () => {
  return (
    
    <div className='App'>

      <Route  
         path='/' component={Hompage}
         exact
      />
      <Route
         path='/blogs' 
         component={BlogPage}
      />

    </div>

  )
}

export default App