import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

/**
 * @Author Adam Joseph
 * 
 * This is a component for the logo thats being shown in all pages in the webapplikation. Here the size and movement of the logo is coded for.
 * @returns The whole component and its information is returned.
 */
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