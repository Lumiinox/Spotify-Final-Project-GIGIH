import { ActionType } from "../action-types"

interface updateProfileDataProps {
    nameIn: string,
    picUrlIn: string,
    tokenIn: string,
    followersIn: string,
    userIdIn: string,
}

export const updateProfileData = ({nameIn, picUrlIn, tokenIn, followersIn, userIdIn}: updateProfileDataProps) => (
    {
        type:ActionType.UPDATE_ACC_DATA,
        payload:{
            userName: nameIn,
            userId: userIdIn,
            profilePic: picUrlIn,
            token: tokenIn,
            followers: followersIn
    }
})

export function removeProfileData(){
    return{
        type:ActionType.REMOVE_ACC_DATA
    }
}