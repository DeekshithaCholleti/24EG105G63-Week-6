import './App.css'
import UserList from "./Components/UsersList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Counter from './Components/Counter';
import APIDemo from './Components/APIDemo';
import FormDemo from './Components/FormDemo';
import FormTask from './Components/FormTask';
function App(){
  return(
    <div>
      <Navbar />
      <div>
      <FormDemo />
      </div>
      <Footer />
      <div>
        <FormTask />
      </div>
    </div>
 
  );
}
export default App