import React from 'react' ;
import github from "../asset/github.png"
import linkedin  from "../asset/linkedin.png"
import internet from "../asset/internet.png"
import heart from "../asset/heart.png" ;
 
export default function Footer() {
    return (
        <footer>
            <div className="made">
              <p>Made with <img src={heart} alt="heart" />  in algeria</p>
            </div>
           
            <div className="container">
                <a    className="item" href="https://github.com/seif1000" target="_blank">
                <img src={github} alt="alt"/>
                
                </a>
                <a href="https://linkedin.com/in/benmazouz-seif-eddine-721112141/" target="_blank" className="item">
                <img src={linkedin} alt="alt"/>
                
                </a>
                <a href="http://seifwin.ga/"className="item" target="_blank">
                    <img src={internet} alt="alt"/>
                </a>
            </div>
           
      
             
        </footer>
           
       
    )
}
