import React from "react";
import styles from "../../scss/Sort.module.scss";
import ARROW from "../../img/arrow1.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilialId } from "../../redux/slices/filial";
import { setCurrentPage } from "../../redux/slices/menu";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const selectedFilialId = useSelector(
    (state) => state.filial.selectedFilialId
  );
  const filials = useSelector((state) => state.filial.filials.items);
  const onSelectedValue = (id) => {
    dispatch(setSelectedFilialId(id));
    dispatch(setCurrentPage(0))
    setOpen(false);
  };
  const selectedFilial = filials?.find((item) => item.id === selectedFilialId);
  const sortValue = selectedFilial?.name || filials?.[0]?.name;
  return (
    <div onClick={() => setOpen(!open)} className={styles.sort}>
      <div className={styles.dropdown}>{sortValue}</div>
      <div className={styles.button}>
        <img src={ARROW} alt="arrow" />
      </div>
      {open && (
        <div className={styles.popup}>
          {filials?.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectedValue(item.id)}
              className={styles.li}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;