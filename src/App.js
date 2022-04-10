
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Mainpage from './components/main';
import './components/main.css';
import './components/stars.css';
import Dashboard from './components/Dashboard';
import './components/Style.css';
import Request from './components/Request';
import Member from './components/Member';
import Upload from './components/upload';

function App() {
  return (
      <div>
      
         <BrowserRouter>
    
         
              <Routes>
               
                  <Route exact path='/' element={<Mainpage />}>
                  </Route>

                  <Route exact path='/dash' element={<Dashboard />}>
                  </Route>

                  
                  <Route exact path='/Req' element={<Request />}>
                  </Route>
    
                  <Route exact path='/Member' element={<Member />}>
                  </Route>

                  <Route exact path='/upload' element={<Upload />}>
                  </Route>
    
              </Routes>
         </BrowserRouter>
      </div>

   
  );
}

export default App;