import {ActionType} from '../action-types/index';
import { Action } from '../actions';

interface StateProps{
    token: string,
    userName: string,
    userId: string,
    picUrl: string,
    follower: string,
    loginStatus: boolean,    
}

const initialState = {
    token:"",
    userName:"",
    userId:"",
    picUrl:"",
    follower:"",
    loginStatus: false,
};

function reducer (state: StateProps = initialState, action: Action) {
    switch (action.type){
        case ActionType.UPDATE_ACC_DATA:
            return{
                userName: action.payload.userName,
                userId: action.payload.userId,
                picUrl: action.payload.profilePic,
                token: action.payload.token,
                followers: action.payload.followers,
                loginStatus: true,
            };
            
        case ActionType.REMOVE_ACC_DATA:
            return{
                userName: "",
                picUrl: "",
                token: "",
                loginStatus: false,
            }
        default:
            return state;
    }
}

export default reducer;