import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function MainLayout() {
    return (
        <div className="app-container">
            <Header /> 
                <main>
                <Outlet />
            </main>
        </div>
    );
}
export default MainLayout;