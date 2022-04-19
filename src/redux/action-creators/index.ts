import { Dispatch } from "react"
import { ActionType } from "../action-types"
import { Action } from "../actions"


export const updateProfileData = (nameIn: string, picUrlIn:string , tokenIn: string | null, followersIn:string, userIdIn:string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.UPDATE_ACC_DATA,
            payload:{
                userName: nameIn,
                userId: userIdIn,
                profilePic: picUrlIn,
                token: tokenIn,
                followers: followersIn,
                }
            })
        }
    }

export const removeProfileData = () =>{
    return (dispatch: Dispatch<Action>) => {
        dispatch ({
            type:ActionType.REMOVE_ACC_DATA
        })
    }
}