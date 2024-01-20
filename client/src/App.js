import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Create from "./components/create";
import Navbar from './components/navbar'
import CreateGame from './pages/createGame'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<CreateGame />} 
            />
          </Routes>
        </div>
        </BrowserRouter>
        </div>
  );
};
export default App;