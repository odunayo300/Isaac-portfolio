import{ Toolbar,Typography,Button,Box,useScrollTrigger,Slide,IconButton} from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}


export default function AppBar({handleToggleDrawer}) {
  const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'CV', to: 'https://docs.google.com/document/d/11lFrm_Dqpk_tWv8IVA64iP-Ppb9_UmEf/edit?usp=sharing&ouid=112673778335244173708&rtpof=true&sd=true ' },
  { label: 'Contact', to: 'contact' },
]

  function handleNavClick(to) {
    if (to.startsWith('http')) {
      window.open(to, '_blank');
    } else {
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
  return (
    <HideOnScroll>
      <MuiAppBar position="sticky" color="default" sx={{ bgcolor: '#000', color: '#fff', boxShadow: 0, borderBottom:"1px solid", borderColor:"primary.main"}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 2 }}>
            ISAAC.O.O
          </Typography>
          <Box
            sx={{
                display:{
                    xs:"none",
                    md:"block"
                }
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.to}
                color="inherit"
                sx={{ color: '#fff', mx: 1, fontWeight: 500 }}
                onClick={() => handleNavClick(link.to)}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <IconButton
            onClick={handleToggleDrawer}
            button ="true"
            size="xl"
            aria-label="menu"
            color='primary'
            sx={{
                display:{
                    xs:"block",
                    md:"none"
                }
            }}
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </HideOnScroll>
  )
}
