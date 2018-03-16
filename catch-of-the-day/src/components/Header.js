import React from "react";

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch of the Day</h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>

//                 </h3>
//             </header>        
//         )
//     }
// }

// Stateless Functional Components
const Header = props => (
    <header className="top">
        <h1>Catch of the Day</h1>
        <h3 className="tagline">
            <span>{props.tagline} - {props.date}</span>
        </h3>
    </header>        
)

export default Header;