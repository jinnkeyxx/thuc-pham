import React from 'react'
import Pagination from "react-js-pagination";
const PaginationComponent = (props) => {
    return(
        <div >
        <Pagination itemClass="page-item" linkClass="page-link"
          activePage={props.activePage}
          itemsCountPerPage={props.perPage}
          totalItemsCount={props.totalItem}
          onChange={props.changePage}
        />
      </div>
    )
}
export default React.memo(PaginationComponent)