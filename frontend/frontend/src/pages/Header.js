import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import {WiTrain} from 'react-icons/wi'

import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
        <AppBar position="static" style={{ backgroundImage:'url("headerbackground.jpeg")' }}>
            <Toolbar>
                <Link to={"/"} style={{textDecoration:'none'}}>
                    <WiTrain size={40} style={{color:'black'}}/>
                </Link>
                <Link to={"/"} style={{textDecoration:'none'}}>
                    <Typography variant="h6"  to="/" style={{ textDecoration: 'none', color: 'Black',fontWeight:'bold', marginLeft: '10px' }}>
                        Easy Railway
                </Typography>
                </Link>
        
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header