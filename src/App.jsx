import { useRef, useEffect,useState } from 'react';
import emailjs from '@emailjs/browser'
import { Box,Container,Typography,Button,Stack,Chip,Grid,Card,CardMedia,CardContent,CardActions} from '@mui/material'
import NavBar from './Components/NavBar';
import AppBar from './Components/AppBar'
import CodeIcon from '@mui/icons-material/Code';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DevicesIcon from '@mui/icons-material/Devices';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import bankDashboard from './assets/bankDashboard.jpg';
import farmstediImage1 from './assets/farmstediImage1.png';
import cryptodash from './assets/cryptodash.jpg';
import posPadi from './assets/posPadi.jpg';
import profileImg from './assets/myImage.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import './App.css';



const projectsData = [
  {
    id: 1,
    title: 'POS-PADI',
    description: 'software that is aimed to solve the financial dispute in pos business, record transaction to prevent fraudulent transaction.',
    image:posPadi,
    url: 'https://pospadi.com.ng',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Farmstedi',
    description: 'A modern software that uses AI(Artificial intelligence) to solve agricultural problem by providing inputs to generate best farming recommendations .',
    image: farmstediImage1,
    url: 'https://farmstedi.netlify.app',
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Dreux financial Dashboard',
    description: 'Real-time data for cryptocurrencies, stocks and news using live APIs.',
    image: cryptodash,
    url: 'https://dreux-findash.netlify.app',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Bank-Dash',
    description: 'A financial bankdash, containing transaction records and banking informations.',
    image: bankDashboard,
    url: 'https://bankdash-team-2025.netlify.app',
    status: 'Completed',
  },
];

export default function App() {
  const form = useRef();
  const [fullName,setFullName]= useState("")
  const [email,setEmail]= useState("")
  const [message,setMessage]= useState("")
  const[fullNameError, setFullNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [open, setOpen] = useState(false);
  const imgRef = useRef(null);
  const [imgVisible, setImgVisible] = useState(false);
  // At the top of your component
const [responseMsg, setResponseMsg] = useState('');
const [responseType, setResponseType] = useState(''); // 'success' or 'error'

  // form submission, 
  const handleSubmit = (event) =>{
    event.preventDefault();
    
    let hasError = false

    if(fullName.trim() === ""){
      setFullNameError(true)
      hasError = true
    }else{
      setFullNameError(false)
    }
    // Validate email format
    if(email.trim() === "" || !email.includes('@') || !email.includes('.')){
      setEmailError(true)
      hasError = true
    }else{
      setEmailError(false)
    }
    if(message.trim() === ""){
      setMessageError(true)
      hasError = true
    } else {
      setMessageError(false)
    }

    //email.js integration for email sending

    if(!hasError){
       emailjs
      .sendForm('service_awj6x9e', 'template_tmk03sv', form.current, {
        publicKey: '0ooZoxB30s6PLF4Ns',
      })
      .then(
        () => {
          setResponseMsg('Mail successfully sent to Isaac Odunayo');
         setResponseType('success');
        },
        (error) => {
          setResponseMsg(`Failed to send mail: ${error.text}`);
          setResponseType('error');
        },
      );
    }
   
  };


   // Slide-in animation only when image is in view
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(img);

    return () => observer.disconnect();
  }, []);


  const title = "Turning Ideas into Interactive Interfaces";
  const techStack = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'React Native',
  'Chakra UI', 'Material UI', 'Bootstrap',
  'Git', 'GitHub', 'API Integration', 'RESTFUL API'
];

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
            onClick={() => {
              const section = document.getElementById('projects');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
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
             onClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
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

         {/* Profile Image */}
         <Box
          ref={imgRef}
          component="img"
          src={profileImg}
          alt="Isaac O.O"
          sx={{
            width: { xs: 140, sm: 180, md: 220 },
            height: { xs: 140, sm: 180, md: 220 },
            objectFit: 'cover',
            borderRadius: '50%',
            border: '5px solid',
            borderColor: 'primary.main',
            boxShadow: 4,
            mx: 'auto',
            mb: 4,
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible
              ? 'translateX(0)'
              : { xs: 'translateX(-40px)', md: 'translateX(-80px)' },
            transition: 'all 1s cubic-bezier(.68,-0.55,.27,1.55)',
          }}
        />

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

        {/*  */}

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
          <Box id="projects" sx={{ px: 3, py: 10, bgcolor: 'background.paper' }}>
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
        My Projects
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

      {/* contact me section */}
      <Box
        id="contact"
        sx={{
          bgcolor: 'background.default',
          px: 3,
          py: 10,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: 'primary.main',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 600, mx: 'auto', mb: 5, color: 'text.secondary' }}
        >
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let’s connect and make something amazing together!
        </Typography>
       
        {/* Contact Form */}

        <form ref={form} onSubmit={handleSubmit}>
          <Box
            sx={{
              maxWidth: 500,
              mx: 'auto',
              mt: 4,
              p: { xs: 2, sm: 4 },
              borderRadius: 4,
              boxShadow: 3,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'primary.main', mb: 1, textAlign: 'left', fontWeight: 600 }}
                >
                  Full Name
                </Typography>
                <input
                  type="text"
                  name='name'
                  placeholder={fullNameError? "full name can't be empty" : "Enter your Full Name"}
                  value={fullName}
                  onChange={
                    (e) => {setFullName(e.target.value);
                      if (fullNameError) setFullNameError(false);
                    }
                  }
                   className={fullNameError ? "input-error" : ""}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 8,
                    border: fullNameError? '2px solid #f44336' : '1.5px solid #333',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'primary.main', mb: 1, textAlign: 'left', fontWeight: 600 }}
                >
                  Email Address
                </Typography>
                <input
                  type="email"
                  name='email'
                  placeholder={setEmailError ? "Enter a valid email address " : "Enter your Email Address"}
                  value={email}
                  onChange={(e) => {setEmail(e.target.value);
                    if(emailError) setEmailError(false);
                  }}
                   className={emailError ? "input-error" : ""}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 8,
                    border: emailError ? '2px solid #f44336' : '1.5px solid #333',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'primary.main', mb: 1, textAlign: 'left', fontWeight: 600 }}
                >
                  Message
                </Typography>
                <textarea
                  rows={5}
                  name='message'
                  placeholder= {messageError ? "Please enter your message to Isaac odunayo" : "Enter your message......."}
                  value={message}
                  onChange={(e) => {setMessage(e.target.value);
                    if(messageError) setMessageError(false)
                  }}
                 className={messageError ? "textarea-error" : ""}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 8,
                    border: messageError ? '2px solid #f44336' : '1.5px solid #333',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
            
                  }}
                />
              </Box>
            </Stack>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                px: 5,
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                borderRadius: 8,
                boxShadow: 3,
                alignSelf: 'center',
                transition: 'all 0.3s',
                letterSpacing: 1,
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'primary.main',
                  border: '2px solid',
                  borderColor: 'primary.main',
                },
              }}
            >
              Send Message
            </Button>
            {responseMsg && (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                {responseType === 'success' ? (
                  <CheckCircleIcon sx={{ color: 'green', mr: 1 }} />
                ) : (
                  <ErrorIcon sx={{ color: 'red', mr: 1 }} />
                )}
                <Typography sx={{ color: responseType === 'success' ? 'green' : 'red', fontWeight: 600 }}>
                  {responseMsg}
                </Typography>
              </Box>
            )}
          </Box>
        </form>
      </Box>
      

      {/* footer */}
      <Box
        component="footer"
        sx={{
          mt: 8,
          pt: 4,
          pb: 2,
          bgcolor: 'background.default',
          textAlign: 'center',
        }}
      >
        <Box sx={{ maxWidth: 500, mx: 'auto', mb: 2 }}>
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', mb: 2 }} />
          <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
            <Button
              href="https://github.com/odunayo300 "
              target="_blank"
              rel="noopener"
              startIcon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#fff" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2Z"/>
                </svg>
              }
              sx={{ color: '#fff', fontWeight: 600, textTransform: 'none' }}
            >
              GitHub Repo
            </Button>
            <Button
              href=" https://www.linkedin.com/in/odunayo-isaac-7480b7245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcAi8wTrZTcSMj7PUaAcTSw%3D%3D"
              target="_blank"
              rel="noopener"
              startIcon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="#fff" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/>
                </svg>
              }
              sx={{ color: '#fff', fontWeight: 600, textTransform: 'none' }}
            >
              LinkedIn
            </Button>
          </Stack>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
          &copy; {new Date().getFullYear()} ISAAC.O.O. All rights reserved.
        </Typography>
      </Box>
    
    </Box>
  )
}
