import { Wrapper } from "./App.styles";
import { GlobalStyles } from "./constans/GlobalStyle";
import { Calendar } from "./components/Calendar/Calendar";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Calendar />
    </Wrapper>
  );
}

export default App;
