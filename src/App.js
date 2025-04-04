import React from "react";
import styles from "./scss/App.module.scss";
import LIST from "./img/list.svg";
import { Link } from "react-router-dom";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Sort from "./components/Sort";
import Paginate from "./components/Paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilial } from "./redux/slices/filial";
import { fetchFilialMenu } from "./redux/slices/menu";
import classNames from "classnames";

const Home = () => {
  const dispatch = useDispatch();
  const selectedFilialId = useSelector(
    (state) => state.filial.selectedFilialId
  );
  const menu = [
    { id: 1, name: "Компоненты" },
    { id: 2, name: "Полуфабрикаты" },
    { id: 3, name: "Товары" },
    { id: 4, name: "Меню" },
    { id: 5, name: "Перемещения" },
    { id: 6, name: "Инвентаризация" },
    { id: 7, name: "Выпуск товара" },
    { id: 8, name: "Списание" },
    { id: 9, name: "Накладные" },
  ];
  const [click, setClick] = React.useState(null);
  React.useEffect(() => {
    dispatch(fetchFilial());
    dispatch(fetchFilialMenu(selectedFilialId));
  }, [dispatch, selectedFilialId, click]);
  
  return (
    <div className={styles.Home}>
      <section id="sidebar">
        <header>
          <div className={styles.header__company}>
            <div className={styles.header__profile}>Ф</div>
            <div>
              <span>НАЗВАНИЕ ФИРМЫ</span>
              <p>Лоскутникова В.П.</p>
            </div>
          </div>
          <hr />
          <div className={styles.header__warehouse_accounting}>
            <img src={LIST} alt="list" />
            <span>СКАЛДСКОЙ УЧЁТ</span>
          </div>
        </header>
        <nav className="dropdown">
          <p>Филиалы</p>
          <Sort />
          <hr />
          {menu.map((value) => {
            return (
              <Link to="/" key={value.id} onClick={()=> setClick(value.id)} className={classNames(styles.nav__link, {
                [styles.nav__link_active]: click === value.id,
              })}>
                - {value.name}
              </Link>
            );
          })}
        </nav>
      </section>
      <main>
        <search>
          <Filter />
          <hr />
        </search>
        {click === 4 ? <Card /> : "Выберите пункт меню"}
        <Paginate />
      </main>
    </div>
  );
};
export default Home;
