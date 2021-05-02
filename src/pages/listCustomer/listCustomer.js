import React, { useState, useEffect } from "react";
import {useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { bindActionCreators } from "redux";
import {
  Container,
  Title,
  ContainerSearch,
  FloatingButtom,
  Add,
  ContainerConfirm,
  ContainerTitle,
  TitleConfirm,
  ContainerButtomConfirm,
  ButtonConfirm,
} from "./styles";
import TextField from "@material-ui/core/TextField";
import ErrorComponent from "../../components/error/error";
import SuccessComponent from '../../components/success/success';
import { listCustomers, listCustomersFiltered, updateSuccess, deleteCustomer } from "../../store/actions/customer";

const columns = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "name", headerName: "Name", width: 300 },
  { field: "email", headerName: "Email", width: 260 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "address", headerName: "Address", width: 400 },
];

let timer;

const ListCustomers = (props) => {
  const [showMsg, setShowMsg] = useState(false);
  const [filter, setFilter] = useState("");
  const [item, setItem] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const history = useHistory();
  useEffect(() => {
    props.listCustomers();
  }, []);

  useEffect(() => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 5000);
  }, [props.showError]);

  useEffect(() => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
      props.updateSuccess();
    }, 5000);
  }, [props.showSuccess]);

  const filterSearch = () => {
    props.listCustomersFiltered(filter);
  };

  const changeValueFilter = (e) => {
    setFilter(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(filterSearch, 2000);
  };

  const rowClick = (item) => {
    setShowDialog(true);
    setItem(item);
   
  };

  const onClickEditItem = () => {
    redirectToEditItem(item.id);
    setShowDialog(false);
  }

  const onClickDelete = () => {
    setShowDialog(false);
    props.deleteCustomer(item.id);
  }

  const onClickCancel = () => {
    setShowDialog(false);
  }

  const redirectToAddItem = () => {
    history.push('/add-item')
  }

  const redirectToEditItem = (id) => {
    history.push(`/add-item/${id}`)
  }

  return (
    <Container>
      <Title>List Customers</Title>
      <ContainerSearch>
        <TextField
          value={filter}
          onChange={changeValueFilter}
          id="standard-basic"
          label="Search"
          style={{ width: 350 }}
        />
      </ContainerSearch>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          onRowClick={rowClick}
          rows={props.list}
          disableColumnMenu
          columns={columns}
          pageSize={5}
        />
      </div>
      <FloatingButtom onClick={redirectToAddItem}>
        <Add>+</Add>
      </FloatingButtom>
      {props.showError && showMsg && (
        <ErrorComponent msg={props.errorMessage} />
      )}

      {
        showDialog && 
        <ContainerConfirm>
          <ContainerTitle>
            <TitleConfirm>What do you want to do?</TitleConfirm>
          </ContainerTitle>
          <ContainerButtomConfirm>
            <ButtonConfirm onClick={onClickCancel}>CANCEL</ButtonConfirm>
            <ButtonConfirm onClick={onClickDelete}>DELETE</ButtonConfirm>
            <ButtonConfirm onClick={onClickEditItem}>EDIT</ButtonConfirm>
          </ContainerButtomConfirm>
        </ContainerConfirm>
      }
      {props.showSuccess && showMsg && (
        <SuccessComponent msg={"Customer successfully deleted"} />
      )}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    list: state.customerReducer.list,
    showError: state.customerReducer.showErrors,
    errorMessage: state.customerReducer.errorMessage,
    showSuccess: state.customerReducer.showSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      listCustomers,
      listCustomersFiltered,
      updateSuccess,
      deleteCustomer,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCustomers);
