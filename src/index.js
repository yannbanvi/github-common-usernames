import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GithubFollowers from './pages/GithubFollowers';
import Home from './pages/Home';
import { GITHUB_FOLLOWERS_ROUTE, HOME_ROUTE } from './pages/routesUtil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

            <Route index element={<Home />}/>
            <Route path={GITHUB_FOLLOWERS_ROUTE} element={<GithubFollowers />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

