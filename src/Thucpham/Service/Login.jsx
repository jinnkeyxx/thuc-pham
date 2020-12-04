import axios from 'axios'
import { url , token } from './url'
import jwt from 'jsonwebtoken'
const KEY_JWT = "Bi_mat"
const creatToken = (data , key) => {
    const token = jwt.sign(data , key )
    return token
}
export const login = async (user , pass) => {

    const response = await axios({
        url : `${url}/login.php`,
        method : 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
        data : {username : user , password : pass}
    })
    const result = await response.status === 200 ? await response.data  : {}
    return result
}
export const saveToken = (token) => {
    if(token !== undefined && token !== null && token !== ""){
        localStorage.setItem('token' , token)
    }
}
export const removeToken = () =>{
    localStorage.removeItem('token')
}
export const getToken = () => {
   return localStorage.getItem('token')
}
export const decodeToke = () => {
    const token = getToken()
    let decode = null
    if(token !== undefined && token !== null && token !== ""){
        decode = jwt.verify(token ,  KEY_JWT)
    }
    return decode
}
export const getUsername = () => {
    const infoUser = decodeToke()
    let username = null
    if(infoUser !== null){
        username = infoUser.username
    }
    return username
}