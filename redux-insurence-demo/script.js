// People dropping off a form (Action Creatore)
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
