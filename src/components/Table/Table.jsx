import { StyledTable, Wrapper } from "./Table.styles";
import { useAddMeeting } from "../useAddMeeting/useAddMeting";
import { Meetings } from "../Atoms/Meeting/Mettings";

//date-fns

export const Table = ({ allData }) => {
  const isActive = false;

  return (
    <Wrapper>
      {allData.map((el) =>
        !isActive ? (
          <StyledTable key={el.dayId} isActive={isActive}>
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
            <Meetings el={el} />
          </StyledTable>
        ) : null
      )}
    </Wrapper>
  );
};
