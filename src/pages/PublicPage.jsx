import { useState } from 'react'

import { Grid, Box, Typography, Button, Dialog } from '@mui/material'

import heroImage from '../assets/images/heroImage.jpg'
import Login from '../features/auth/components/Login'
import FeaturedBooks from '../features/book/components/FeaturedBooks'
import Footer from '../components/common/Footer'
import Register from '../features/auth/components/Register'

const PublicPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [registerModalOpen, setRegisterModalOpen] = useState(false)

  const handleLogin = () => {
    setModalOpen(true)
  }
  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleRegister = () => {
    setRegisterModalOpen(true)
  }
  const handleRegisterModalClose = () => {
    setRegisterModalOpen(false)
  }

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Box sx={{ position: 'relative' }}>
          <img
            src={heroImage}
            alt="Hero Image"
            style={{ width: '100%', height: '55vh', objectFit: 'cover' }}
          />
          <Box
            sx={{
              width: '15%',
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(-50%, 50%)',
              textAlign: 'center',
              opacity: 1,
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Button variant="contained" onClick={handleLogin} sx={{ backgroundColor: '#70334E' }}>
              Login
            </Button>
            <Button
              variant="contained"
              onClick={handleRegister}
              sx={{ backgroundColor: '#70334E' }}>
              Register
            </Button>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: '60%',
              left: '50%',
              transform: 'translate(-50%, 50%)',
              backgroundColor: '#70334E',
              textAlign: 'center',
              padding: 4,
              opacity: 0.9
            }}>
            <Typography
              variant="h1"
              sx={{ mb: 1, fontWeight: 'bold', letterSpacing: '0.1em' }}
              color="#FFFFFF">
              BookSphere
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2, underline: 'none' }}>
              <Typography variant="h6" gutterBottom color="#FFFFFF">
                Opening: Monday - Friday ( 9:00 - 16:00)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={10}>
        <FeaturedBooks />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: '#70334E',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 4
        }}>
        <Footer />
      </Grid>
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& .MuiDialog-paper': {
            opacity: 0,
            transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
          },
          '& .MuiDialog-paper.MuiDialog-paperOpen': {
            opacity: 1
          }
        }}>
        <Login modalOpen={modalOpen} onClose={handleModalClose} />
      </Dialog>
      <Dialog
        open={registerModalOpen}
        onClose={handleRegisterModalClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& .MuiDialog-paper': {
            opacity: 0,
            transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
          },
          '& .MuiDialog-paper.MuiDialog-paperOpen': {
            opacity: 1
          }
        }}>
        <Register modalOpen={registerModalOpen} onClose={handleRegisterModalClose} />
      </Dialog>
    </Grid>
  )
}

export default PublicPage
