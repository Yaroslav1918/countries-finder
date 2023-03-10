import ReactPaginate from "react-paginate";
import s from "./pagination.module.css";

export default function Pagination({
  pageCount,
  onPageChange,
  forcePage,
}) {  
  return (
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      forcePage={forcePage}
      containerClassName={s.pagination}
      pageClassName={s.page}
      activeClassName={s.active}
      previousClassName={s.previous}
      nextClassName={s.next}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"…"}
    />
  );
}
