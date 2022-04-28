import { useState } from "react";
import dataList from "../../Data/allData";
import { Wrapper, Container, StyledTable } from "./Calendar.styles";
import { DataForm } from "../Atoms/DataForm";

export const Calendar = () => {
  const [dataMeetings, setDataMeetings] = useState([]);
  const [allData, setAllData] = useState(dataList);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

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

  const addActive = (el) => {
    if (activeIndex + el.dayId <= activeIndex + 5) {
      setIsActive(true);
    }
  };

  const table = allData.map((el) => {
    return (
      <StyledTable key={el.dayId}>
        <thead>
          <tr>
            <td>
              <p>godz.</p>
            </td>
            <td>
              <p>
                <strong>{el.name}</strong> {el.date}
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          {el.meetings.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.hour}</td>
                <td>
                  {el.name} {el.surname}
                  <br />
                  {el.companyName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  });

  return (
    <>
      <Container>
        <header>
          <h1>Kalendarz spotkań</h1>
        </header>
        <DataForm func={addMeeting} />
        <Wrapper>{table}</Wrapper>
      </Container>
    </>
  );
};
