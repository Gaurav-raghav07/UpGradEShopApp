import React, {Component} from "react";
import { Box, Card, CardContent, CardMedia, CardActions, Typography,Button,IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ProductCard = ({imgPath, imgDesc, imgName}) => (
    <Card sx={{ margin:'20px',minHeight: 400,maxWidth:400, minWidth: 0}}>
        <CardMedia 
            component={"img"}
            alt="Sports shoes"
            sx={{ height: 200,width: 400 }}
            image={imgPath}
        />

        <CardContent>
            <Typography variant="h5">{imgName}</Typography>
            <Typography variant="subtitle1">{imgDesc}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" onClick={(imgPath,imgDesc,imgName) => this.AddItemsToCart(imgPath,imgDesc,imgName)}>Buy</Button>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <EditIcon />
            </IconButton>
        </CardActions>
    </Card>
);

class Products extends Component {
    state = {
        cart : [],
        items: [{
            "_id": {
              "$oid": "658af6e1bb8f629a58697e2d"
            },
            "name": "Corn Kernels - Frozen",
            "category": "clothing",
            "price": 9889.4,
            "description": "Late congenital neurosyphilis [juvenile neurosyphilis]",
            "manufacturer": "Geo",
            "availableItems": 20,
            "imageUrl": "http://dummyimage.com/121x100.png/dddddd/000000"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e2e"
            },
            "name": "Lettuce - Lolla Rosa",
            "category": "electronics",
            "price": 4899.51,
            "description": "Unspecified physeal fracture of phalanx of right toe, sequela",
            "manufacturer": "Maserati",
            "availableItems": 43,
            "imageUrl": "http://dummyimage.com/159x100.png/5fa2dd/ffffff"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e2f"
            },
            "name": "Pork - Smoked Back Bacon",
            "category": "home decor",
            "price": 3655.08,
            "description": "Adhesions due to foreign body accidentally left in body following aspiration, puncture or other catheterization",
            "manufacturer": "Acura",
            "availableItems": 100,
            "imageUrl": "http://dummyimage.com/109x100.png/5fa2dd/ffffff"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e30"
            },
            "name": "Drambuie",
            "category": "home decor",
            "price": 4717.17,
            "description": "Bitten by other rodent, subsequent encounter",
            "manufacturer": "Mazda",
            "availableItems": 51,
            "imageUrl": "http://dummyimage.com/121x100.png/dddddd/000000"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e31"
            },
            "name": "Bar - Granola Trail Mix Fruit Nut",
            "category": "automotive",
            "price": 6362.95,
            "description": "Other specified sprain of wrist",
            "manufacturer": "Dodge",
            "availableItems": 85,
            "imageUrl": "http://dummyimage.com/172x100.png/5fa2dd/ffffff"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e32"
            },
            "name": "Cookies - Englishbay Chochip",
            "category": "books",
            "price": 7299.15,
            "description": "Struck by other hit or thrown ball, subsequent encounter",
            "manufacturer": "Toyota",
            "availableItems": 43,
            "imageUrl": "http://dummyimage.com/150x100.png/dddddd/000000"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e33"
            },
            "name": "Nantucket - Pomegranate Pear",
            "category": "clothing",
            "price": 8438.58,
            "description": "Papulosquamous disorders in diseases classified elsewhere",
            "manufacturer": "Ford",
            "availableItems": 66,
            "imageUrl": "http://dummyimage.com/191x100.png/5fa2dd/ffffff"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e34"
            },
            "name": "Beer - True North Strong Ale",
            "category": "automotive",
            "price": 6749.21,
            "description": "Asphyxiation due to smothering under pillow, assault, sequela",
            "manufacturer": "Buick",
            "availableItems": 44,
            "imageUrl": "http://dummyimage.com/114x100.png/cc0000/ffffff"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e35"
            },
            "name": "Wine - Casillero Deldiablo",
            "category": "books",
            "price": 7360.47,
            "description": "Disorders of visual pathways in (due to) vascular disorders, left side",
            "manufacturer": "Pontiac",
            "availableItems": 82,
            "imageUrl": "http://dummyimage.com/138x100.png/cc0000/ffffff"
          },
          {
            "_id": {
              "$oid": "658af6e1bb8f629a58697e36"
            },
            "name": "Turnip - White",
            "category": "electronics",
            "price": 5982.55,
            "description": "Drug or chemical induced diabetes mellitus with moderate nonproliferative diabetic retinopathy without macular edema",
            "manufacturer": "Chevrolet",
            "availableItems": 44,
            "imageUrl": "http://dummyimage.com/101x100.png/ff4444/ffffff"
          }]
    };

    AddItemsToCart = ({imgPath, imgDesc, imgName}) => {
        this.setState({
            cart : [...this.state.cart,{"itemName": imgName}]
        })
        console.log(this.state.cart)
    };

    render = function() {
        return (
            <Box>
                <Stack 
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    spacing={{xs: 3, sm: 3}}
                    textAlign="center"
                >
                    {this.state.items.map((proItem) => <ProductCard imgName={proItem.name} imgPath={proItem.imageUrl} imgDesc={proItem.description} /> )}
                </Stack>
            </Box>
            
        );
    }
};

export default Products;