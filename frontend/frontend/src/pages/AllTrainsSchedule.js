import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import makeStyles from '@mui/material';
import {Grid} from '@mui/material';
import {Container} from '@mui/material';
const AllTrainsSchedule = () => {

    const navigate = useNavigate();
    const [trains, setTrains] = useState([]);

    

    useEffect(() => {

        axios.get('http://localhost:5000/api/trains')
          .then((response) => {
            setTrains(response.data.data);
            console.log(response.data.data);
          })
          .catch((error) => {
            console.error('Error fetching train data:', error);
          });

      }, []);
  return (
    <div>
        <Container sm style={{paddingTop:'5rem'}}>
            <Typography variant="h4" component="h1" align="center"  style={{ color: '#008000' }}>
                All Trains Details
            </Typography>
        <TableContainer component={Paper} style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Departure Time</TableCell>
                        <TableCell >Available</TableCell>
                        <TableCell >Sleeper</TableCell>
                        <TableCell>AC</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {trains.map((train) => (
                    <Link to={`train/${train.trainNumber}`}>
                        <TableRow
                        key={train.number}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell>{train.trainName}</TableCell>
                        <TableCell align="right">{train.trainNumber}</TableCell>
                        <TableCell align="right">{train.departureTime}</TableCell>
                        <TableCell align="right">{train.seatsAvailable}</TableCell>
                        <TableCell align="right">{train.price.sleeper}</TableCell>
                        <TableCell align="right">{train.price.AC}</TableCell>
                        </TableRow>
                    </Link>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Container>

        
    </div>
  )
}

export default AllTrainsSchedule