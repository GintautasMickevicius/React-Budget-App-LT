import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ( { children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    

    //Actions Creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) =>{
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Išlaidos' ? acc - currVal.amount : acc + currVal.amount), 0);
     
return (
    <ExpenseTrackerContext.Provider value={{
      transactions,
      balance,
      deleteTransaction,
      addTransaction,
     }}>
        {children}
    </ExpenseTrackerContext.Provider>
)
}