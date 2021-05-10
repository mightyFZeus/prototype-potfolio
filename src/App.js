import "./styles.css";
import uuid from "react-uuid";
import Projects from "./Projects/Projects";

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
  }
];

export default function App() {
  return (
    <>
      <Projects resume={resume} />
    </>
  );
}
