import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Router from "./Router";
import Login from "./pages/login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Login/>
    </ThemeProvider>
  );
}

export default App;
