import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import formatDate from '../../../utils/formatDate';

import useStyles from './styles';
import { incomeCategories, expenseCategories } from '../../../constants/categories';

const Form = () => {


    const initialState = {
    amount: '',
    category: '',
    type: 'Pajamos',
    date: formatDate(new Date()),
    }


    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    
    const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }

        addTransaction(transaction);
        setFormData(initialState);
    }

    const selectedCategories = formData.type === 'Pajamos' ? incomeCategories : expenseCategories;

  return (
      <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography align='center' variant='subtitle2' gutterBottom>
                  ...
              </Typography>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth>
                  <InputLabel>Pasirinkti</InputLabel>
                  <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                      <MenuItem value='Pajamos'>Pajamos</MenuItem>
                      <MenuItem value='Išlaidos'>Išlaidos</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth>
                  <InputLabel>Kategorija</InputLabel>
                  <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                  {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <TextField type='number' label='Suma' fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value})}/>
          </Grid>
          <Grid item xs={6}>
              <TextField type='date' label='Data' fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value)})}/>
          </Grid>
          <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Pridėti</Button>
      </Grid>
  )
};

export default Form;
