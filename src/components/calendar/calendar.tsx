import { useState } from 'react';
import Calendar from 'react-calendar';
import classes from "./calendar.module.css"
import 'react-calendar/dist/Calendar.css';
import classNames from 'classnames';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendarium() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar className={classNames(
        classes["react-calendar"],
        classes["react-calendar__navigation__label__labelText"],
        classes["react-calendar__viewContainer"],
      )} onChange={onChange} value={value} />
    </div>
  );
}