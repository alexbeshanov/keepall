import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

export const ThirdPage = () => (
    <div className="container">
        <p>Third Page!</p>
        <li>
            <Link to="/">Exit</Link>
        </li>
    </div>
);
export default ThirdPage;