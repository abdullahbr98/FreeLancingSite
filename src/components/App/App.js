import './App.css';
import { Navbar } from '../Navbar/Navbar';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import RecentSearches from '../RecentSearches/RecentSearches';
export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Nav />
      <Main />
      {/* <div className='container'>
        <RecentSearches />
      </div> */}
    </div>
  );
}
