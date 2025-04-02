import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { title } from 'process';
import { footer } from 'framer-motion/client';

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
                success: "Successful login!",
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
              amount:"Amount",
              price:"Price",
              order:"Order"

            },
            menuOrderFood:{
              addToCart: "Add",
              title1:"Drinks List",
              title2:"Étlap",
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
            aboutUs:{
              title: "About Us",
              text: "Mother"
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
              finalPrice: "Final Price",
              orderButton: "Place an order"
            },
            reservation: {
              tableText: ""
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
            invalidLastAndFirstName: "Kérlek add meg mindkét neved",
            invalidEmptyField: "Nem lehet üres mező",
            invalidPhoneNumber:"Kérlek add meg a megfelelő telefonszámod",
            invalidBirthDay: "Kérlek add meg a születési dátumod",
            emailIsExist: "Ez az email cím már létezik",
          },
          leftSideBar: {
            login: "Bejelentkezés",
            register: "Regisztráció",
            home: "Főoldal",
            reserve: "Foglalás",
            openingHours: "Nyitvatartás",
            menu: "Menü",
            aboutUs: "Rólunk",
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
          aboutUs:{
            title: "Rólunk",
            text: "A NoRelax bár 2010 március 25-én nyitotta meg kapuit a nagyközönség részére. A XVIII. kerület szívében, a Szarvas Csárda téren a csarnok területén helyezkedik el, ígyhát a hosszú piacozás és bevásárlás után is ideális hely egy kis kikapcsolódásra. A bár különlegessége hogy minden héten más-más fergeteges programmal várják a vendégeket, legyen szó karaoke estről, billiárd darts vagy csocsómérkőzésekről, közös meccsnézésről vagy csak egy jó sör melletti beszélgetős estéről, egyet megígérhetünk: jókedvből nem lesz hiány! Fiatalos környezet, olcsó italok, jó társaság, kedves kiszolgálás, mi kell még? Gyere és igyál velünk te is!"

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
            orderButton: "Rendelés leadása"
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

            submitReservation: "Foglalás leadása",

            successReservation: "Sikeres foglalás",

            badRequest: "Sikertelen foglalás, mindent szekicót ki kell tölteni"
          },
          profile:{
            profileTitle: "Profil",
            profileImgUploadText: "Kép feltöltés",
            profileDelete: "Felhasználó törlése",
            profileName: "Név:",
            profileEmail: "Email:",
            profilePhoneNumber: "Telefonszám:",
            reservationTitle: "Foglalás Részletei",
            emptyReservation: "Nincs foglalás"
          }

        },
      }
    }
  });

export default i18n;