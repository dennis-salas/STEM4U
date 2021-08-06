import React from "react";
import { Button } from "react-bootstrap";
import { startLogout } from "../action/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../style/homePrivate.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {

    dispatch(startLogout());

  }

    return (
      <div className="bodyHomePrivate">
        <div>
          <div className="header">
            <div className="header__bg"></div>
            <div className="header__logo">
            <Link to="/"> 
              <img
                className="logo"
                src="https://i.ibb.co/9nvRxgM/Logo-proyecto.png"
                alt="logo"
              />
              </Link>
            </div>
            <h1 className="header__title">
              Llegará un momento en que la sociedad dejará atrás los
              estereotipos sobre nosotras
            </h1>
            <div className="header__log">
              <Button
                className="header__log--text sesion"
                onClick={handleLogout}
              >
                Cerra Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Header;
