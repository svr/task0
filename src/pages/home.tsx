import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className="home-page">
            <h1>Home page for the technical task</h1>
            <p>
                Please navigate to <Link to="/employees">/employees</Link>
            </p>
        </div>
    );
}
