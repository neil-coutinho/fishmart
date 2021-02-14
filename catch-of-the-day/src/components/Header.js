import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className="top">
                <h1>Fresh Fish</h1>
                <h3 className="tagline"><span>{props.tagline}</span></h3>
            </header>
        </React.Fragment>
    )
}

Header.propTypes = {
    tagline: PropTypes.string
}

// class Header extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <header className="top">
//                     <h1>Catch of the day</h1>
//                     <h3 className="tagline"><span>Tagline goes here</span></h3>
//                 </header>
               
//             </React.Fragment>
            
//         )
//     }
// }

export default Header;