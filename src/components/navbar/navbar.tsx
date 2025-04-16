import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import classes from "./navbar.module.css";
import LanguageSelector from "../selector/languageSelector";
import NoRelaxLogo from "../../assets/NoRelaxLogo.png"; 
import HunFlag from "../../assets/navbarImages/hunFlag.png";
import UkFlag from "../../assets/navbarImages/ukFlag.png";
import { useAppDispatch, useAppSelector } from "../../hooks/app.hooks";
import { getToken } from "../../redux/store/userReduxState/userSlice";
import cartImg from "../../assets/navbarImages/mdi--cart.png"
import { useNavigate } from "react-router-dom";
import { IUsersTokenData } from "../../models/stateTypeUser";
import { Icart } from "../../models/stateCart";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  dispatch(getToken());
  const getAuthToken = useAppSelector((state: {auth: IUsersTokenData, cart: Icart[]}) => state.auth.token);
  const cartQuantity = useAppSelector((state: {cart: Icart[]}) => state.cart ? state.cart.reduce((acc, item) => acc + item.quantity, 0) : 0);
  
   
  const text = ["HU", "EN"];
  const image = [HunFlag, UkFlag];
  return (
    <div  >
          <Box  sx={{ flexGrow: 1 }}>
              <AppBar>
                <div className={classes.toolbar}>
                  <div className={classes["toolbar-start"]}>
                    <div className={classes["language-buttons"]} >
                      <LanguageSelector text={text} img={image}/>
                    </div>
                  </div>
                  <div className={classes["toolbar-middle"]}>
                      <img className={classes.logo} alt="" src={NoRelaxLogo} />
                  </div>
                  <div className={classes["toolbar-end"]} >
                    {
                      getAuthToken ? 
                      <span ><a onClick={() => navigate("/shoppingCart")}><img className={classes["shopping-cart-img"]} src={cartImg} alt="" /></a>
                      {
                        cartQuantity > 0 ?
                        <span className={classes["cart-quantity"]}>
                          {cartQuantity}
                        </span> 
                        :
                        ""
                      }
                      </span> 
                      :
                      ""
                    }
                      
                  </div>
                </div>
              </AppBar>
          </Box>
      </div>
  );
}

export default Navbar;
