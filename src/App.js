import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Router from "./Router";
import Layout from "./components/detail/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
