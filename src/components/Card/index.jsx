import React from "react";
import styles from "../../scss/Card.module.scss";
import CHART from "../../img/chart.svg";
import PENCIL from "../../img/pencil.svg";
import CART from "../../img/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const menuItems = useSelector((state) => state.menu.items);
  return (
    <>
      { menuItems && menuItems.length > 0 ? (
          menuItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <p>{item.name}</p>
              <p>{item.filial.name}</p>
              <p>{item.tt.name}</p>
              <p>{item.active ? "Активно" : "Не активно"}</p>
              <p>{item.export.join(",")}</p>
              <div className={styles.buttons}>
                <Link to="/">
                  <img src={CHART} alt="chart" />
                </Link>
                <Link to="/">
                  <img src={PENCIL} alt="pencil" />
                </Link>
                <Link to="/">
                  <img src={CART} alt="cart" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Нет данных для отображения.</p>
        )}
    </>
  );
};
export default Index;
