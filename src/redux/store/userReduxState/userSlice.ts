import { createSlice } from "@reduxjs/toolkit"
import { IUsersTokenData } from "../../../models/stateTypeUser";

const initialState: IUsersTokenData = {
    id: 0,
    token:"",
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getToken : (state) =>{
            state.token = localStorage.getItem("authToken") || "";
        },
        getUserId: (state, action) =>{
            if(state.token != ""){
                state.id = action.payload;
            }
        }
    }
})

export const { getToken,getUserId } = userSlice.actions;
export default userSlice.reducer
