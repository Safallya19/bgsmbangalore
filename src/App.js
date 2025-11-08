import { useState } from 'react';
import './App.css';
import Register from './Register';
import SignIn from './SignIn';
import Welcome from './Welcome';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handleSwitchToRegister = () => {
    setCurrentPage('register');
  };

  const handleSwitchToSignIn = () => {
    setCurrentPage('signin');
  };

  const handleRegistrationSuccess = () => {
    setCurrentPage('welcome');
  };

  return (
    <div className="App">
      {currentPage === 'welcome' && (
        <Welcome onRegisterClick={handleSwitchToRegister} />
      )}
      {currentPage === 'signin' && (
        <SignIn onSwitchToRegister={handleSwitchToRegister} />
      )}
      {currentPage === 'register' && (
        <Register 
          onSwitchToSignIn={handleSwitchToSignIn}
          onRegistrationSuccess={handleRegistrationSuccess}
        />
      )}
    </div>
  );
}

export default App;
