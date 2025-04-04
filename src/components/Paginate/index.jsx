import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../scss/Paginate.module.scss";
import RIGHTARROW from "../../img/leftArrow.svg";
import LEFTARROW from "../../img/rightArrow.svg";
import { fetchFilialMenu, setCurrentPage } from "../../redux/slices/menu";

const Index = () => {
  const dispatch = useDispatch();
  const { selectedFilialId } = useSelector((state) => state.filial);
  const maxPages = useSelector((state) => state.menu.maxPages);
  const currentPage = useSelector((state) => state.menu.currentPage);
  const stateActive = useSelector((state) => state.menu.stateActive);
  // const menuStatus = useSelector((state) => state.menu.status);
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    dispatch(setCurrentPage(selectedPage));
  };
  React.useEffect(() => {
    if (selectedFilialId) {
      dispatch(fetchFilialMenu({ selectedFilialId, currentPage, stateActive }));
    }
  }, [dispatch, selectedFilialId, currentPage, stateActive]);
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel={<img src={LEFTARROW} alt="leftArrow" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={maxPages}
        previousLabel={<img src={RIGHTARROW} alt="rightArrow" />}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Index;
