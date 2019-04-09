import React, {Component} from 'react';
import nesIcon from '../img/nes.png';
import reactIcon from '../img/react.png';
class Footer extends Component {


    render() {
        return(
        
                <div className="footer">
                    This site is powered by:
            <div>
                <img src={nesIcon} className="nes-icon"></img>
                <img src={reactIcon} className="react-icon"></img>
            </div>
            </div>
        );
    }
}

export default Footer;