import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  header {
    width: 100%;
    text-align: center;
  }
  h1 {
    text-transform: uppercase;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: start;
  justify-items: center;
  margin-top: 10px;
  border-collapse: separate;
  border-spacing: 10px 5px;
  p {
    text-transform: uppercase;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  thead {
    background-color: lightsteelblue;
  }
  tbody {
    background-color: whitesmoke;
  }
  td {
    border-radius: 5px;
    padding: 10px 5px 10px 5px;
    text-align: center;
  }
`;
