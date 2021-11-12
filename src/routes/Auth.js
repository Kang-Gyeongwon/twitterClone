import { useState } from "react"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newAccount, setNewAccount] = useState(true)

  const handleLogInInput = e => {
    // console.log(event.target.name)
    const {target: { name, value }} = e
    if(name === "email") {
      setEmail(value)
    } else if(name === "password") {
      setPassword(value)
    }
  }
  const handleLogInSubmit = e => {
    e.preventDefault()
    if(newAccount){
      // create newAccout
    } else {
      // log ins
    }
  }
  return <div>
    <form onSubmit={handleLogInSubmit}>
      <input name="email" type="email" placeholder="Email" required
        value={email} onChange={handleLogInInput} 
      />
      <input name="password" type="password" placeholder="Password" required 
        value={password} onChange={handleLogInInput}
      />
      <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
    </form>
    <div>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  </div>
}

export default Auth