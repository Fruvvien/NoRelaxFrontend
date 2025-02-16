import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'HU',
    interpolation: {
      escapeValue: false, 
    },
    returnObjects: true,
    resources: {
      EN: {
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
            },
            error:{
                invalidEmail: "Invalid email address.",
                invalidPassword: "You must provide a password with at least six characters",
                invalidLastAndFirstName: "Please provide both your first and last name",
                invalidEmptyField: "Cannot be an empty field",
                emailIsExist: "This email address already exists",
            }
        },


      },
      HU: {
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
          },
          error:{
            invalidEmail: "Hibás email cím.",
            invalidPassword: "Legalább hat karakterből álló jelszót kell megadnod",
            invalidLastAndFirstName: "Kérlek add meg mindkét neved",
            invalidEmptyField: "Nem lehet üres mező",
            emailIsExist: "Ez az email cím már létezik",
          }
        },
      }
    }
  });

export default i18n;