import React, {Component} from "react";
import { Box, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";


const baseUrl = "./static/images/";

const ProductCard = ({imgPath, imgDesc, imgName}) => (
    <Card sx={{ margin:'10px',maxWidth:345}}>
        <CardMedia 
            component="img"
            alt="Sports shoes"
            height='200px'
            image={require("./static/images/shoes1.jpg")}
        />

        <CardContent>
            <Typography variant="h5">{imgName}</Typography>
            <Typography variant="subtitle1">{imgDesc}</Typography>
        </CardContent>
    </Card>
);

class Products extends Component {
    state = {
        items: [{
            imgPath: "shoes1.jpg",
            itemName: "Shoes",
            itemDesc: "wndr-13 sports shoes for men",
            itemPrice: "1000"
        },{
            imgPath: "shoes1.jpg",
            itemName: "Shoes",
            itemDesc: "wndr-13 sports shoes for men"
        }]
    };
    render = function() {
        return (
            <Box>
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    textAlign="center"
                >
                    {this.state.items.map((proItem) => <ProductCard imgName={proItem.itemName} imgPath={proItem.imgPath} imgDesc={proItem.itemDesc} /> )}
                </Stack>
            </Box>
            
        );
    }
};

export default Products;