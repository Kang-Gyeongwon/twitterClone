import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(authService.currentUser)
  
  return <div>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} twitter</footer>
  </div>
}

export default App;