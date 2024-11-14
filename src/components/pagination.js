import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pagePaginate } from '../redux/actions/moviesaction';
export default function Paginate(){
    const [pagecount,setpagecount] = useState(0)

    const dispatch = useDispatch()
    const pages = useSelector((state) => state.movies.pageCount);
    useEffect(() => {
        setpagecount(pages)
    }, [pages])

    function handlePageClick(data){
        dispatch(pagePaginate(data.selected+1))
    }

    return(
        <>
        <div className='paginate mt-4'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pagecount}
                previousLabel="< previous"
                pageClassName="page-item"
                containerClassName="pagination justify-content-center py-4"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                breakClassName="page-item"
                breakLinkClassName='page-link'
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
                activeClassName='active'
            />
        </div>
        </>
    )
}