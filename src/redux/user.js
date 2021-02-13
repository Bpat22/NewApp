import * as ActionTypes from './ActionTypes';

export const User = (state = {
    isLoading: true,
    errMess: null,
    id : '',
    firstName: '',
    middleName: '',
    lastName: '',
    userName: '',
    email: '',
    dob: '',
    ssn: null,
    checkingAccounts: [],
    savingsAccounts: [],
    dbaCheckingAccount: null,
    dbaAccounts: [],
    cdAccounts: [],
    regularIra: [],
    rolloverIra: [],
    rothIRA: [],
    transactions: [],
    combinedBalance: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, isLoading: false, errMess: null, id: action.payload.id, firstName: action.payload.firstName,
                middleName: action.payload.middleName, lastName: action.payload.lastName, userName: action.payload.userName, email: action.payload.email,
                dob: action.payload.dob, ssn: action.payload.ssn, checkingAccounts: action.payload.checkingAccounts, savingsAccounts: action.payload.savingsAccounts,
                dbaCheckingAccount: action.payload.dbaCheckingAccount, dbaAccounts: action.payload.dbaAccounts, cdAccounts: action.payload.cDAccounts,
                regularIra: action.payload.ira, rolloverIra: action.payload.rollOverIRA, rothIRA: action.payload.rothIRA, transactions: action.payload.transactions, combinedBalance: action.payload.combinedBalance}

        case ActionTypes.USER_LOADING:
            return { ...state, isLoading: true, errMess: null, accounts: [], firstName: '',
                middleName: '', lastName: '' } 
        
        case ActionTypes.USER_FAILED:
            return { ...state, isLoading: false, errMess: null, accounts: [], firstName: '',
                middleName: '', lastName: '' }

            
        default: 
            return state;
    }
}