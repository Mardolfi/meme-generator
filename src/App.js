import { useContext } from "react";
import { MemeProvider } from "./context/MemeContext";
import { ThemeContext } from "./context/ThemeContext";
import GlobalStyle from "./globalStyles";
import MemeGenerator from "./page/MemeGenerator";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={theme} />
      <MemeProvider>
        <MemeGenerator />
      </MemeProvider>
    </>
  );
}

export default App;
