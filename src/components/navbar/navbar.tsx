import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from "@emotion/react";
import {theme} from "../../util/colorTheme";
import classes from "./navbar.module.css";
import Selector from "../selector/selector";
import NoRelaxLogo from "../../assets/NoRelaxLogo.png";

function Navbar() {
    const text = ["HU", "EN"];
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
                      <Selector number={2} text={text} value={text} />
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