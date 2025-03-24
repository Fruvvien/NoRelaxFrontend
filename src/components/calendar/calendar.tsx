import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import classes from "./calendar.module.css";
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { style } from 'framer-motion/client';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendarium() {
  const [value, onChange] = useState<Value>(new Date());
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState('hu-HU');
  useEffect(() =>{
    const currentLanguage = i18n.language
    if(currentLanguage === "HU"){
      setLocale('hu-HU')
    }
    else if(currentLanguage === "EN"){
      setLocale('en-US')
    }
   
  }, [i18n.language])
 
  
  return (
    <div >
      <Calendar 
        
        className={
        classes["react-calendar"]
      } 
        onChange={onChange} 
        value={value}
        locale={locale}
        formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' })}
        formatMonth={(locale, date) => date.toLocaleDateString(locale, { month: 'long' })}
        />
    </div>
  );
}