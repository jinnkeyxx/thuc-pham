import React from 'react'
import Nav from '../Components/Nav'
import DataTable from 'react-data-table-component';

// const customStyles = {
//     rows: {
//       style: {
//         minHeight: '72px', // override the row height
//       }
//     },
//     headCells: {
//       style: {
//         paddingLeft: '8px', // override the cell padding for head cells
//         paddingRight: '8px',
//       },
//     },
//     cells: {
//       style: {
//         paddingLeft: '8px', // override the cell padding for data cells
//         paddingRight: '8px',
//       },
//     },
// };
const data = [
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
    {title : 1 , director : 2 , year : 'abc'},
]

const Dashboard = () => {

    const columns =  [
        {
          name: 'Title',
          selector: 'title',
          sortable: true,
        },
        {
          name: 'Director',
          selector: 'director',
          sortable: true,

        },
        {
          name: 'Year',
          selector: 'year',
          sortable: true,
        },
      ]
    return(
        <Nav title="Dashboard">
            <h1>San pham</h1>
            <DataTable
                title="Tong san pham"
                columns={columns}
                data={data}
                // customStyles={customStyles}
                subHeader={true}
                subHeaderAlign='right'
                selectableRows={true}
                pagination={true}
            />
        </Nav>
    )
}
export default React.memo(Dashboard)