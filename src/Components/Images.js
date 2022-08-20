import { useEffect,useState} from "react";
import ReactPaginate from "react-paginate";
import '../App.css'

export default function Images (props) {
    const {data} = props; 
    console.log(data)
    const [currentItems, setCurrentItems] = useState([]); // show in page 
    const [pageCount, setPageCount] = useState(0); // 
    const [itemOffset, setItemOffset] = useState(0); //index of the first item of currentPage
    const itemsPerPage = 2;
    
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage; //index of the last item of currentPage
        console.log(`Loading data from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset)); // update currentItems
        setPageCount(Math.ceil(data.length / itemsPerPage)); // update the page count
    }, [itemOffset, itemsPerPage,data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

  return (
    <>
      <div className="homePage">
      <> 
              {currentItems.map(image =>{
                  return ( 
                      <div> 
                          <img src={image.img} alt="" />
                      </div>
                  );
              })}
          </>
      </div>

      <div className="pageResponsive">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="previousNext"
        nextLinkClassName="previousNext"
        activeLinkClassName="active"
      />
      </div>

    </>
  );
}









