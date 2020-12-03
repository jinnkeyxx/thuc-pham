import React , {useState , useEffect} from 'react'
import { ListGroup , Navbar , Nav } from 'react-bootstrap'

import Loading from './Loading'

import { api } from '../Service/apiProduct'


const NavRightComponent = (props) => {
    const [dataList , setDataList] = useState([])
    const [isLoading , setLoading] = useState(false)

    // -------------------- Call Api Fake --------------------------

    useEffect(() => {
        const loadData = async () => {
            await setLoading(true)
            const data = await api.getData('category')
            await setDataList(data.data)
            await setLoading(false)
        }
        loadData()
    }, []);


    if(!isLoading && dataList.length <= 0) return <Loading/>

    return(
        <>
            <Navbar  className="nav-content navbar-light navRight"  expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-content">
                    <ListGroup>
                        {dataList.map((item , index) => (
                            <ListGroup.Item key={item.id}><a href={`/product/${item.name}`}>{item.name}</a></ListGroup.Item>
                        ))}
                    </ListGroup>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default React.memo(NavRightComponent)