interface UpdateAccountData {
    type: "update-acc-data"
    payload: {
        userName: string,
        userId: string,
        profilePic: string,
        token: string,
        followers: string,
        loginStatus: boolean,
    }
}

interface RemoveAccountData {
    type: "remove-acc-data"
}

export type Action = UpdateAccountData | RemoveAccountData
