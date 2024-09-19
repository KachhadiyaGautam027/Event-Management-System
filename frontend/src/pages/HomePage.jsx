import EventList from '../components/EventList';
import LoginPage from '../pages/LoginPage';
import React from 'react';


const HomePage = () => {
  return (
    <div>
      <EventList />
      <LoginPage />
    </div>
  );
};

export default HomePage;
