import logo from './logo.svg';
import './App.css';
import { Form } from "./Form";
import  GlobalContext  from './context/GlobalContext';

function App() {
  return (
    <GlobalContext>
    <Form />
    </GlobalContext>
  );
}

export default App;
