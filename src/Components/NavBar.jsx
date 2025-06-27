import {Box,Drawer,List,ListItem,ListItemText} from '@mui/material'

export default function NavBar({handleToggleDrawer,open,handleNavClick}) {
  const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'CV', to: 'https://docs.google.com/document/d/11lFrm_Dqpk_tWv8IVA64iP-Ppb9_UmEf/edit?usp=sharing&ouid=112673778335244173708&rtpof=true&sd=true' },
  { label: 'Contact', to: 'contact' },
];
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
      <Drawer
        anchor="top"
        open={open}
        onClose={handleToggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: '#000',
            color: 'white',
            paddingTop: 8,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: '100%' }}
        >
          <List>
            {navLinks.map((item) => (
              <ListItem
                key={item}
                onClick={() => handleNavClick(item.to)}
                sx={{
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 20, textAlign: 'center' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
  )
}
