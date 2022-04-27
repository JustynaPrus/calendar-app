export const Meeting = ({ el, index }) => {
  el.meetings.map((el, index) => {
    return (
      <tr key={index}>
        <td>{el.hour}</td>
        <td>{el.name}</td>
        <td>{el.surname}</td>
        <td>{el.companyName}</td>
      </tr>
    );
  });
};
