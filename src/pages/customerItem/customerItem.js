import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { useFormik } from 'formik';
import { updateCustomer,updateSuccess,createCustomer} from '../../store/actions/customer';
import {
  Container,
  Title,
  ContainerSearch,
  FormStyled,
  TextFieldStyled,
  ButtonStyled
} from "./styles";
import ErrorComponent from "../../components/error/error";
import SuccessComponent from '../../components/success/success';


const CustomerItem = (props) => {
  let { id } = useParams();
  const [showMsg, setShowMsg] = useState(false);
  const [disable, setDisable] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
      setDisable(false);
    }, 5000);
  }, [props.showError]);

  useEffect(() => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
      if(props.showSuccess) {
        history.goBack();
      }
      props.updateSuccess();
      setDisable(false);
    }, 5000);
  }, [props.showSuccess]);

  useEffect(() => {
    if(id) {
      let item = props.list.filter(customer => customer.id === id);
      if(item.length > 0) {
        formik.setValues(item[0]);
      }
    }
  },[id])


  const handleSubmit = (values) => {
    setDisable(true);
    if(id) {
      props.updateCustomer(values);
    }
    else {
      props.createCustomer(values);
    }
  } 


  const validate = values => {
    const errors = {};
    if (values.name === '') {
      errors.name = 'Name Required';
    } 
    if (values.email === '') {
      errors.email = 'Email Required';
    } 
    if (values.phone === '') {
      errors.phone = 'Phone Required';
    } 
    if (values.address === '') {
      errors.address = 'Address Required';
    }
    return errors;
  }


  const formik = useFormik({
    initialValues:{ id: '', name: '', email: '', phone: '', address: '' },
    validate,
    onSubmit: values => handleSubmit(values),
  })


  return (
    <Container>
      <Title>Add Customer</Title>
      <ContainerSearch />
      <FormStyled onSubmit={formik.handleSubmit}>
        <TextFieldStyled disabled={disable} label="Name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <TextFieldStyled disabled={disable} label="Email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <TextFieldStyled disabled={disable} label="Phone" name="phone" onChange={formik.handleChange} value={formik.values.phone}/>
        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
        <TextFieldStyled disabled={disable} label="Address" name="address" onChange={formik.handleChange} value={formik.values.address}/>
        {formik.errors.address ? <div>{formik.errors.address}</div> : null}
        <ButtonStyled disabled={disable} type="submit">Submit</ButtonStyled>
      </FormStyled>
      {props.showError && showMsg && (
        <ErrorComponent msg={props.errorMessage} />
      )}
      {props.showSuccess && showMsg && (
        <SuccessComponent msg={id ? "Customer successfully edited"  : "Customer successfully created"} />
      )}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    list: state.customerReducer.list,
    showError: state.customerReducer.showErrors,
    showSuccess: state.customerReducer.showSuccess,
    errorMessage: state.customerReducer.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateCustomer,
      updateSuccess,
      createCustomer,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerItem);
