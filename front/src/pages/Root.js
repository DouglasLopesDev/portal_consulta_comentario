import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import App from './home/App';
import CommentsList from './comments/CommentsList';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/name=:name" element={<CommentsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;