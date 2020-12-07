import React from 'react'
import Nav from '../Components/Nav'
import DataTable from 'react-data-table-component';
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

    const handleChange = (state) => {
      console.log(state.selectedRows.length);
    };
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
                subHeader={true}
                subHeaderAlign='right'
                selectableRows={true}
                pagination={true}
                highlightOnHover
                responsive
                fixedHeader
                onSelectedRowsChange={handleChange}
            />
        </Nav>
    )
}
export default React.memo(Dashboard)