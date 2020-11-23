import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Container , Row , Col , ListGroup , Carousel , Navbar , Button , Nav} from 'react-bootstrap'
const NavRightComponent = (props) => {
    return(
        <Container fluid>
            <Row>
                <Col md={3} lg={3} className="">
                <Navbar  className="nav-content navbar-light navRight"  expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="nav-content">
                    {/* <Navigation
                        // activeItemId="/management/members"
                        onSelect={({itemId}) => {
                            {window.location.href=itemId}
                        }}
                        items={[
                        {
                            title: 'Dashboard',
                            itemId: '/dashboard1',

                            // elemBefore: () => <Icon name="inbox" />,
                        },
                        {
                            title: 'Dashboard',
                            itemId: '/dashboard2',

                            // elemBefore: () => <Icon name="inbox" />,
                        },
                        {
                            title: 'Dashboard',
                            itemId: '/dashboard3',

                            // elemBefore: () => <Icon name="inbox" />,
                        },
                        {
                            title: 'Dashboard',
                            itemId: '/dashboard4',

                            // elemBefore: () => <Icon name="inbox" />,
                        },
                        {
                            title: 'Management',
                            itemId: '/management',
                            // elemBefore: () => <Icon name="users" />,
                            subNav: [
                            {
                                title: 'Projects',
                                itemId: '/management/projects',
                            },
                            {
                                title: 'Members',
                                itemId: '/management/members',
                            },
                            ],
                        },
                        {
                            title: 'Another Item',
                            itemId: '/another1',
                            subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                            ],
                        },
                        {
                            title: 'Another Item',
                            itemId: '/another2',
                            subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                            ],
                        },
                        {
                            title: 'Another Item',
                            itemId: '/another3',
                            subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                            ],
                        },
                        ]}
                    /> */}


                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                    </Navbar.Collapse>
                </Navbar>
                </Col>
                <Col className="fixH">
                    {props.children}
                </Col>
            </Row>
        </Container>



    )
}
export default React.memo(NavRightComponent)