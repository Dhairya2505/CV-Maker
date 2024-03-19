import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage.jsx"
import Signin from "./Components/Signin.jsx"
import Signup from "./Components/SignUp.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />  } />
        <Route path='/about' element={<LandingPage />} />
        <Route path='/signin' element={<LandingPage component={<Signin />} />} />
        <Route path='/signup' element={<LandingPage component={<Signup />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
