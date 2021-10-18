import { BrowserRouter } from 'react-router-dom';
import './App.css';
// delete this one later
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav></TopNav>
    </BrowserRouter>
  );
}

export default App;
