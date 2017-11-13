import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

export const SecondPage = () => (
    <div className="container">
        <p>Second Page!</p>
        <li>
            <Link to="/">Exit</Link>
        </li>
    </div>
);
export default SecondPage;