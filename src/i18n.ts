import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false, 
    },
    returnObjects: true,
    resources: {
      en: {
        translation: {
            login:  {
                title: "Login",
                inputEmail: "Email",
                inputPassword: "Password",
                button: "Login",
                textNextToRegisterLink : "Don't have an account yet?",
                linkToRegister: "Register",
            },
            register: {
                title: "Register",
                inputFirstName: "First Name",
                inputLastName: "Last Name",
                inputEmail: "Email",
                inputPassword: "Password",
                button: "Submit",
                textNextToLoginLink : "Already have an account?",
                linkToLogin: "Login",
            }
        },


      },
      hu: {
        translation: {
          login: {
            title: "Bejelentkezés",
            inputEmail: "Email",
            inputPassword: "Jelszó",
            button: "Bejelentkezés",
            textNextToRegisterLink : "Nincs még fiókod?",
            linkToRegister: "Regisztrálj",
          },
          register: {
            title: "Regisztráció",
            inputFirstName: "Keresztnév",
            inputLastName: "Vezetéknév",
            inputEmail: "Email",
            inputPassword: "Jelszó",
            button: "Regisztráció",
            textNextToLoginLink : "Van már fiókod?",
            linkToLogin: "Jelentkezz be",
          }
        },
      }
    }
  });

export default i18n;