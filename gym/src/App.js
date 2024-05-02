
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Stack, Toolbar, Typography } from '@mui/material';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';

function App() {
  return (<div className='wapper'>

<div className="App">
      <nav>
        <AppBar position='static' color='transparent' elevation={0} >
          <Toolbar>
            <h1 className='branding'> Gym<span>Fit</span></h1>

            <div className='navItems'>
              <Stack  direction='row' spacing={2}>
              <a>HOME</a>
              <a>PAGES</a>
              <a>SERVICES</a>
              <a>MEMBERSHIP</a>
              <a>BLOG</a>
              <a>CONTACT</a>
              </Stack>
            </div>

            

            <div className='phone'>
              <PhoneAndroidOutlinedIcon />
              
              +23-563-<br/>5688
            </div>
          </Toolbar>
        </AppBar>
      </nav>

      <main>
        <h4>
          GYM FITNESS CLUB
        </h4>

        <h1>
          STEP UP YOUR <br></br> <span>FITNESS CHALLANGE</span> <br></br> WITH US
        </h1>

        <a className = 'btn' variant='container'>JOIN US   &#62;</a>

        
      </main>
      
    </div>

    <Container maxWidth='lg'>
        <Grid container gap={5}  justifyContent="center">
          <Grid item  md={3} sx={10} position='relative'>
            <Card>
        
              <CardContent>
              <div className='head'>
                <h1 className='cardIndex'>01</h1>
                <h4 className='cardHead'>
                  MODERN <br></br> EQUIPMENT
                </h4>
              </div>
                
                <p className='cardcont'>Vestibulu sit amet blan aurgue, sit amet vehicula mi. Aliquam vitae varius</p>
              </CardContent>

              <CardActions>
                <Button className='link' color='warning'> - MORE DETAILS</Button>
              </CardActions>
            </Card>
          </Grid>
         
          <Grid item  md={3} sx={10} position='relative'>
            <Card>
        
              <CardContent>
              <div className='head'>
                <h1 className='cardIndex'>02</h1>
                <h4 className='cardHead'>
                  PROFFESIONAL <br></br> TRAINER
                </h4>
              </div>
                
                <p className='cardcont'>Vestibulu sit amet blan aurgue, sit amet vehicula mi. Aliquam vitae varius</p>
              </CardContent>

              <CardActions>
                <Button className='link' color='warning'> - MORE DETAILS</Button>
              </CardActions>
            </Card>
          </Grid>
         
          <Grid item  md={3} sx={10} position='relative'>
            <Card>
        
              <CardContent>
              <div className='head'>
                <h1 className='cardIndex'>03</h1>
                <h4 className='cardHead'>
                  HEALTHY DIET <br></br> PLAN
                </h4>
              </div>
                
                <p className='cardcont'>Vestibulu sit amet blan aurgue, sit amet vehicula mi. Aliquam vitae varius</p>
              </CardContent>

              <CardActions>
                <Button className='link' color='warning'> - MORE DETAILS</Button>
              </CardActions>
            </Card>
          </Grid>
         

        </Grid>
      </Container>
      <div className='pop'>
        <Container maxWidth="lg">
          <hr></hr>

          <h2>POPULAR COURSES</h2>

          <p>We offer more than 35 group exercis, aerobic classes each week</p>

          <Grid container justifyContent='center' gap={2}>
            <Grid item lg={2} md ={5} xs={10}>
              <Card>
                <CardMedia className='cardImg' image='https://www.fitness-world.in/wp-content/uploads/2022/01/Planning-to-Install-a-Gym-in-your-Society-Banner.jpg'></CardMedia>
                
                <CardContent>
                  <h3>Build Body</h3>
                  Mentor: Jimmy Katter
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md ={5} xs={10}>
              <Card>
                <CardMedia className='cardImg' image='https://img.freepik.com/premium-photo/athletic-woman-doing-triceps-block-hand-exercises-girl-comfortable-tracksuit-has-slim-athletic-figure-strong-healthy-body_124865-6726.jpg'></CardMedia>
                
                <CardContent>
                  <h3>Build Body</h3>
                  Mentor: Jimmy Katter
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md ={5} xs={10}>
              <Card>
                <CardMedia className='cardImg' image='https://thumbs.dreamstime.com/b/fitness-woman-doing-planking-exercise-gym-sporty-girl-workout-145195097.jpg'></CardMedia>
                
                <CardContent>
                  <h3>Build Body</h3>
                  Mentor: Jimmy Katter
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md ={5} xs={10}>
              <Card>
                <CardMedia className='cardImg' image='https://img.freepik.com/premium-photo/fitness-woman-lifting-dumbbell_136403-6759.jpg'></CardMedia>
                
                <CardContent>
                  <h3>Build Body</h3>
                  Mentor: Jimmy Katter
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          
        </Container>

        <a className='btn'>SEE ALL OUR COURSES</a>
      </div>
      

      <footer>
        <Grid container justifyContent='center' gap={2}>
          <Grid item md={3} sx={7}>
            <h1>GYMFIT</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant.</p>

            <p>Nunc pulvinar sapien et ligula ullamcorper malesuada. In vitae turpis massa sed elementum tempus egestas.</p>
          </Grid>

          <Grid item md={2} sx={4}>
            <h3>RECENT POSTS</h3>

            <p>Claritas est etiam processus dynamicus</p>

            <p className='fade'>30 february 2019</p>

            <p>Claritas est etiam processus dynamicus</p>
            <p className='fade'>30 february 2019</p>
          </Grid>
          <Grid item md={2} sx={5}>
            <h3>QUICK LINKS</h3>

            <p> &#62;&#62; About Us</p>
            <p> &#62;&#62; Services</p>
            <p> &#62;&#62; Membership</p>
            <p> &#62;&#62; Courses</p>
            <p> &#62;&#62; Contact Us</p>
          </Grid>
          <Grid item md={2} sx={5}>
            <h3>HOME LOCATION</h3>

            <p> Weshington 6036 Richmond hwy, Alexander, VA USA</p>
            <p> +1(409)987-5874<br></br>info@demlink.org</p>
            
          </Grid>
        </Grid>

        <Stack direction='row' justifyContent='space-between' className='foot'>
          <p>Gymfit &#169; 2019, Theme By <br></br><span>Themefisher.com</span></p>

          <Stack direction='row' gap={2} alignItems='center'>
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
              <TwitterIcon></TwitterIcon>
              <GitHubIcon></GitHubIcon>
          </Stack>
        </Stack>
      </footer>
  </div>
    
  );
}

export default App;
