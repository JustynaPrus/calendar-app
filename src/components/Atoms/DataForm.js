import { useState } from "react";

export const DataForm = (props) => {
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
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setSurname("");
    setDate("");
    setHour("");
  };

  return (
    <>
      <form>
        <p>Dodaj spotkanie</p>
        <label>Data</label>
        <input type="date" value={date} onChange={changeDate} />
        <label>Godzina</label>
        <input type="time" value={hour} onChange={changeHour} />
        <label>Name</label>
        <input type="text" value={name} onChange={changeName} />
        <label>Surname</label>
        <input type="text" value={surname} onChange={changeSurname} />
        <button onClick={transferValue}>Dodaj</button>
      </form>
    </>
  );
};
