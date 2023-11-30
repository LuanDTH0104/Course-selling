import logo from './logo.svg';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './Page/Home';
import Search from './Page/Search';
import Login from './Page/Login';

function App() {
  const {keyword} = useParams();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
