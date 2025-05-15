import React from 'react'
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

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'CV', to: 'cv' },
  { label: 'Contact', to: 'contact' },
]
export default function AppBar({handleToggleDrawer}) {
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
