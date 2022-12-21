import logo from './logo.svg';
import './App.css';
import SignIn from '../src/signin/Signin.jsx';
import SignUp from '../src/signup/Signup.jsx';
import Header from './components/header/Header';
import TakeNoteOne from './components/takenoteone/TakeNoteOne';
import TakeNoteTwo from './components/takeNoteTwo/TakeNoteTwo';
import TakeNoteThree from './components/takeNoteThree/TakeNoteThree';
import DashBoard from './components/dashboard/dashboard';
import Router1 from './components/router/Router';
import Headermui from './components/Headermui'
//import Router1 from './components/router/Router1';

function App() {
  return (
    <div className="App">
      {/* <Headermui /> */}
      <Router1 />
      {/* <DashBoard /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Header/>
      <TakeNoteOne />
      <TakeNoteTwo />
      <TakeNoteThree />  */}
    </div>
  );
}

export default App;
