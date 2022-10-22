
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotels from './pages/hotel/Hotel'

import './App.css';

function App() {
  return (
    <div>
      


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* path mặc định, muốn chuyển hướng thì ta phải điều chỉnh nguồn sau path gốc */}
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotels/>}/>  {/* :id nên sẽ bất kì sau path hotel nó đều dẫn đến  */}
        
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
