import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DataGrid} from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, getCars } from '../../apicalls';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';



const Container = styled.div`
  height: 600px;
  width: 100%;
 // padding: 20px;

`;


const columns= [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'model', headerName: 'Model', width: 170, 
    renderCell:(params)=>{
      return(
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
          <img src={params.row.img} style={{width:"40px", height:"40px", 
          borderRadius:"50%", objectFit:"cover"}}/>
          <span>{params.row.model}</span>
          </div>
      )
    }  
},
  { field: 'title', headerName: 'Brand', width: 70 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 70,
    renderCell:(params)=>{
      return (
        <span>{`$ ${params.row.price}`}</span>
      )
    }
  },
  {
    field: 'year',
    headerName: 'Year',
   // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 90,
    
  },

  
];


const rows = [
  {id: 1, title: "Ford", model:"Ford element", img: "https://www.rizzaford.com/static/dealer-21184/2308-Escape-Thumb.jpg", year:2024, price:25000, category:"ford"},
  {id: 2, title: "Benz", model:"Benz EClass", img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/47336/e-class-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80", year: 2023, price:35000, category:"benz"},
  {id: 3, title: "Porsche", model:"Porsche Everest", img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/24421/718-exterior-right-front-three-quarter-90912.jpeg?isig=0&q=80", year:2021, price:65000, category:"porsche"},
  {id: 4, title: "BMW", model:"BMW X5", img: "https://www.shutterstock.com/image-illustration/almaty-kazakhstan-february-10-2019-600nw-1314657857.jpg", year:2024, price:45000, category:"bmw"},
  {id: 5, title: "Ferrari", model: "Ferrari buldoz", img: "https://imgd.aeplcdn.com/370x208/cw/ec/21101/Ferrari-488-Right-Front-Three-Quarter-61997.jpg?v=201711021421&q=80", year: 2022, price: 95600, category:"ferrari"},
  {id: 6, title: "Bugatti", model:"Bugatti black horse",img: "https://assets.gqindia.com/photos/5cdc240162fe40b82f841042/master/pass/GQ-india-bugatti-car-image.jpg", year:2024, price:120000, category: "bugatti"},
]
;




const Home = () => {
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
    deleteCar(id, dispatch)
  };

  
  

      
      const cars = useSelector((state)=>state.car.cars)
      console.log(cars)
      useEffect(()=>{
        getCars(dispatch);
      }, [dispatch]);

      const actionColumn = [
        {field: 'actions', 
        headerName: 'Actions', 
        width: 120,
       renderCell:(params)=>{
        return (
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
          <Link to={"/admin/addcar/" + params.row._id}>
          <button style={{color:"white", backgroundColor:"green", border:"none", 
            cursor:"pointer", borderRadius:"5px"}}>Edit</button>
            </Link>
          <DeleteOutline style={{color:"red", cursor:"pointer"}} onClick={()=>confirmDelete(params.row._id)}/>
        </div>
        )
       }}
      ];
      

      const confirmDelete = (id) => {
     
        Notiflix.Confirm.show(
          'Delete Product!!!',
          'You are about to delete this car',
          'Delete',
          'Cancel',
          function okCb() {
            handleDelete(id);
          },
          function cancelCb() {
            console.log('Delete canceled');
          },
          {
            width: '320px',
            borderRadius: '3px',
            titleColor: "orangered",
            okButtonBackground: "orangered",
            cssAnimationStyle: "zoom"
            // etc...
          },
        );
      
      };
      




  return (
    <Container>
      <DataGrid
        rows={cars}
        columns={columns.concat(actionColumn)}
        getRowId={row=>row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Container>
  );
}

export default Home;
