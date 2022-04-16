import './App.css';
import { Navbar } from '../Navbar/Navbar';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
export const App = () => {
  return (
    <div className="App" style={{ backgroundColor: '#F0F0F0' }}>
      <Navbar />
      <Nav />
      <Main />
    </div>
  );
}
