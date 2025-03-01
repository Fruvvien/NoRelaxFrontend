import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import classes from "./navbar.module.css";
import LanguageSelector from "../selector/languageSelector";
import NoRelaxLogo from "../../assets/NoRelaxLogo.png"; 
import HunFlag from "../../assets/navbarImages/hunFlag.png";
import UkFlag from "../../assets/navbarImages/ukFlag.png";
import { useAppDispatch, useAppSelector } from "../../hooks/app.hooks";
import { getToken } from "../../redux/store/userReduxState/userSlice";
import { IUsersTokenData } from "../../models/stateTypeUser";

function Navbar() {
   const dispatch = useAppDispatch();
   dispatch(getToken());
   const getAuthToken = useAppSelector((state: {auth: IUsersTokenData}) => state.auth.token);
   
    const text = ["HU", "EN"];
    const image = [HunFlag, UkFlag];
  return (
    <div  >
          <Box  sx={{ flexGrow: 1 }}>
              <AppBar>
                <div className={classes.toolbar}>
                  <div className={classes["toolbar-start"]}>
                      <div>
                        
                      </div>
                  </div>
                  <div className={classes["toolbar-middle"]}>
                      <img className={classes.logo} alt="" src={NoRelaxLogo} />
                  </div>
                  <div className={classes["toolbar-end"]} style={getAuthToken ? {right:"40px", paddingRight:"0px"} : {}}>
                    <div className={classes["language-buttons"]} >
                      <LanguageSelector text={text} img={image}/>
                    </div>
                  </div>
                </div>
              </AppBar>
          </Box>
      </div>
  );
}

export default Navbar;
