import React from "react";
import ButtonInput from "../../components/buttons/buttonInput";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from "@emotion/react";
import {theme} from "../../util/colorTheme";
import Variants from "./moitonSideNavbar/variants/variant";
import "./navbar.css";

function Navbar() {
    const lngs: { [key: string]: { nativeName: string } } = {
        en: { nativeName: 'EN' },
        hu: { nativeName: 'HU' }
      };
    const [t, i18n] = useTranslation();
  return (
    <div >
      <ThemeProvider theme={theme}>
          <Box id="navbar" sx={{ flexGrow: 1 }}>
              <AppBar>
                <div id="toolbar">
                 {/*  <div>
                    <Variants></Variants>
                  </div> */}
                  <div id="languageButtons">
                    {Object.keys(lngs).map((lng) => (
                    <ButtonInput key={lng} buttonText={lngs[lng].nativeName}  type="submit" onClick={() => {i18n.changeLanguage(lng);  }}>
                      </ButtonInput>
                      ))}
                  </div>
                  
                </div>
              </AppBar>
          </Box>
      </ThemeProvider>
      </div>
  );
}

export default Navbar;