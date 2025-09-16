
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
    <Navbar></Navbar>
      <div className='max-w-11/12 mx-auto'>
        <h1 className='text-2xl font-bold text-center py-8 bg-accent'>Users management Projects</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
