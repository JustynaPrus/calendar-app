import { Container } from "./Calendar.styles";
import { DataForm } from "../DataForm/DataForm";
import { useAddMeeting } from "../useAddMeeting/useAddMeting";
import { Table } from "../Table/Table";

export const Calendar = () => {
  const { addMeeting, addActive, allData } = useAddMeeting();

  return (
    <Container>
      <header>
        <h1>Kalendarz spotkań</h1>
      </header>
      <DataForm addMeeting={addMeeting} />
      <Table addActive={(el) => addActive(el)} allData={allData} />
    </Container>
  );
};
