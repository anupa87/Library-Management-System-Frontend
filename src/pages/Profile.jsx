import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Box, Button, Container, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Snackbar from '@mui/material/Snackbar'

import { updateUser } from '../features/users/userSlice'

const Profile = () => {
  const authUserId = useSelector((state) => state.auth.id)
  const allUsers = useSelector((state) => state.users)
  const loggedUser = allUsers?.find((user) => user.id === authUserId)

  const [firstName, setFirstName] = useState(loggedUser.firstName)
  const [lastName, setLastName] = useState(loggedUser.lastName)
  const [email, setEmail] = useState(loggedUser.email)
  const [isEdit, setIsEdit] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const dispatch = useDispatch()

  const handleEdit = () => {
    setIsEdit(true)
    setShowSuccessMessage(false)
  }

  const handleSave = () => {
    const updatedUser = { id: userId, firstName, lastName, email }
    dispatch(updateUser(updatedUser))
    setIsEdit(false)
    setFirstName(updatedUser.firstName)
    setLastName(updatedUser.lastName)
    setEmail(updatedUser.email)
    setShowSuccessMessage(true)
  }

  return (
    <Grid item xs={10}>
      <Box>
        <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
          Update User
        </Typography>
        <hr />
      </Box>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center',
          mt: 5
        }}>
        <Box direction="row" spacing={1} alignItems="center">
          <AccountCircleIcon sx={{ fontSize: 100 }} />

          <Typography variant="h6">
            {loggedUser.firstName} {loggedUser.lastName}
          </Typography>
        </Box>
        {showSuccessMessage && (
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <Snackbar
              open={showSuccessMessage}
              autoHideDuration={6000}
              message="User updated successfully"
            />
            {/* <CheckCircle color="success" fontSize="large" /> */}
            <Typography variant="h6" color="success" ml={1}>
              Updated successfully!
            </Typography>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={!isEdit}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={!isEdit}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEdit}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          {!isEdit ? (
            <Button variant="contained" onClick={handleEdit}>
              Edit
            </Button>
          ) : (
            <>
              <Button variant="contained" onClick={() => setIsEdit(false)}>
                Cancel
              </Button>
              <Box sx={{ display: 'inline-block', width: '16px' }} />
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </>
          )}
        </Box>
      </Container>
    </Grid>
  )
}

export default Profile
