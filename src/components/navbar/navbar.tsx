import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from "@emotion/react";
import {theme} from "../../util/colorTheme";
import classes from "./navbar.module.css";
import LanguageSelector from "../selector/languageSelector";
import NoRelaxLogo from "../../assets/NoRelaxLogo.png"; 
import HunFlag from "../../assets/navbarImages/hunFlag.png";
import UkFlag from "../../assets/navbarImages/ukFlag.png";

function Navbar() {
    const text = ["HU", "EN"];
    const image = [HunFlag, UkFlag];
  return (
    <div >
      <ThemeProvider theme={theme}>
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
                  <div className={classes["toolbar-end"]}>
                      <LanguageSelector text={text} img={image}/>
                    <div className={classes["language-buttons"]} >
                    </div>
                  </div>
                </div>
              </AppBar>
          </Box>

      </ThemeProvider>
      </div>
  );
}

export default Navbar;