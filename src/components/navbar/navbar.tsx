import React from "react";
import ButtonInput from "../../components/buttons/buttonInput";
import { useTranslation } from 'react-i18next';

function Navbar() {
    const lngs: { [key: string]: { nativeName: string } } = {
        en: { nativeName: 'EN' },
        hu: { nativeName: 'HU' }
      };
    const [t, i18n] = useTranslation();
  return (
    <div>
       {Object.keys(lngs).map((lng) => (
            <ButtonInput key={lng} buttonText={lngs[lng].nativeName}  type="submit" onClick={() => {i18n.changeLanguage(lng);  }}>
             </ButtonInput>
          ))}
    </div>
  );
}

export default Navbar;