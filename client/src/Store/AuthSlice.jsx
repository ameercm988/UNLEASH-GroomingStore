import {createSlice} from '@reduxjs/toolkit'

console.log(document.cookie);

const token = getCookie('access_token')

// F'n to get cookie from frontend (instead of using npm react-cookie)
function getCookie(cookie)  {
    let name = cookie + '='
    let cookies = document.cookie.split(';')
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        } 
    } 
    return ""
}

console.log(token)

const AuthSlice = createSlice({
    name : 'slicer',
    initialState : {token : token ? token : ''},
    reducers : {
        setToken : (state, action) => {
            console.log(action.payload,'payload');
            state.token = action.payload
        }
    }

})
export let tokenState = AuthSlice.actions
export default AuthSlice;


//login yellow