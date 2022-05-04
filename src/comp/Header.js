import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

function Header() {
    return (
        <div style={{
            textAlign: "center",
            marginTop: "5%",
        }} className="logo">
            <img src={logo} alt="Logo" width={150} height={150} />
        </div>
    );
}

export default Header;