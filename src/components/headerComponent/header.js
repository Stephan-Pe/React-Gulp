import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
       <header className="header">

             <div className="logo">
         <img src="/images/Logo_SiteArt_New.svg" alt="Logo Siteart" />
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
       </header>
      );
    }
  
}

export default Header;