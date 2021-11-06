import React from 'react';
import noImg from '../assets/no_image.jpg'
 
function Header() {
    return (
        <div className="header">
            <a href="/#">Gmail</a>
            <a href="/#">Images</a>
            <img src={noImg} alt="profile-img" />
        </div>
    )
}

export default Header

