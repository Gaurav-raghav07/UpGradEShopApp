import React, { useEffect, useState } from "react";
import CategoryToggleButton from "./CategoryTab";
import { Box,Grid,Typography,TextField,useTheme,Button } from "@mui/material";

function ProductsPage({productiid}) {
    const [productDetails, setProductDetails] = useState([]);
    const theme = useTheme();
    const fetchProduct = async () => {
        const callFetchProductDetails = await fetch("http://localhost:8080/api/products/"+productiid, 
            { 
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                }
            );

        const resolveProductDetails = await callFetchProductDetails.json();
        console.log(resolveProductDetails);
        setProductDetails(resolveProductDetails);
    };

    useEffect(()=>{
        fetchProduct();
    },[]);
    
    return productDetails ? (
        <Box sx={{flexGrow: 1}}>
        <Grid container spacing={1}>
            <Grid container item spacing={3}>
                <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <CategoryToggleButton />
                    </div>
                </Grid>
                <Grid item xs={12} sx={{ display: { xs: 'none', md: 'none', lg: "flex" }}}>
                    <div style={{display: 'flex', justifyContent: 'center', padding: "5% 20% 0% 20%"}}>
                        <Grid container>
                            <Grid item xs={4}>
                                <img
                                    style={{
                                        maxWidth: "300px",
                                        width: "100%",
                                        height: "400px",
                                    }}
                                    src={productDetails.imageUrl}
                                    alt={"Image of " + productDetails.name}
                                />
                            </Grid>
                            <Grid item xs={1}/>
                            <Grid item xs={7}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <div style={{display: 'flex', justifyContent: 'left'}}>
                                            <Typography variant={"h4"}>
                                                {productDetails.name}
                                            </Typography>
                                            <div style={{paddingLeft: "4%"}}>
                                                <Typography
                                                    variant={"body1"}
                                                    style={{
                                                        color: "#FFFFFF",
                                                        backgroundColor: theme.palette.primary.main,
                                                        padding: "2px 10px 2px 10px",
                                                        marginTop: "5px",
                                                        borderRadius: 20,
                                                    }}
                                                >
                                                    {"Available Quantity : " + productDetails.availableItems}
                                                </Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{display: 'flex', justifyContent: 'left'}}>
                                            <Typography
                                                variant={"body1"}
                                                style={{
                                                    paddingTop: "2%",
                                                }}
                                            >
                                                Category: <b>{productDetails.category}</b>
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{display: 'flex', justifyContent: 'left'}}>
                                            <Typography
                                                variant={"body1"}
                                                style={{
                                                    paddingTop: "4%",
                                                }}
                                            >
                                                {productDetails.description}
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{display: 'flex', justifyContent: 'left'}}>
                                            <Typography
                                                variant={"h5"}
                                                style={{
                                                    color: theme.palette.secondary.main,
                                                    paddingTop: "4%",
                                                }}
                                            >
                                                &#8377; {productDetails.price}
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{display: 'flex', justifyContent: 'left', paddingTop: "4%", width: "50%"}}>
                                            <TextField
                                                id="count"
                                                label="Enter Quantity *"
                                                variant="outlined"
                                                fullWidth
                                                // value={formData.count.value}
                                                // // onChange={(event) => saveOnChange("count", event.target.value)}
                                                // // onBlur={(event) => validateAndSave("count", event.target.value)}
                                                // error={formData.count.error}
                                                // helperText={formData.count.error && formData.count.errorMessage}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{display: 'flex', justifyContent: 'left', paddingTop: "4%"}}>
                                            <Button variant="contained"
                                                    color="primary"
                                                    // onClick={() => placeOrder()}
                                            >
                                                PLACE ORDER
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    ) : null;
}

export default ProductsPage;