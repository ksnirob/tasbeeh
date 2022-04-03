import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SubhanAllah from './components/tasbeeh/SubhanAllah';
import Alhamdulillah from './components/tasbeeh/Alhamdulillah';
import Allahuakbar from './components/tasbeeh/Allahuakbar';


function App() {
 
  return (
    <div className='container'>
      <Router>
         <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SubhanAllah' element={<SubhanAllah />} />
          <Route path='/Alhamdulillah' element={<Alhamdulillah />} />
          <Route path='/Allahuakbar' element={<Allahuakbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
