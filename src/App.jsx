import { Field,Code  } from "./pages";
import './App.css'
import { Routes, Route ,BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <>

      <BrowserRouter>
          <Routes>

              <Route path="/" element={<Field/>} />
              <Route path="/code" element={<Code/> }/>

          </Routes>     
      </BrowserRouter>
      
  
    </>
  )
}

export default App
