import { useState } from "react";
import dataList from "../../Data/allData";
import { Wrapper, Container } from "./Calendar.styles";
import { DataForm } from "../Atoms/DataForm";

export const Calendar = () => {
  const [dataMeetings, setDataMeetings] = useState([]);
  const [allData, setAllData] = useState(dataList);

  const addMeeting = (data) => {
    setDataMeetings(data);
    console.log(dataMeetings);
    allData.forEach((el) => {
      if (dataMeetings.date === el.date) {
        el.meetings.push(dataMeetings);
      }
    });
    setAllData(allData);
    console.log(allData);
  };

  const table = allData.map((el) => {
    return (
      <table key={el.dayId}>
        <thead>
          <tr>
            <td>
              <p>godz.</p>
            </td>
            <td>
              <p>
                {el.name} {el.date}
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          {el.meetings.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.hour}</td>
                <td>{el.name}</td>
                <td>{el.surname}</td>
                <td>{el.companyName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  });

  return (
    <>
      <Container>
        <h1>Kalendarz spotkań</h1>
        <DataForm func={addMeeting} />
        <Wrapper>{table}</Wrapper>
      </Container>
    </>
  );
};
