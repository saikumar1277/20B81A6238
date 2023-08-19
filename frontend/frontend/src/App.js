
import './App.css';
import { Route,Routes } from 'react-router-dom';
import AllTrainsSchedule from './pages/AllTrainsSchedule';
import Header from './pages/Header';
import Train from './pages/Train';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/" element={<AllTrainsSchedule/>}/>
          <Route path="/train/:id" element={<Train/>}/>
        </Routes>
        {/* <Train/> */}
    </div>
  );
}

export default App;
