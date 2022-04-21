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

interface SongsLimitedProps {
    name: string;
    artistName: string;
    albumName: string;
}

export const Songs = (props:SongsProps) => {
    const [selectedStatus, setSelectedStatus] = useState(true);

    const SwitchStatus = () => {
        setSelectedStatus(!selectedStatus);
        props.selectSong();
    }

    return(
        <>
            <div className='child'>
                <div><img className="songImage" src={props.url} alt=""/></div>
                <h2 className='textTdElement' data-testid = "name-test">{props.name}</h2>
                <p className='textTdElement' data-testid = "artistName-test">{props.artistName}</p>
                <p className='textTdElement' data-testid = "albumName-test">{props.albumName}</p>
                <div><button className="songButton" type="button" onClick={SwitchStatus}>{selectedStatus ? "Select" : "Deselect"}</button></div>
            </div>
        </>
    )
}

export const SongsLimited = (props: SongsLimitedProps) => {
    return(
        <tr className='songLimited'>
            <td className='textLimited'>{props.name}</td>
            <td className='textLimited'>{props.artistName}</td>
            <td className='textLimited'>{props.albumName}</td>
        </tr>
    )
}