import { useState } from "react";
import AppRouter from "components/Router";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  return <div>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} twitter</footer>
  </div>
}

export default App;