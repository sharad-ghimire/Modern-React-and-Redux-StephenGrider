// People dropping off a form (Action Creator)
const createPolicy = (name, amount) => {
  return {
    //Action (a form in our anology)
    type: 'CREATE_POLICY', //Convention to use uppercase
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

// Reducers (Departments)
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // We care about this action (FORM!)
    return [...oldListOfClaims, action.payload]; // Return new array instead of modifying it
    // All of the record inside oldListOfClaim and add ation.payload to this and get new array
  }
  // We dont care the action (form)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const ploicies = (listOfPolicies = [], action) => {
  if ((action.type = 'CREATE_POLICY')) {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }

  return listOfPolicies;
};

const { createStore, combineReducers } = Redux; // Get those from Redux Library

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  ploicies: ploicies
});
const store = createStore(ourDepartments);

//Create an action calling action creator and pass that action to dispatch (form reciever)
const action = createPolicy('Alex', 20);
store.dispatch(action);

store.dispatch(createPolicy('Bob', 40));
store.dispatch(createClaim('Alex', 120));
store.dispatch(deletePolicy('Bob'));

store.getState(); // Will get access to that big blib of information (state)
