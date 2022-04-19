import Songs from '../../components/song/index';
import Search from '../../components/search';
import ProfileHeader from '../../components/profileHeader';
import CreatePlayListForm from '../../components/createPlayListForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as CallApi from "../../api-calls/fetchApi";
import { State } from '../../redux';

import './index.css';

import { ISongs } from '../../interfaces/SongInterface';
import { PlayListInfo } from '../../interfaces/PlayListInterface';

import { Link } from "react-router-dom";

function CreatePlayList(){

    const [selectedSongUri, setSelectedSongUri] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<ISongs[]>([]);
    
    const [searchKeyword, setSearchKeyword] = useState<string>("");

    const [playListInfo, setPlayListInfo] = useState<PlayListInfo>({
        name:"",
        description:"",
    })

    const [searchStatus, setSearchStatus] = useState(false);

    const loginStatus   = useSelector((state: State) => state.userData.loginStatus);
    const profilePicUrl = useSelector((state: State) => state.userData.picUrl);
    const userName      = useSelector((state: State) => state.userData.userName);
    const accessToken   = useSelector((state: State) => state.userData.token);
    const userID        = useSelector((state: State) => state.userData.userId);

    useEffect(() => {
        if(!searchStatus){
            const tempSelectedSong = searchResult.filter((searchResult) => selectedSongUri.includes(searchResult.uri));
            setSearchResult(tempSelectedSong);
        }
    },[selectedSongUri]);

    useEffect(()=> {
        const CallSpotifySearch = async () => {
            const searchResultData = await CallApi.CallSpotifySearch(accessToken, searchKeyword)
            if (searchResultData !== null){
                console.log(searchResultData);
                setSearchStatus(true);            
                const tempSelectedSong = searchResult.filter((searchResult) => selectedSongUri.includes(searchResult.uri));
                const tempSearchResult = searchResultData.tracks.items.filter((searchResult: ISongs) => !selectedSongUri.includes(searchResult.uri));
                setSearchResult([...tempSelectedSong, ...tempSearchResult]);
            }
        }
        CallSpotifySearch();
    },[searchKeyword])

    // const CallSpotifySearch = async (e) => {
    //     e.preventDefault();
        
    //     const searchResultData = await CallApi.CallSpotifySearch(accessToken, searchKeyword)
    //     if (searchResultData !== null){
    //         console.log(searchResultData);
    //         setSearchStatus(true);            
    //         const tempSelectedSong = searchResult.filter((searchResult) => selectedSongUri.includes(searchResult.uri));
    //         const tempSearchResult = searchResultData.tracks.items.filter((searchResult: ISongs) => !selectedSongUri.includes(searchResult.uri));
    //         setSearchResult([...tempSelectedSong, ...tempSearchResult]);
    //     }
    // }

    const selectSong = (searchResult: ISongs) => {
        const tempUri = searchResult.uri;
        if (selectedSongUri.includes(tempUri)){
            setSelectedSongUri(selectedSongUri.filter((item) => item !== tempUri));
        } else {
            setSelectedSongUri([...selectedSongUri, tempUri]);
        }
    }

    const CreatePlaylist = async () => {
        const playListID = await CallApi.CreatePlaylist(playListInfo.name, playListInfo.description, userID, accessToken);
        return playListID;
        }

    const AddMusicToCreatedPlaylist = async (playListID:string) => {
        let uris = selectedSongUri;
        console.log("PlayListID")
        console.log(playListID);
        console.log(uris);
        const data = JSON.stringify({
            uris
        
        });
        await CallApi.AddMusicToCreatedPlaylist(data, playListID, accessToken).then();
    }

    const CreateAndAddToPlaylist = async () =>{
        const playListID = await CreatePlaylist();

        await AddMusicToCreatedPlaylist(playListID);
    }

    return(
        <div className='bodyWrapper'>
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
            
        <Link to="/">Back Home</Link>

            {loginStatus && 
                <>
                    <CreatePlayListForm 
                        setPlayListInfo = {setPlayListInfo}
                        CreateAndAddToPlaylist = {CreateAndAddToPlaylist}/> 

                    <br/>
                    <br/>
                    <br/>

                    <Search 
                        setSearchKeyword = {setSearchKeyword} 
                    />

                    <br/>
                    <div className='parent'>
                        {searchResult.map((data) => 
                                    <Songs
                                        key         = {data.id}
                                        url         = {data.album.images[1].url} 
                                        name        = {data.name} 
                                        artistName  = {data.album.artists[0].name} 
                                        albumName   = {data.album.name}
                                        selectSong  = {() => selectSong(data)}
                                    />
                                )
                            }
                    </div>
                </>
            } 
        </div>
    )
}

export default CreatePlayList;