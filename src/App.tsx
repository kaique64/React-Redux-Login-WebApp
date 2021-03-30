import React from 'react';
import Login from './pages/Login';
import './Global.css';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
