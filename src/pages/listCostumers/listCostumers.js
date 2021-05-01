import React, {useState, useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Container, Title,ContainerSearch, FloatingButtom, Add} from './styles';
import TextField from '@material-ui/core/TextField';

import api from '../../services/api';


const columns = [
    { field: 'id', headerName: 'ID', width: 240},
    { field: 'name', headerName: 'Name', width: 300},
    { field: 'email', headerName: 'Email', width: 260},
    { field: 'phone', headerName: 'Phone', width: 150},
    { field: 'address', headerName: 'Address', width: 400},
  ];

const ListCostumers = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const listCostumers = async () => {
            const response = await api.get('/customers');

            const newList = response.data.map(item => {
                return {id: item._id, name: item.name, email: item.email, phone: item.phone, address: item.address}
            })
            setList(newList);
        }

        listCostumers();
    }, [])

    const rowClick = (item) => {
        console.log(item.id)
    }
    return (
       <Container>
           <Title>List Costumers</Title>
           <ContainerSearch>
            <TextField id="standard-basic" label="Search" style={{width: 350}}/>
           </ContainerSearch>
           <div style={{ height: 400, width: '100%' }}>
            <DataGrid onRowClick={rowClick} rows={list} disableColumnMenu columns={columns} pageSize={5} />
           </div>
           <FloatingButtom>
               <Add>
                   +
               </Add>
           </FloatingButtom>
       </Container> 
    )
}



export default ListCostumers;
