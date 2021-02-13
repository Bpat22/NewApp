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
    personalCheckingAccount: null,
    dbaAccounts: [],
    cdAccounts: [],
    regularIra: null,
    rolloverIra: null,
    rothIra: null,
    transactions: [],
    combinedBalance: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, isLoading: false, errMess: null, id: action.payload.id, firstName: action.payload.firstName,
                middleName: action.payload.middleName, lastName: action.payload.lastName, userName: action.payload.userName, email: action.payload.email,
                dob: action.payload.dob, ssn: action.payload.ssn, checkingAccounts: action.payload.checkingAccounts, savingsAccounts: action.payload.savingsAccounts,
                personalCheckingAccount: action.payload.personalCheckingAccount, dbaAccounts: action.payload.dbaAccounts, cdAccounts: action.payload.cdAccounts,
                regularIra: action.payload.regularIra, rolloverIra: action.payload.rolloverIra, rothIra: action.payload.rothIra, transactions: action.payload.transactions, combinedBalance: action.payload.combinedBalance}

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