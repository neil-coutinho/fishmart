import React from "react";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="top">
                    <h1>Catch of the day</h1>
                    <h3 className="tagline"><span>Tagline goes here</span></h3>
                </header>
               
            </React.Fragment>
            
        )
    }
}

export default Header;