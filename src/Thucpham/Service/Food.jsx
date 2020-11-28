import aixos from 'axios'
import {url} from './url'
// func call api HotOffer
const getData = async (page = 1,limit = 4 ) => {
    const urlApi = `${url}/hotoffer/page/${page}/${limit}`
    const response = await aixos.get(urlApi)
    const data = await response.status === 200 ? response.data : []
    return data
}
export const Food = {
    getData
}
