import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import './index.css';
import { AddUser, Home, InvestorsList, UserList } from './pages';
import { SideBar, Footer } from './components';

const activeChain = "mumbai";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider
    clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
    activeChain={activeChain}
  >
    <SideBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/investor-list" element={<InvestorsList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  </ThirdwebProvider>
);
