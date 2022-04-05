import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SubhanAllah from './components/tasbeeh/SubhanAllah';
import Alhamdulillah from './components/tasbeeh/Alhamdulillah';
import Allahuakbar from './components/tasbeeh/Allahuakbar';
import LailahaIllallah from './components/tasbeeh/LailahaIllallah';
import Astagfirullah from './components/tasbeeh/Astagfirullah';


function App() {
 
  return (
    <div className='container'>
      <Router>
         <Header />
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/' element={<SubhanAllah />} />
          <Route path='/Alhamdulillah' element={<Alhamdulillah />} />
          <Route path='/Allahuakbar' element={<Allahuakbar />} />
          <Route path='/Lailahaillallah' element={<LailahaIllallah />} />
          <Route path='/Astagfirullah' element={<Astagfirullah />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
