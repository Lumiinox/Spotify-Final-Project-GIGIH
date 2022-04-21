import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux";
import { GetCurrentUserPlayListAPI } from "../../api-calls/fetchApi"
import { Link } from "react-router-dom";

import { PlayLists } from "../../interfaces/PlayListInterface"
import PlayListsComp  from "../../components/playlists"
import ProfileHeader from "../../components/profileHeader";

function CurrentPlayList(){
    const[playListState, setPlayListState] = useState<PlayLists[]>([]);
    const[loadPageFirstTime, setLoadPageFirstTime] = useState<boolean>(true);

    const loginStatus   = useSelector((state: State) => state.userData.loginStatus);
    const profilePicUrl = useSelector((state: State) => state.userData.picUrl);
    const userName      = useSelector((state: State) => state.userData.userName);
    const accessToken   = useSelector((state: State) => state.userData.token);

    useEffect(() => {
        if (loadPageFirstTime){
            const getPlayListData = async () => {
                const currentPlayList = await GetCurrentUserPlayListAPI(accessToken);     
                setPlayListState(currentPlayList);       
            }
            getPlayListData();
            setLoadPageFirstTime(false);
        }
        
    }, [loadPageFirstTime, playListState, accessToken])

    return(
        <div className="bodyWrapperHome">
            <ProfileHeader 
                loginStatus = {loginStatus} 
                imageUrl    = {profilePicUrl}
                displayName = {userName}
            />
            <Link to="/">Back Home</Link>
            <div className="parent">
                {playListState.map((data, index) => 
                            <PlayListsComp
                                key         = {index}
                                playListID  = {data.id}
                                url         = {data.images[0].url}
                                name        = {data.name} 
                                description = {data.description} 
                            />
                        )
                    }
            </div>
        </div>
    )
}

export default CurrentPlayList;