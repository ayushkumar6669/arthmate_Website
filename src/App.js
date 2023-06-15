import 'bootstrap/dist/css/bootstrap.css';
import { employees } from './config/employees';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar, HomePage, Team, AboutPage } from './components';
import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/store';
import UserForm from './components/userForm';
import NextScreen from './components/NextScreen';
import AxiosExample from './components/axiosExample'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<Team employeeData={employees} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/next-screen" element={<NextScreen />} />
            <Route path="/axios-example" element={<AxiosExample/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;




