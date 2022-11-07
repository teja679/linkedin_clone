import './App.css';
import Header from './pages/Header/Header'  ;
import Sidebar from './pages/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app_body'>
        <Sidebar />

      </div>
    </div>
  );
}

export default App;
