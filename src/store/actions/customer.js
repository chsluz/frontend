import api from '../../services/api';

export const listCustomers = () => {
  return async dispatch => {
    try {
        const response = await api.get('/customers');
        const newList = response.data.map(item => {
            return {id: item._id, name: item.name, email: item.email, phone: item.phone, address: item.address}
        })
        dispatch({
            type: 'LIST_CUSTOMERS',
            payload: newList
        })
    } catch (error) {
        console.log('ERROR_CUSTOMERS: ' + JSON.stringify(error));
        dispatch({
          type: 'ERROR_CUSTOMERS',
          payload: `Error getting customers: ${error.message}`
        });
    }
  } 
}

export const updateCustomer = (values) => {
  const {id, name, email, phone, address} = values;
  return async dispatch => {
    try {
      await api.put(`/customers/${id}`, {name,email,phone,address});
      dispatch({
        type: 'UPDATE_CUSTOMER',
    })
    } catch (error) {
      console.log('ERROR_CUSTOMERS: ' + JSON.stringify(error));
        dispatch({
          type: 'ERROR_CUSTOMERS',
          payload: `Error getting customers: ${error.message}`
        });
    }
  }
}

export const deleteCustomer = (id) => {
  return async dispatch => {
    try {
      await api.delete(`/customers/${id}`);
      dispatch({
        type: 'DELETE_CUSTOMER',
        payload: id,
    })
    } catch (error) {
      console.log('ERROR_CUSTOMERS: ' + JSON.stringify(error));
        dispatch({
          type: 'ERROR_CUSTOMERS',
          payload: `Error getting customers: ${error.message}`
        });
    }
  }
}

export const createCustomer = (values) => {
  const {name, email, phone, address} = values;
  return async dispatch => {
    try {
      await api.post('/customers', {name,email,phone,address});
      dispatch({
        type: 'ADD_CUSTOMER',
    })
    } catch (error) {
      console.log('ERROR_CUSTOMERS: ' + JSON.stringify(error));
        dispatch({
          type: 'ERROR_CUSTOMERS',
          payload: `Error getting customers: ${error.message}`
        });
    }
  }
}

export const updateSuccess = () => {
  return {
    type: 'SET_SHOW_SUCCESS',
  }
}

export const listCustomersFiltered = (filter) => {
  return async dispatch => {
    try {
        const response = await api.get(`/customers-filter?text=${filter}`);
        const newList = response.data.map(item => {
            return {id: item._id, name: item.name, email: item.email, phone: item.phone, address: item.address}
        })
        dispatch({
            type: 'LIST_CUSTOMERS',
            payload: newList
        })
    } catch (error) {
        console.log('ERROR_CUSTOMERS: ' + JSON.stringify(error));
        dispatch({
          type: 'ERROR_CUSTOMERS',
          payload: `Error getting customers: ${error.message}`
        });
    }
  } 
}