import React from 'react'
import {Box,Drawer,List,ListItem,ListItemText,Typography} from '@mui/material'

export default function NavBar({handleToggleDrawer,open,handleNavClick}) {
  const navItems = ['Home', 'About', 'Project', 'CV', 'Contact'];
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
          <Typography variant="h5" mb={4}>
            Navigation
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
                button
                onClick={() => handleNavClick(item)}
                sx={{
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ fontSize: 20, textAlign: 'center' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
  )
}
