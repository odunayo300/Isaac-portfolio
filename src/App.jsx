import React from 'react'
import { Box,Container,Typography,Button,Stack,Chip,Grid,Card,CardMedia,CardContent,CardActions} from '@mui/material'
import NavBar from './Components/NavBar';
import AppBar from './Components/AppBar'
import CodeIcon from '@mui/icons-material/Code';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DevicesIcon from '@mui/icons-material/Devices';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';
const projectsData = [
  {
    id: 1,
    title: 'POS-PADI',
    description: 'software that is aimed to solve the financial dispute in pos business, record transaction to prevent fraudulent transaction.',
    image: 'src/assets/ps-padi.jpg',
    url: 'https://pospadi.com.ng',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Farmstedi',
    description: 'A modern software that uses AI(Artificial intelligence) to solve agricultural problem by providing inputs to generate best farming recommendations .',
    image: 'src/assets/farmstediImage1.png',
    url: 'https://farmstedi.netlify.app',
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Dreux financial Dashboard',
    description: 'Real-time data for cryptocurrencies, stocks and news using live APIs.',
    image: 'src/assets/cryptodash.jpg',
    url: 'https://dreux-findash.netlify.app',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Bank-Dash',
    description: 'A financial bankdash, containing transaction records and banking informations.',
    image: 'src/assets/bankDashboard.jpg',
    url: 'https://bankdash-team-2025.netlify.app',
    status: 'Completed',
  },
];

export default function App() {

  const title = "Turning Ideas into Interactive Interfaces";
  const techStack = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'React Native',
  'Chakra UI', 'Material UI', 'Bootstrap',
  'Git', 'GitHub', 'API Integration', 'RESTFUL API'
];

 const [open, setOpen] = useState(false);

 const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };
  return (
    <Box>
      <AppBar
         handleToggleDrawer = {handleToggleDrawer}
      />

      <NavBar 
        open = {open}
        handleToggleDrawer = {handleToggleDrawer}
        handleNavClick = {handleNavClick}
      />

      <Container>
         <Box
         id= 'home'
      sx={{
        marginTop:3,
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Box>
        {/* Animated Title */}
        <Typography
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 5vw, 4rem)',
            mb: 2,
            fontFamily: `'Montserrat', sans-serif`,
            whiteSpace: 'wrap',
            wordWrap: 'break-word',
          }}
        >
          {title.split('').map((char, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                display: 'inline-block',
                opacity: 0.2,
                animation: `fadeToPrimary 1s ease forwards`,
                animationDelay: `${index * 0.05}s`,
                color: 'white',
                '@keyframes fadeToPrimary': {
                  to: {
                    color: 'primary.main',
                    opacity: 1,
                  },
                },
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </Box>
          ))}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            maxWidth: 600,
            mx: 'auto',
            color: 'text.secondary',
            mb: 4,
          }}
        >
          I’m a passionate Front-End Engineer who builds responsive, intuitive, and user-focused web experiences with modern JavaScript frameworks and a sharp eye for design. Let’s bring your vision to life.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: '8px',
              boxShadow: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'white',
                color: 'primary.main',
                border: '2px solid',
                borderColor: 'primary.main',
              },
            }}
          >
            View My Work
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
      </Container>

            {/* About section */}
      <Container>
         <Box
      id="about"
      sx={{
        bgcolor: 'background.paper',
        px: 3,
        py: { xs: 8, md: 12 },
        display: 'flex',
        justifyContent:"center",
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: '900px', textAlign: 'center' }}>
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: `'Montserrat', sans-serif`,
            mb: 3,
            color: 'primary.main',
          }}
        >
          About Me
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'text.secondary',
            mb: 5,
            lineHeight: 1.8,
          }}
        >
          I'm a detail-oriented Front-End Engineer with a strong passion for crafting beautiful, functional, and accessible digital experiences. I specialize in React, JavaScript, and modern web technologies, turning complex problems into simple, intuitive interfaces. I'm always learning, always building.
        </Typography>

        {/* Icon Features */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
          mb={5}
        >
          <Box sx={{ textAlign: 'center' }}>
            <EmojiObjectsIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />
            <Typography fontWeight={600}>Creative Thinker</Typography>
            <Typography variant="body2" color="text.secondary">
              I bring fresh ideas to every project and love to find clever design solutions.
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <DevicesIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />
            <Typography fontWeight={600}>Responsive Design</Typography>
            <Typography variant="body2" color="text.secondary">
              My layouts adapt beautifully across all devices for a seamless experience.
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <CodeIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />
            <Typography fontWeight={600}>Clean Code</Typography>
            <Typography variant="body2" color="text.secondary">
              I write clean, maintainable code that scales and performs.
            </Typography>
          </Box>
        </Stack>

        {/* Tech Stack */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
        >
          Tech Stack I Work With:
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
        >
          {techStack.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 'bold', mb: 1 }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
      </Container>
          {/* project section */}
      <Container>
          <Box id="project" sx={{ px: 3, py: 10, bgcolor: 'background.paper' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          mb: 6,
          color: 'primary.main',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        My Projects/ Featured project
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projectsData.map((project) => (
          <Grid item xs={12} sm={6} md={6} key={project.id}>
            <Card
              sx={{
                height: '100%',
                maxWidth:'500px',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 3,
                '&:hover .hoverButton': {
                  opacity: 1,
                  transform: 'translate(-50%, -50%)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" fontWeight={600}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Chip
                  label={project.status}
                  color={project.status === 'Completed' ? 'success' : 'warning'}
                />
              </CardActions>

              {/* Hover button */}
              <Box
                className="hoverButton"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -40%)',
                  opacity: 0,
                  transition: 'all 0.4s ease',
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<OpenInNewIcon />}
                  href={project.url}
                  target="_blank"
                  sx={{
                    fontWeight: 'bold',
                    px: 3,
                    py: 1.2,
                    borderRadius: 20,
                  }}
                >
                  Visit Website
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
      </Container>
    </Box>
  )
}
