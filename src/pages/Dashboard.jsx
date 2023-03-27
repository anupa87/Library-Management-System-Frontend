import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import { Grid, Box, Typography } from '@mui/material'

import BooksIssue from '../components/books/BooksIssue'
import CardsDashboard from '../components/cards/CardsDashboard'

const Dashboard = () => {
  const navigate = useNavigate()
  const date = moment().format('Do MMMM YYYY')
  const time = moment().format('h:mm A')
  const day = moment().format('dddd')
  const userName = 'Anupa'
  // const totalUser = 100
  // const totalAuthor = 50
  // const totalBooks = 1000

  return (
    <Grid item xs={10}>
      <Box>
        <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
          Dashboard
        </Typography>
        <hr />
        <Typography sx={{ mt: 1 }}>
          {moment().format('MMMM Do YYYY')} | {moment().format('dddd')},{' '}
          {moment().format('h:mm:ss a')}
        </Typography>
        <Typography variant="h5" sx={{ mt: 5, textAlign: 'center' }}>
          Welcome, {userName}
        </Typography>
        <CardsDashboard />
        <BooksIssue />
      </Box>
    </Grid>
  )
}

export default Dashboard
