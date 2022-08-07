import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" className="bg-dark text-white"  xs={12}>
            <Typography variant='h3' >
                Dio Shopping
            </Typography>
            <Link to="/">
                <Button color="primary"><span className="text-white">Home</span></Button>
            </Link>
            <Link to="/contato">
                <Button color="primary"><span className="text-white">Contato</span></Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
