import aixos from 'axios'
import {url} from './url'
const getData = async (page = 1 ) => {
    const urlApi = `${url}/hotoffer/page/${page}`
    const response = await aixos.get(urlApi)
    const data = await response.status === 200 ? response.data : []
    return data
}
export const HotOffer = {
    getData
}
