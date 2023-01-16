import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom'

import Current from "./components/Current/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Current Weather</Link>
              </li>
              <li>
                <Link to={'/'}>5 Day Forecast</Link>
              </li>
              <li>
                <Link to={'/'}>1 Hour/Minutely Forecast</Link>
              </li>
              <li>
                <Link to={'/'}>16 Day Forecast</Link>
              </li>
              <li>
                <Link to={'/'}>120 Hour Forecast</Link>
              </li>
              <li>
                <Link to={'/'}>Severe Weather Alerts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<Current />}
          />
          <Route
            path="*"
            element={<Navigate to={'/'} />}
          />
        </Routes>
      </main>

      <footer>
        <p>Created by Nabeel</p>
      </footer>
    </div >
  );
}

export default App;
