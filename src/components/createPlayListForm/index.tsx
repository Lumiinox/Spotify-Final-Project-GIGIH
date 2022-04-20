import './index.css';
import React, { useState } from 'react';
import { PlayListInfoProps } from '../../interfaces/PlayListInterface';
interface IInput{
    name: string;
    description: string;
}

interface CreatePlayListProps{
    CreateAndAddToPlaylist: ()=> void;
    setPlayListInfo: React.Dispatch<React.SetStateAction<PlayListInfoProps>>;
    playListInfo: PlayListInfoProps;
}
const CreatePlayListForm: React.FC<CreatePlayListProps> = ({playListInfo, setPlayListInfo, CreateAndAddToPlaylist}) => {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setPlayListInfo({
            ...playListInfo,
            name: e.target.value
        })
        console.log(playListInfo.name)
    }
    const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setPlayListInfo({
            ...playListInfo,
            description: e.target.value
        })
    }
 
    const handleClick = (): void => {
        if (!playListInfo.name || !playListInfo.description ){
            return;
        }
        console.log(playListInfo.name)
        console.log(playListInfo.description)
        CreateAndAddToPlaylist();
    }
    return (
        <>
            <h1>Create Playlist</h1>
            <div className='formWrapper'>
                <input 
                    type = "text" 
                    placeholder = "Playlist Name" 
                    name="name"
                    onChange={handleNameChange}
                />
                <br/>
                <br/>

                <textarea 
                    placeholder = "Playlist Description" 
                    name="description"
                    onChange={handleDescChange}
                />

                <br/>
                <br/>
                <button 
                    type="submit" 
                    onClick={handleClick}
                > 
                    Create 
                </button>
            </div>
        </>
    )
}

export default CreatePlayListForm;