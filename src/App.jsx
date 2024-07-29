import { useEffect, useState } from 'react'

import './App.css'

function App() {
  console.log('App rendered')
  const [loggedIn,setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  // if(storedLogin){
  //   setLoggedIn(true);
  // }
  //this is wrong because it will cause an infinite loop, that's why we use useEffect
  //side effect is something that happens outside of the component
  useEffect(()=>{
    const storedLogin = localStorage.getItem('loggedIn')
    if(storedLogin=="true"){
      setLoggedIn(true);
    }
  },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)  
    console.log('submit')
    setLoggedIn(true)
    localStorage.setItem('loggedIn',true)
  }
  return (
    <>
    <div className='formSection'>{
    loggedIn ?<div> Welcome<button onClick={()=>{setLoggedIn(false);
    localStorage.removeItem("loggedIn")}}> LogOut</button></div> :
    <form onSubmit={handleSubmit} className='Form'>
     <div> <input type="text" className='emailInput' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
     <div><input type="password" className="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
     <div><button type='submit' className={(email.length>5&&password.length>5)?"enabled":"disabled"} >Submit</button></div>
    </form>}
    </div>
    </>
  )
}

export default App
