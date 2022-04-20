import React from "react";
import { Link } from 'react-router-dom';

export default function NavItem({ content, to }) {
    return (
        <li className="text-lg font-semibold">
            <Link to={`${to}`}>{content}</Link>
        </li>
    );
}

