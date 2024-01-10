import React, {Component} from "react";
import { Box, Card, CardContent, CardMedia, CardActions, Typography,Button,IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate } from 'react-router-dom';
import CategoryToggleButton from "../../CategoryTab";

const ProductCard = ({proItem,userRole,addFunction}) => (
    <Card sx={{ margin:'20px',minHeight: 400,maxWidth:400, minWidth: 0, key:proItem.id}}>
        <CardMedia 
            component={"img"}
            alt="Sports shoes"
            sx={{ height: 200,width: 400 }}
            image={proItem.imageUrl}
        />

        <CardContent>
            <Typography variant="h5">{proItem.name}</Typography>
            <Typography variant="subtitle1">{proItem.description}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" onClick={()=>addFunction(proItem)}>Buy</Button>
            {userRole === "ADMIN" ? (
            <>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <EditIcon />
            </IconButton>
            </>
            ) : null}
        </CardActions>
    </Card>
);

class Products extends Component {
    state = {
        loggedIn : true,
        userRole : "USER",
        selectedCategory : 'clothing',
        cart : [],
        items: []
    };

    AddItemsToCart = function (proItem) {
        this.setState({
            cart : [...this.state.cart, {...proItem,qty: 1}]
        })
        console.log(this.state.cart)
    };

    FetchProductsList = async function () {
      const callFetchProductsList = await fetch("http://localhost:8080/api/products",
      { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

        return await callFetchProductsList.json();
    };

    componentDidMount() {
      this.FetchProductsList().then((res)=>{
        this.setState({
          items: res
        });
      })
    };

    render = function() {
        return this.state.loggedIn ? (
            <Box sx={{textAlign:"center",margin:'10px 10px'}}>
                <CategoryToggleButton onCategorySet={category => this.setState({selectedCategory:category})}/>
                <Stack 
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={{xs: 3, sm: 3}}
                    textAlign="center"
                >
                    {this.state.items.filter((item) => item.category.lower === this.state.selectedCategory.lower).map((proItem) => <ProductCard proItem={proItem} userRole = {this.state.userRole} addFunction={proItem => this.AddItemsToCart(proItem)}/> )}
                </Stack>
            </Box>
            
        ): <Navigate replace to="/Login" />;
    }
};

export default Products;