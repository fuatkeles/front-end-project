import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { global } from 'styled-jsx/css';

const Navbar = () => {
    return (
        <nav style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ marginLeft: '1.5rem', fontWeight:'800' }}>Front End Hub</Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" className="nav-link">
                    Home
                </Link>
                <Link href="/about" style={{ marginLeft: '1.5rem' }} className="nav-link">
                    About
                </Link>
                <Link href="/challenges" style={{ marginLeft: '1.5rem' }} className="nav-link">
                    Challenges
                </Link>
                <Link href="/community" style={{ marginLeft: '1.5rem' }} className="nav-link">
                    Community
                </Link>
            </div>
            <button className="github-button">
                <FaGithub className="github-icon" />
                    Login with GitHub
            </button>
        </nav>
    );
};

export default Navbar;