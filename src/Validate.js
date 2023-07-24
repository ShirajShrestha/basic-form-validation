import { useState } from "react"
import './index.css'

function Validate() {
    const [username, setUsername]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]=useState('')

    const [errorUsername, setErrorUsername]= useState('')
    const [errorEmail, setErrorEmail]= useState('')
    const [errorPassword, setErrorPassword]= useState('')
    const [errorConfirmPassword, setErrorConfirmPassword]=useState('')

    const [userColor, setUserColor]=useState('')
    const [emailColor, setEmailColor]=useState('')
    const [passwordColor, setPasswordColor]=useState('')
    const [confirmPasswordColor, setConfirmPasswordColor]=useState('')

    function validate(e){
        e.preventDefault()

        if(username.length>3){
            setErrorUsername('')
            setUserColor('green')
        }else{
            setErrorUsername('Username must be greater than 4 letters')
        }

        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('Email should have @')
        }

        if(password.length>7){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('Password should be at least 8 letters long')
        }

        if(password!=='' && password === confirmPassword){
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        }else{
            setErrorConfirmPassword("Password didn't match")
        }
    }

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
            <input type="text" placeholder="Name" style={{borderColor:userColor}} value={username} onChange={(e)=>setUsername(e.target.value)} />
            <p className="error">{errorUsername} </p>

            <input type="email" placeholder="Email" style={{borderColor:emailColor}} value={email} onChange={(e)=>setEmail(e.target.value)} />
            <p className="error">{errorEmail} </p>

            <input type="password" placeholder="Password" style={{borderColor:passwordColor}} value={password} onChange={(e)=>setPassword(e.target.value)} />
            <p className="error">{errorPassword} </p>

            <input type="password" placeholder="Confirm Password" style={{borderColor:confirmPasswordColor}} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            <p className="error">{errorConfirmPassword} </p>

            <button className="submit-btn" onClick={validate}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Validate
