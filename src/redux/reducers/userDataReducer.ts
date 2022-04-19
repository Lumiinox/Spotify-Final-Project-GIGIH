import { ActionType } from '../action-types/index';
import { Action } from '../actions';

interface StateProps{
    token: string | null;
    userName: string;
    userId: string;
    picUrl: string;
    followers: string;
    loginStatus: boolean;    
}

const initialState = {
    token:"",
    userName:"",
    userId:"",
    picUrl:"",
    followers:"",
    loginStatus: false,
};

const reducer = (state: StateProps = initialState, action: Action) => {
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
                userId: "",
                picUrl: "",
                token: "",
                followers: "",
                loginStatus: false,
            }
        default:
            return state;
    }
}

export default reducer;