import './index.css';
import {useState} from 'react';
import React from 'react';

interface SongsProps {
    url: string;
    name: string;
    artistName: string;
    albumName: string;
    selectSong: () => void;
}

const Songs = (props:SongsProps) => {
    const [selectedStatus, setSelectedStatus] = useState(true);

    const SwitchStatus = () => {
        setSelectedStatus(!selectedStatus);
        props.selectSong();
    }

    return(
        <>
            <div className='child'>
                <div><img className="songImage" src={props.url} alt=""/></div>
                <h2 className='textTdElement'>{props.name}</h2>
                <p className='textTdElement'>{props.artistName}</p>
                <p className='textTdElement'>{props.albumName}</p>
                <div><button className="songButton" type="button" onClick={SwitchStatus}>{selectedStatus ? "Select" : "Deselect"}</button></div>
            </div>
        </>
    )
}
export default Songs;