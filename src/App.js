
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <div className="App">

      <ToastContainer />
      
      <Register />

      <Login />
      
    </div>
  );
};
