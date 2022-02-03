import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import useStyles from '../../styles'
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
  return (
     <Card className={mergeClasses.root}>
         <CardHeader title='Biudžeto skaičiuoklė'/>
         <CardContent>
             <Typography align='center' variant='h5'>Likutis : {balance} € </Typography>
             <Typography variant='subtitle1' style={{lineHeight: '1.5rem', marginTop:'20px'}}>
             </Typography>
             <Divider />
            <Form />
         </CardContent>
         <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   <List />
                </Grid>
            </Grid>

         </CardContent>
     </Card>
  )
};

export default Main;
