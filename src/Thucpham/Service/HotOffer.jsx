import aixos from 'axios'
import {url , token} from './url'
// func call api HotOffer
const getData = async ( product , page) => {
    const urlApi = `${url}/?product=${product}&page=${page}`
    const response = await aixos.get(urlApi)
    const data = await response.status === 200 ? response.data : []
    return data
}
export const HotOffer = {
    getData
}
