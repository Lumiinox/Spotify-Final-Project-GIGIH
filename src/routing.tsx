import {Switch, Route, Redirect} from "react-router-dom";
import CreatePlayList from "./pages/create-playlist/index";
import Home from "./pages/home/index";
import {useSelector} from 'react-redux';
import React from "react";
import { State } from './redux';

export default function RoutingRender(){
    const loginStatus = useSelector((state: State) => state.userData.loginStatus);
    return(
        <Switch>
            <Route path="/create-playlist">
                <CreatePlayList/> 
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}
