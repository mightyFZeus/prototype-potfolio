import "./styles.css";
import uuid from "react-uuid";
import Projects from "./Projects/Projects";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const resume = [
  {
    id: uuid(),
    title: "Covid-19 Tracker",
    description: "Get the latstest Update on the corona virus around the world",
    github: "https://github.com/mightyFZeus/Covid-19.git",
    live: "https://covidcorona19v1.netlify.app",
    stack: "React + covid19Mathro + Material ui"
  },
  {
    id: uuid(),
    title: "E-commerce Shop",
    description: "Buy products on an online store ",
    github: "https://github.com/mightyFZeus/New-shoppingCart.git",
    live: "https://shopcartb.netlify.app/",
    stack: "React + Commercejs + stripe + Material ui"
  },
  {
    id: uuid(),
    title: "Todo App",
    description: "Put and mark completed Tasks",
    github: "https://github.com/mightyFZeus/todolist.git",
    live: "https://todoreactme.netlify.app/",
    stack: "React"
  },
  {
    id: uuid(),
    title: "insure Me",
    description: "Just a landing Page",
    github: "https://github.com/mightyFZeus/insure-page.git",
    live: "https://insureme.netlify.app",
    stack: "React + Styled Components"
  },
  {
    id: uuid(),
    title: "Expense Tracker",
    description: "Keep tabs on your income and expenses",
    github: "https://github.com/mightyFZeus/expense-tarcker.git",
    live: "expense-trackerb.netlify.app",
    stack: "React "
  },
];

export default function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      color: "white"
    }
  });
  return (
    <div style={{ backgroundColor: "#101016" }}>
      <Router>
        <>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home resume={resume} />
              </Route>

              <Route exact path="/Projects">
                <Projects resume={resume} />
              </Route>
            </Switch>
          </ThemeProvider>
        </>
      </Router>
    </div>
  );
}
