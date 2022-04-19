interface Payload{
    userName: string;
    userId: string;
    profilePic: string;
    token: string | null;
    followers: string;
    loginStatus?: boolean;
}
interface UpdateAccountData {
    type: "update-acc-data";
    payload: Payload;
}
interface RemoveAccountData {
    type: "remove-acc-data"
}

export type Action = UpdateAccountData | RemoveAccountData;
