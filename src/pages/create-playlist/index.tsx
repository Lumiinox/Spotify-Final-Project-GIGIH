import { Songs } from '../../components/song/index';
import Search from '../../components/search';
import ProfileHeader from '../../components/profileHeader';
import CreatePlayListForm from '../../components/createPlayListForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { State } from '../../redux';

import './index.css';

import { ISongs } from '../../interfaces/SongInterface';
import { PlayListInfoProps } from '../../interfaces/PlayListInterface';
import { CallSpotifySearchAPI, CreatePlaylistAPI, AddMusicToCreatedPlaylistAPI } from "../../api-calls/fetchApi";

import { Link } from "react-router-dom";

function CreatePlayListPage(){

    const [selectedSongUri, setSelectedSongUri] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<ISongs[]>([]);
    
    const [searchKeyword, setSearchKeyword] = useState<string>("");

    const [playListInfo, setPlayListInfo] = useState<PlayListInfoProps>({
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

    const CallSpotifySearch = async () => {       
        console.log(accessToken);
        console.log(searchKeyword);
        const searchResultData = await CallSpotifySearchAPI(accessToken, searchKeyword)
        if (searchResultData !== null){
            console.log(searchResultData);
            setSearchStatus(true);            
            const tempSelectedSong = searchResult.filter((searchResult) => selectedSongUri.includes(searchResult.uri));
            const tempSearchResult = searchResultData.tracks.items.filter((searchResult: ISongs) => !selectedSongUri.includes(searchResult.uri));
            setSearchResult([...tempSelectedSong, ...tempSearchResult]);
        }
    }

    const selectSong = (searchResult: ISongs) => {
        const tempUri = searchResult.uri;
        if (selectedSongUri.includes(tempUri)){
            setSelectedSongUri(selectedSongUri.filter((item) => item !== tempUri));
        } else {
            setSelectedSongUri([...selectedSongUri, tempUri]);
        }
    }

    const CreatePlaylist = async () => {
        const playListID = await CreatePlaylistAPI(playListInfo.name, playListInfo.description, userID, accessToken);
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
        await AddMusicToCreatedPlaylistAPI(data, playListID, accessToken);
    }

    const CreateAndAddToPlaylist = async () =>{
        const playListID = await CreatePlaylist();

        await AddMusicToCreatedPlaylist(playListID);
    }

    return(
        <div className='bodyWrapper'>
            <ProfileHeader 
                loginStatus = {loginStatus} 
                imageUrl    = {""}
                displayName = {""}
            />
    
        <Link to="/">Back Home</Link>

        {loginStatus && 
            <>
                <CreatePlayListForm 
                    setPlayListInfo = {setPlayListInfo}
                    CreateAndAddToPlaylist = {CreateAndAddToPlaylist}
                    playListInfo = {playListInfo}/>

                <br/>
                <br/>
                <br/>
                <Search 
                    searchKeyword = {searchKeyword}
                    setSearchKeyword = {setSearchKeyword} 
                    CallSpotifySearch = {CallSpotifySearch}
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

export default CreatePlayListPage;