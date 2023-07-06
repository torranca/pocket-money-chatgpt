// ParentPay.js
import React, { useState, useEffect } from 'react';
import { Typography, FormControl, Select, MenuItem, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';

const ParentPay = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [setTransactions] = useState([]);

  // Mocked transaction data
const transactions = [
  { date: '2023-07-01', from: 'Mom', to: 'Anna', amount: 20 },
  { date: '2023-07-02', from: 'Dad', to: 'Luke', amount: 15 },
];


  const handleFromAccountChange = (e) => {
    setFromAccount(e.target.value);
  };

  const handleToAccountChange = (e) => {
    setToAccount(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

const handlePayClick = async () => {
  try {
    const response = await axios.post('http://localhost:4010/payments', {
      paymentIdentifiers: {
        endToEndId: 'XR202109202311354152',
      },
      requestedExecutionDate: '2022-10-10',
      transferType: 'CREDIT',
      paymentType: 'RTP',
      paymentCurrency: 'USD',
      paymentAmount: 10,
      categoryPurpose: {
        proprietary: 'INDIVIDUAL',
      },
      debtor: {
        debtorName: 'Paula Smitty',
        debtorAccount: {
          accountId: '000009102574986',
          accountType: 'DDA',
        },
        ultimateDebtor: {
          ultimateDebtorName: 'Christian Jones',
          postalAddress: {
            addressType: 'ADDR',
            streetName: 'Hancock Ave',
            buildingNumber: '121',
            postalCode: '07302',
            townName: 'Jersey City',
            country: 'US',
            countrySubDvsn: 'Hudson',
          },
          dateAndPlaceOfBirth: {
            birthDate: '1984-01-01',
            cityOfBirth: 'Hull city',
            countryOfBirth: 'BR',
          },
          individualId: {
            id: '001',
          },
        },
      },
      debtorAgent: {
        financialInstitutionId: {
          clearingSystemId: {
            id: '021000021',
            idType: 'USABA',
          },
        },
      },
      creditorAgent: {
        financialInstitutionId: {
          clearingSystemId: {
            id: '071000013',
            idType: 'USABA',
          },
        },
      },
      creditor: {
        creditorName: 'Clint Davos',
        postalAddress: {
          addressType: 'ADDR',
          streetName: 'Cow Hollow',
          buildingNumber: '65',
          postalCode: '05483',
          townName: 'San Francisco',
          country: 'US',
          countrySubDvsn: 'SFO',
        },
        dateAndPlaceOfBirth: {
          birthDate: '2001-01-12',
          cityOfBirth: 'London',
          countryOfBirth: 'UK',
        },
        creditorAccount: {
          accountId: '000000034257284',
          accountType: 'ACCT',
        },
        ultimateCreditor: {
          ultimateCreditorName: 'BR IRCT P2A Ultimate Creditor',
          postalAddress: {
            addressType: 'ADDR',
            streetName: 'Flint Ave',
            buildingNumber: '89',
            postalCode: '88793',
            townName: 'Los Angeles',
            country: 'US',
            countrySubDvsn: 'LAX',
          },
          dateAndPlaceOfBirth: {
            birthDate: '1999-04-01',
            cityOfBirth: 'Rio',
            countryOfBirth: 'BR',
          },
          organizationId: {
            id: '003',
          },
        },
      },
      remittanceInformation: {
        unstructuredInformation: [
          'For the good times',
        ],
      },
    });
    console.log(response.data);
    // Handle the payment response
  } catch (error) {
    console.error(error);
    // Handle any errors
  }
};

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:4010/transactions', {
        params: {
          // Add any required query parameters here
          accountIds: ['account1', 'account2'], // Example: Provide the account IDs you wish to retrieve transaction details for
          relativeDateType: 'CURRENT_DAY',
          // startDate: '2023-07-01',
          // endDate: '2023-07-06',
          // lockbox information: true,
          // pageNumber: 1,
        },
      });
      const transactions = response.data;
      setTransactions(transactions);
    } catch (error) {
      console.error(error);
      // Handle any errors
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []); // Fetch transactions on component mount


  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Parent Pay Page
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Typography variant="body1">Which Parent Pays:</Typography>
            <Select
              value={fromAccount}
              onChange={handleFromAccountChange}
              fullWidth
              sx={{ minWidth: 200 }}
            >
              <MenuItem value="">Select Account</MenuItem>
              <MenuItem value="Mom">Mom</MenuItem>
              <MenuItem value="Dad">Dad</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Typography variant="body1">Which Child Receives:</Typography>
            <Select
              value={toAccount}
              onChange={handleToAccountChange}
              fullWidth
              sx={{ minWidth: 200 }}
            >
              <MenuItem value="">Select Account</MenuItem>
              <MenuItem value="Luke">Luke</MenuItem>
              <MenuItem value="Anna">Anna</MenuItem>
              <MenuItem value="Joseph">Joseph</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Amount ($)"
            type="number"
            value={amount}
            step="0.01"
            onChange={handleAmountChange}
            fullWidth
            sx={{ minWidth: 200 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handlePayClick}>
            Pay
          </Button>
        </Grid>
		<Grid item xs={12}>
		  <Typography variant="h5">Transaction History</Typography>
		  <Grid container spacing={2} alignItems="center">
		    <Grid item xs={3}>
		      <Typography variant="subtitle1">Date</Typography>
		    </Grid>
		    <Grid item xs={3}>
		      <Typography variant="subtitle1">From</Typography>
		    </Grid>
		    <Grid item xs={3}>
		      <Typography variant="subtitle1">To</Typography>
		    </Grid>
		    <Grid item xs={3}>
		      <Typography variant="subtitle1">Amount</Typography>
		    </Grid>
		    {transactions.map((transaction, index) => (
		      <React.Fragment key={index}>
		        <Grid item xs={3}>
		          <Typography variant="body1">{transaction.date}</Typography>
		        </Grid>
		        <Grid item xs={3}>
		          <Typography variant="body1">{transaction.from}</Typography>
		        </Grid>
		        <Grid item xs={3}>
		          <Typography variant="body1">{transaction.to}</Typography>
		        </Grid>
		        <Grid item xs={3}>
		          <Typography variant="body1">${transaction.amount}</Typography>
		        </Grid>
		      </React.Fragment>
		    ))}
		  </Grid>
		</Grid>

      </Grid>
    </div>
  );
};

export default ParentPay;
