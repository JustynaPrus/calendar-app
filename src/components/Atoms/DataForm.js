import { useState } from "react";
import { StyledForm, Wrapper } from "./DataForm.styles";

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
      <StyledForm>
        <h3>Dodaj spotkanie</h3>
        <Wrapper>
          <div>
            <label>Data</label>
            <input type="date" value={date} onChange={changeDate} />
          </div>

          <div>
            <label>Godzina</label>
            <input type="time" value={hour} onChange={changeHour} />
          </div>

          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={changeName} />
          </div>

          <div>
            <label>Surname</label>
            <input type="text" value={surname} onChange={changeSurname} />
          </div>
          <button onClick={transferValue}>Dodaj</button>
        </Wrapper>
      </StyledForm>
    </>
  );
};
