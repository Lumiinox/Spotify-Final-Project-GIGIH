import './index.css';
import React, { useState } from 'react';
import { PlayListInfo } from '../../interfaces/PlayListInterface';

interface IInput{
    name: string;
    description: string;
}

interface CreatePlayListProps{
    CreateAndAddToPlaylist: ()=> void;
    setPlayListInfo: React.Dispatch<React.SetStateAction<PlayListInfo>>;
}
const CreatePlayListForm: React.FC<CreatePlayListProps> = ({setPlayListInfo, CreateAndAddToPlaylist}) => {
    const [input, setInput] = useState<IInput>({
        name:"",
        description:"",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
 
    const handleClick = (): void => {
        if (!input){
            return;
        }
        setPlayListInfo(input);
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
                    onChange={handleChange}
                />
                <br/>
                <br/>

                <textarea 
                    placeholder = "Playlist Description" 
                    name="description"
                    onChange={handleChange}
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