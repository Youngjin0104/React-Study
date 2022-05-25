import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import Profile from "./profile";

const Profiles = () => {
    return (
        <div>
            <h2>유저 목록</h2>
            <ul>
                <li>
                    {/* <Link to="/profiles/apple">apple</Link> */}
                    <NavLink to="/profiles/apple" activeStyle={{ background: 'black', color: 'white' }}>apple</NavLink>
                </li>
                <li>
                    <Link to="/profiles/banana">banana</Link>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div>유저를 선택하세요</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}

export default Profiles;