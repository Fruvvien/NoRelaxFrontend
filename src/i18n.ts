import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { title } from 'process';
import { footer } from 'framer-motion/client';
import { profile, table } from 'console';

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
                success: "Login Succesful!",
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
                successRegistration: "Successful registration!"
            },
            error:{
                invalidEmail: "Invalid email address.",
                invalidPassword: "You must provide a password with at least six characters",
                invalidLastAndFirstName: "Please provide both your first and last name",
                invalidEmptyField: "Cannot be an empty field",
                emailIsExist: "This email address already exists",
                invalidLogin:"Invalid login",
            },
            leftSideBar:{
              login: "Login",
              register: "Registration",
              home: "Home",
              reserve: "Reservetion",
              openingHours: "Opening Hours",
              menu: "Menu",
              aboutUs: "About Us",
              logout: "Logout",
            },
            rightSideBar:{
              profile: "Profile",
              logout: "Logout",
            },
            menuOrderDrink:{
              addToCart: "Add",
              title1:"Drinks List",
              title2:"Foods List",
              drinkName: "Drink Name",
              amount:"Quantity",
              price:"Price",
              order:"Order"

            },
            menuOrderFood:{
              addToCart: "Add",
              title1:"Drinks List",
              title2:"Foods List",
              foodName: "Food Name",
              amount: "Amount",
              price:"Price",
              order: "Order"
            },
            openingHours:{
              title: "Opening Hours",
              monday: "Monday: Closed",
              tuesday: "Tuesday: 17:00 - 23:00",
              wednesday: "Wednesday: 17:00 - 23:00",
              thursday: "Thursday: 17:00 - 23:00",
              friday: "Friday: 17:00 - 03:00",
              saturday: "Saturday: 17:00 - 03:00",
              sunday: "Sunday: Closed",
            },
            footer:{
              information: "Information",
              socials: "Follow Us",
              policy: "Policy"
            },
            cart:{
              title: "Cart",
              product: "Product",
              unit: "Amount",
              price: "Price",
              removeFromCart: "Remove from cart",
              cartIsEmpty: "Cart is empty",
              removeButton: "Remove",
              quantity: "pcs",
              finalPrice: "Total Price",
              orderButton: "Place Order",
              successfulOrder:"Successful order"
            },
            reservation: {
              tableTitleOne:"Date selection",
              tableTitleTwo:"Table reservation",
              tableTitleThree:"Time selection",

              tableTextOne: "4 person table",
              tableTextTwo: "4 person table",
              tableTextThree: "5 person table",
              tableTextFour: "6 person table",
              tableTextFive: "8 person table",

              badDateTime: "You cannot book a date that is in the past",

              stageOne: "Table",
              stageTwo: "Date",
              stageThree: "Time",

              buttonNext:"Next",

              ruleTitle: "Reservation rules",
              ruleOne: "The reservation only records the arrival time.",
              ruleTwo: "Tables can be reserved from 18:00 earliest.",
              ruleThree: `There is no time limit - "minimum consumption expected" in case of long stay.`,

              submitReservation: "Submit reservation",
              successReservation: "Successful reservation",
              badRequest: "Unsuccessful reservation, all fields must be filled in",

            },
            profile:{
              profileTitle: "Profile",
              profileImgUploadText: "Upload image",
              profileDelete: "Delete account",
              profileName: "Name:",
              profileEmail: "Email:",
              profilePhoneNumber: "Phone number:",
              reservationTitle: "Reservation Details",
              emptyReservation: "You do not have active reservations",
              reservationBoxTitle: "Reservation",
              reservationTableNumber: "Table number:",
              reservationDelete: "Cancel reservation",
              reservationDate: "Date",
              reservationArrivalTime: "Arrival time"
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
            success: "Sikeres bejelentkezés!",
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
            successRegistration: "Sikeres regisztráció!"
          },
          error:{
            invalidEmail: "Hibás email cím.",
            invalidPassword: "Legalább hat karakterből álló jelszót kell megadnod",
            invalidLastAndFirstName: "Kérjük add meg mindkét neved",
            invalidEmptyField: "A mező nem lehet üres",
            invalidPhoneNumber:"Kérjük érvényes telefonszámot adj meg",
            invalidBirthDay: "Kérjük érvényes születési dátumot adj meg",
            emailIsExist: "Ez az email cím már létezik",
            invalidLogin:"Hibás bejelentkezés",
          },
          leftSideBar: {
            login: "Bejelentkezés",
            register: "Regisztráció",
            home: "Főoldal",
            reserve: "Foglalás",
            openingHours: "Nyitvatartás",
            menu: "Menü",
            logout: "Kijelentkezés",
            drinkList: "Ital Lista",
            
          },
          rightSideBar:{
            profile: "Profil",
            logout: "Kijelentkezés",
          },
          menuOrderDrink:{
            addToCart: "Kosárba",
            title1:"Itallap",
            title2:"Étlap",
            drinkName: "Ital Neve",
            amount: "Mennyiség",
            price:"Ár",
            order: "Rendelés"
          },
          menuOrderFood:{
            addToCart: "Kosárba",
            title1:"Itallap",
            title2:"Étlap",
            foodName: "Étel Neve",
            amount: "Mennyiség",
            price:"Ár",
            order: "Rendelés"
          },
          openingHours:{
            title: "Nyitvatartás",
            monday: "Hétfő: Zárva",
            tuesday: "Kedd: 17:00 - 23:00",
            wednesday: "Szerda: 17:00 - 23:00",
            thursday: "Csütörtök: 17:00 - 23:00",
            friday: "Péntek: 17:00 - 03:00",
            saturday: "Szombat: 17:00 - 03:00",
            sunday: "Vasárnap: Zárva",
          },
          footer:{
            information: "Információ",
            socials: "Kövess Minket",
            policy: "Házirend"
          },
          cart:{
            title: "Kosár",
            product: "Termék",
            unit: "Mennyiség",
            price: "Ár",
            removeFromCart: "Eltávolítás a kosárból",
            cartIsEmpty : "A kosár üres",
            removeButton: "Eltávolítás",
            quantity: "adag",
            finalPrice:"Végösszeg",
            orderButton: "Rendelés leadása",
            successfulOrder: "Sikeres rendelés"
          },
          reservation: {
            tableTitleOne:"Dátum választás",
            tableTitleTwo:"Asztal foglalás",
            
            tableTitleThree:"Időpont választás",

            tableTextOne: "4 fős asztal",
            tableTextTwo: "4 fős asztal",
            tableTextThree: "5 fős asztal",
            tableTextFour: "6 fős asztal",
            tableTextFive: "8 fős asztal",

            badDateTime: "Nem lehet a múltba foglalni",

            stageOne: "Asztal",
            stageTwo: "Dátum",
            stageThree: "Időpont",

            ruleTitle: "A foglalást érintő szabályok",
            ruleOne: "A foglalás csak az érkezési időpontot rögzíti.",
            ruleTwo: "Az asztalok legkorábban 18:00-tól foglalhatók.",
            ruleThree: `Nincs időkorlát - hosszú ott tartózkodás esetén "minimális fogyasztás elvárt".`,
            
            buttonNext:"Tovább",

            submitReservation: "Foglalás leadása",

            successReservation: "Sikeres foglalás",

            badRequest: "Sikertelen foglalás, minden szekciót ki kell tölteni"
          },
          profile:{
            profileTitle: "Profil",
            profileImgUploadText: "Kép feltöltés",
            profileDelete: "Felhasználó törlése",
            profileName: "Név:",
            profileEmail: "Email:",
            profilePhoneNumber: "Telefonszám:",
            reservationTitle: "Foglalás Részletei",
            emptyReservation: "Jelenleg nincs aktív foglalás",
            reservationBoxTitle: "Foglalás",
            reservationTableNumber: "Asztal száma:",
            reservationDelete: "Foglalás visszavonása",
            reservationDate: "Dátum",
            reservationArrivalTime: "Érkezési idő"
          }

        },
      }
    }
  });

export default i18n;