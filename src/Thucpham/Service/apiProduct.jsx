import aixos from 'axios'
import {url , token} from './url'

const getData = async ( product ) => {
    const urlApi = `${url}/?product=${product}`
    const response = await aixos.get(urlApi)
    const data = await response.status === 200 ? response.data : []
    return data
}
export const api = {
    getData
}
