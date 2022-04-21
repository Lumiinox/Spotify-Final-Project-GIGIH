import axios from "axios";

export const CallSpotifySearchAPI = async (token: string | null, searchKeyword: string) => {
    const response = await axios.get(`https://api.spotify.com/v1/search`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKeyword,
            type: "track"
        }
    });
    return response.data;
}

export const GetUserDataAPI = async (token: string | null) => {
    const headerData = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.get(`https://api.spotify.com/v1/me`,headerData)
    return response.data;
}


export const CreatePlaylistAPI = async (playlistName: string, playlistDescription: string, userID: string, token: string | null) => {
    const data = JSON.stringify({
        name: playlistName,
        description: playlistDescription,
        public: false,
        collaborative: false,
    })

    const headerConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type' : 'application/json',
        },
    }

    const response = await axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`,
        data, 
        headerConfig
    );
    return response.data.id;
}

export const AddMusicToCreatedPlaylistAPI = async (data: string, playListID: string, token: string | null) => {
    const headerConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type' : 'application/json',
        },
    }
    const response = await axios.post(`https://api.spotify.com/v1/playlists/${playListID}/tracks`,
        data, 
        headerConfig);
    return response.data;
}

export const GetCurrentUserPlayListAPI = async (token: string | null) => {
    const headerConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    }
    const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, headerConfig);
    return response.data.items;
}

export const GetUserPlayListAPI = async (token: string | null, userID: string) => {
    const headerConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    }
    const response = await axios.get(`https://api.spotify.com/v1/users/${userID}/playlists`, headerConfig);
    return response.data;
}

export const GetPlayListItemsAPI = async (playListID: string, token: string | null) => {
    const headerConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type' : 'application/json',
        },
    }
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playListID}/tracks`, 
        headerConfig);
    return response.data.items;
}
