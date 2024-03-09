import React from "react";
import logo from "../components/mux-logo.png"
const NavBar = () => {
    const listItems = ["Platform", "Docs & Tools", "Company", "Pricing", "Blog"]
    const listItemsRow = ["Get a Demo", "Log In"]
    return (
        <div className="wrapper">
            <div className="nav-container">
                <div className="logo"><img src={logo}></img></div>
                <div className="nav">
                    {listItems.map((item, key) => { return (<li key={key} className="nav-items">{item}</li>) })}
                    {listItemsRow.map((item) => {return (<div className="item-container">{item}</div>)})}
                    <button className="sign-up">Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default NavBar