import React , {useState , useEffect} from 'react'
import { ListGroup , Navbar } from 'react-bootstrap'
import { dataFake } from '../dataFake/ListProduct'
import Loading from './Loading'

// import api from '../Service/ListProduct'

// --------- import api server ----------------

const NavRightComponent = (props) => {
    const [dataList , setDataList] = useState([])
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        const loadData = async () => {
            await setLoading(true)
            const data = dataFake
            await setDataList(data)
            await setLoading(false)
        }
        loadData()
    }, []);
    // -------------------- Call Api Fake --------------------------

    // useEffect(() => {
    //     const loadData = async () => {
    //         await setLoading(true)
    //         const data = api.getData()
    //         await setDataList(data.data)
    //         await setLoading(false)
    //     }
    //     loadData()
    // }, []);

    // ---------------------- Call Api Server --------------------------


    // ----------------------- end Cal api useEffect , use 1 or 2 lycel -----------------
    if(!isLoading && dataList.length <= 0) return <Loading/>

    return(
        <>
            <Navbar  className="nav-content navbar-light navRight"  expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-content">
                    <ListGroup>
                        {dataList.map((item , index) => (
                            <ListGroup.Item key={item._id}>{item.title}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default React.memo(NavRightComponent)