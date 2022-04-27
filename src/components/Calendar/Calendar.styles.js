import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const Wrapper = styled.div`
  min-width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: end;
  justify-items: center;
  margin-top: 10px;
  border-collapse: separate;
  border-spacing: 10px 5px;
  p {
    text-transform: uppercase;
  }
  td {
    margin: 10px;
  }
`;
