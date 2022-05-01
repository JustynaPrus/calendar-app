import { StyledForm, Wrapper } from "./DataForm.styles";
import { useDataForm } from "../UseDataForm/UseDataForm";

export const DataForm = ({ addMeeting }) => {
  const {
    changeDate,
    changeHour,
    changeName,
    changeSurname,
    transferValue,
    name,
    surname,
    date,
    hour,
  } = useDataForm({ addMeeting });

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
