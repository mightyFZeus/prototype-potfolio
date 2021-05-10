import "./styles.css";
import {Card, Grid, CardContent,Typography, Button} from '@material-ui/core'
import uuid from "react-uuid";


const resume = [
  {
    
      id: uuid(),
      title: "Covid-19 Tracker",
      description: "Get the latstest Update on the corona virus around the world",
      github: "https://github.com/mightyFZeus/Covid-19.git",
      live: "https://covidcorona19v1.netlify.app",
      stack: "React + covid19Mathro + Material ui",
     
    
  },
  {
    
    id: uuid(),
    title: "E-commerce Shop",
    description: "Buy products on an online store ",
    github: "https://github.com/mightyFZeus/New-shoppingCart.git",
    live: "https://shopcartb.netlify.app/",
    stack: "React + Commercejs + stripe + Material ui",

},
{
    
  id: uuid(),
  title: "Todo App",
  description: "Put and mark completed Tasks",
  github: "https://github.com/mightyFZeus/todolist.git",
  live: "https://todoreactme.netlify.app/",
  stack: "React",
  

},
{
    
  id: uuid(),
  title: "insure Me",
  description: "Just a landing Page",
  github: "https://github.com/mightyFZeus/insure-page.git",
  live: "https://insureme.netlify.app",
  stack: "React + Styled Components",
 

},
]

export default function App() {
  return (
    <>
      <Grid container justify="center" spacing={4}>
      {resume.map((resume) => (
          <Grid item key={resume.id} xs={12} sm={6} md={4} lg={3}>
          
          <Card>
            <CardContent key={resume.id}>
              <Typography>{resume.title}</Typography>
              <Typography>{resume.stack}</Typography>
              <Typography>{resume.description}</Typography>
              <a href={resume.github}>
              <Button style={{textTransform:'none'}} variant="contained" color="primary">github</Button> 
              </a>
              <a href={resume.live}>
              <Button style={{textTransform:'none'}} variant="contained" color="secondary">live</Button>

              </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

  