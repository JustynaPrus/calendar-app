export const Meetings = ({ el }) => {
  return (
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
  );
};
