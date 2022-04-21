import './index.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux';
import { GetPlayListItemsAPI } from '../../api-calls/fetchApi';
import { PlayListItemI } from '../../interfaces/PlayListItemInterface';
import { SongsLimited } from '../song/index';

interface PlayListCompProps{
    url: string;
    name: string;
    description: string;
    playListID: string;
}

const PlayListsComp = (props: PlayListCompProps) => {
    const [trackShowned, setTrackShowned] = useState<boolean>(false);
    const [songData, setSongData] = useState<PlayListItemI[]>([]);

    const accessToken   = useSelector((state: State) => state.userData.token);

    const showTracks = async () =>{
        const songDataIn = await GetPlayListItemsAPI(props.playListID, accessToken);
        setSongData(songDataIn);
        setTrackShowned(true);
    }

    const hideTracks = () => {
        setSongData([]);
        setTrackShowned(false);
    }

    return (
        <>
            <div className='child2'>
                <div><img className="songImage" src={props.url} alt="" data-testid="test-url"/></div>
                <h2 className='textTdElement' data-testid="test-name">{props.name}</h2>
                <p className='textTdElement' data-testid="test-description">{props.description}</p>
                {!trackShowned ? 
                    <button onClick={showTracks}>Show Tracks</button>
                : 
                    <button onClick={hideTracks}>Hide Tracks</button>
                }
                <div className='songLimited' data-testid="song-wrapper">
                    <table>
                        {songData.map((data, index) => 
                                <SongsLimited 
                                    key={index}
                                    name={data.track.name} 
                                    artistName={data.track.artists[0].name} 
                                    albumName={data.track.album.name}
                                />
                            )
                        }
                    </table>
                </div>
            </div>
        </>
    )
}
export default PlayListsComp;