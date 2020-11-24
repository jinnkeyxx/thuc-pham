import aixos from 'axios'
import {url} from './url'
// func call api HotOffer
const getData = async () => {
    const urlApi = `${url}/listproduct/`
    const response = await aixos.get(urlApi)
    const data = await response.status === 200 ? response.data : []
    return data
}
export const HotOffer = {
    getData
}
