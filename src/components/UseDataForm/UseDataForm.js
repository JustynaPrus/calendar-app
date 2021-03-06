import { useState } from "react";

export const useDataForm = ({ addMeeting }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeSurname = (event) => {
    setSurname(event.target.value);
  };

  const changeDate = (event) => {
    setDate(event.target.value);
  };

  const changeHour = (event) => {
    setHour(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      surname,
      date,
      hour,
    };
    addMeeting(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setSurname("");
    setDate("");
    setHour("");
  };

  return {
    changeDate,
    changeHour,
    changeName,
    changeSurname,
    transferValue,
    name,
    surname,
    date,
    hour,
  };
};
