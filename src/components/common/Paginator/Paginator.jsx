import React, {useState} from 'react';
import s from './Paginator.module.css';

let Paginator = ({portionSize = 10, ...props}) => {

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const minPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const maxPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {
                <button disabled={portionNumber === 1} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</button>
            }
            {
                pages
                    .filter(p => p >= minPortionPageNumber && p <= maxPortionPageNumber)
                    .map((p) => {
                        return <span className={props.currentPage === p ? s.pageSelected : s.page}
                                     onClick={() => props.onPageChanged(p)}>{p}</span>
                    })
            }
            {
                <button disabled={portionNumber === portionCount} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>
            }
        </div>
    )
}


export default Paginator;
