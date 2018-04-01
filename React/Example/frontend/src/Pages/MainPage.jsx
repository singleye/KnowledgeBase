import React from 'react'
import { Link } from 'react-router-dom';

const MainPage = (props) => (
    <div>
        <h1>React playground</h1>
        <ul>
            <li><Link to="/component">Component</Link></li>
            <li><Link to="/ajax">Ajax</Link></li>
            <li><Link to="/refs">Refs</Link></li>
            <li><Link to="/state">State</Link></li>
        </ul>
    </div>
);

export default MainPage;
