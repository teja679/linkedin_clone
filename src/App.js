import './App.css';
import Header from './pages/Header/Header'  ;
import Feed from './pages/Feed/Feed';
import Sidebar from './pages/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app_body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
