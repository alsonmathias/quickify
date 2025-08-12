import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../feature/user/userSlice.js'
import messageReducer from '../feature/messages/messagesSlice.js'
import connectionsReducer from '../feature/connections/connectionsSlice.js'

export const store = configureStore({
    reducer: {
        user: userReducer,
        connections: connectionsReducer,
        messages: messageReducer,

    }
})