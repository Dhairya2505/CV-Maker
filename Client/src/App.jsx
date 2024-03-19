import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import Signin from "./Components/Signin.jsx";
import Signup from "./Components/SignUp.jsx";
import Details from "./Components/Details.jsx";
import Card from "./Components/Card.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />  } />
        <Route path='/about' element={<LandingPage />} />
        <Route path='/details' element={<LandingPage component={<Details />}/>} />
        <Route path='/card' element={<LandingPage component={<Card />}/>} />
        <Route path='/signin' element={<LandingPage component={<Signin />} />} />
        <Route path='/signup' element={<LandingPage component={<Signup />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

