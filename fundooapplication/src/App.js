import logo from './logo.svg';
import './App.css';
import SignIn from '../src/signin/Signin.jsx';
import SignUp from '../src/signup/Signup.jsx';
import Header from './components/header/Header';
import TakeNoteOne from './components/takenoteone/TakeNoteOne';
import TakeNoteTwo from './components/takeNoteTwo/TakeNoteTwo';
import TakeNoteThree from './components/takeNoteThree/TakeNoteThree';
import DashBoard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <DashBoard />
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
