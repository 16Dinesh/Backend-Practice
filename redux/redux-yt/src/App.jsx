import './App.css'

import { Route, Routes } from "react-router-dom";
import Page1 from './Page-1';
import Page2 from './Page-2';


function App() {

  return (
     <div>
      <Routes>
         <Route path='/' element={<Page1/>}/>
         <Route path='/page2' element={<Page2/>}/>
      </Routes>
     </div>
  )
}

export default App
