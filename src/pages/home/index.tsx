import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { GetUserDataAPI } from '../../api-calls/fetchApi';
import ProfileHeader from '../../components/profileHeader';
import ProfileCard from '../../components/profileCard';

import './index.css';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../redux/';


function Home (){
    const CLIENT_ID     = "50617af7a91f49b78dd47bcc7ee69433";
    const REDIRECT_URI  =  window.location.href;
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE         = 'playlist-modify-private, playlist-read-private';

    const dispatch = useDispatch();

    const { updateProfileData, removeProfileData } = bindActionCreators(actionCreators, dispatch);
  
    const loginStatus   = useSelector((state: State) => state.userData.loginStatus);
    const profilePicUrl = useSelector((state: State) => state.userData.picUrl);
    const userName      = useSelector((state: State) => state.userData.userName);
    const followers     = useSelector((state: State) => state.userData.followers);

    useEffect(() => {
        const hash = window.location.hash
        let tokenIn: string | null = null;

        if (!tokenIn && hash) {
            
            const currentUrl = window.location.hash.split("&");
            let newUrl = currentUrl[0];
            newUrl = newUrl.substring(newUrl.lastIndexOf("=")+1);
            tokenIn = newUrl;
            window.location.hash = "";
        }
        if (tokenIn !== null){
            const getUserData = async () => {
                const userData = await GetUserDataAPI(tokenIn);
                updateProfileData(userData.display_name, userData.images[0].url, tokenIn, userData.followers.total, userData.id)
            }
            getUserData()
        }
      })

    const logout = () => {
        removeProfileData();
    }  

    return(
        <div className='bodyWrapperHome'>
            {loginStatus ? <ProfileHeader 
                    loginStatus = {loginStatus} 
                    imageUrl    = {profilePicUrl}
                    displayName = {userName}
                />
            :
                <ProfileHeader 
                    loginStatus = {loginStatus} 
                    imageUrl    = {""}
                    displayName = {""}
                />
            }
            <div className='contentWrapperHome'>
                <ProfileCard
                    loginStatus = {loginStatus} 
                    imageUrl    = {profilePicUrl}
                    displayName = {userName}
                    followers   = {followers}/>
                    
                <br/>
                    <Link className="buttonA" to="/create-playlist">Create Playlist</Link>
                <br/>
                    <Link className="buttonA" to="/playlist">Playlist</Link>
                <br/>
                {!loginStatus ?
                    <a className="buttonA" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </div>
        </div>
    )
}

export default Home;