import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';

const ChildAccount = () => {
  const balance = 50; // Mocked balance
  const transactions = [
    { date: '2023-07-01', description: 'Toy Purchase', amount: -10 },
    { date: '2023-07-02', description: 'Allowance', amount: 20 },
    { date: '2023-07-03', description: 'Movie Tickets', amount: -15 },
  ]; // Mocked transactions

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Child Account
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2, minHeight: 200 }}>
          <Typography variant="h4" gutterBottom>
            Balance
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <Typography variant="h2">${balance}</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2, minHeight: 200 }}>
          <Typography variant="h4" gutterBottom>
            Recent Transactions
          </Typography>
          {transactions.map((transaction, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Typography variant="subtitle1">{transaction.date}</Typography>
              <Typography variant="subtitle1">{transaction.description}</Typography>
              <Typography variant="subtitle1">${transaction.amount}</Typography>
            </Box>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ChildAccount;
