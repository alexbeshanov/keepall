import React from "react";
import {Route, Link, Switch} from "react-router-dom";
import "../style/tabs.css";
import NewPassword from "../NewObject_Module/NewPassword";
import Password from "../List/password_list";
import Files from "../List/file_list";
import CreditCard from "../List/creditcard_list";
import Notes from "../List/notes_list";
import PassportData from "../List/passportData_list";
import NewNotes from "../NewObject_Module/NewNotes";
import NewCreditCard from "../NewObject_Module/NewCreditCard";
import NewPassportData from "../NewObject_Module/NewPassportData";
import NewFile from "../NewObject_Module/NewFile";
import NoInfo from "./NoInfo";

export const Tabs = (props) => (
    <div className="tabs">
        <ul className="tabs_ul">
            <li className="tabs_li">
                <Link to="/firstpage/password" className="tabs_Link">
                    <div className="tabs_div">Password</div>
                </Link>
            </li>
            <li className="tabs_li">
                <Link to="/firstpage/notes" className="tabs_Link">
                    <div className="tabs_div">Notes</div>
                </Link>
            </li>
            <li className="tabs_li">
                <Link to="/firstpage/creditcard" className="tabs_Link">
                    <div className="tabs_div">Credit Card</div>
                </Link>
            </li>
            <li className="tabs_li">
                <Link to="/firstpage/passportdata" className="tabs_Link">
                    <div className="tabs_div">Passport Data</div>
                </Link>
            </li>
            <li className="tabs_li">
                <Link to="/firstpage/file" className="tabs_Link">
                    <div className="tabs_div">Files</div>
                </Link>
            </li>
        </ul>

        <Switch>
            <Route path="/firstpage/noinfo" exact component={NoInfo}/>

            <Route path="/firstpage/password" exact component={Password}/>
            <Route path="/firstpage/notes" exact component={Notes}/>
            <Route path="/firstpage/creditcard" exact component={CreditCard}/>
            <Route path="/firstpage/passportdata" exact component={PassportData}/>
            <Route path="/firstpage/file" exact component={Files}/>

            <Route path="/firstpage/password/newpassword" exact component={NewPassword}/>
            <Route path="/firstpage/notes/newnotes" exact component={NewNotes}/>
            <Route path="/firstpage/creditcard/newcreditcard" exact component={NewCreditCard}/>
            <Route path="/firstpage/passportdata/newpassportdata" exact component={NewPassportData}/>
            <Route path="/firstpage/file/newfile" exact component={NewFile}/>
        </Switch>
    </div>
);
export default Tabs;