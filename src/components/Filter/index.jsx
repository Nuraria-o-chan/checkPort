import React from "react";
import styles from "../../scss/Filter.module.scss";
import ARROW from "../../img/arrow1.svg";
import { useDispatch } from "react-redux";
import { setCurrentPage, setStateActive } from "../../redux/slices/menu";

const Index = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const listActive = ["Активно", "Не активно"];
  const onSelectedValue = (index) => {
    setSelected(index);
    setOpen(false);
    let isActive;
    if (index === 0) {
      isActive = true;
    } else if (index === 1) {
      isActive = false;
    } else {
      isActive = null;
    }
    dispatch(setStateActive(isActive));
    dispatch(setCurrentPage(0));
  };
  const valueSort = listActive[selected];
  return (
    <search className={styles.search}>
      <input placeholder="Название меню" />
      <input placeholder="Филиал" />
      <input placeholder="Торговая точка" />

      <div onClick={() => setOpen(!open)} className={styles.input}>
        <div className={styles.dropdown}>{valueSort}</div>
        <div className={styles.button}>
          <img src={ARROW} alt="arrow" />
        </div>
        {open && (
          <div className={styles.popup}>
            {listActive.map((value, index) => (
              <div
                key={index}
                onClick={() => onSelectedValue(index)}
                className={styles.li}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>

      <span>Экспорт</span>
    </search>
  );
};

export default Index;
