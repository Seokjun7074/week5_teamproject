import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Router from "./Router";

import Login from "./pages/login/Login";
import Join from "./pages/login/Join";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      {/* <Login/> */}
      {/* <Join/> */}



    </ThemeProvider >
  );
}

export default App;
