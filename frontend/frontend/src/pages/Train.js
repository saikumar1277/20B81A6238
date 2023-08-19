import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import {BsCurrencyRupee} from 'react-icons/bs'
const Train = () => {

    const { trainId } = useParams();
    const [train, setTrain] = useState({});

    
    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/singleTrain/train/trains/${trainId}`)
          .then((response) => {
            setTrain(response.data.data);
          })
          .catch((error) => {
            console.error('Error fetching train data:', error);
          });
      }, [trainId]);
    return (
    
    <div>
        {train ? (

            <Container sx style={{maxWidth:'440px',backgroundColor:'white',boxShadow:'0 14px 28px ',borderRadius:'1rem'}} >
                
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Train Name: {train.trainName}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Train Number: {train.trainNumber}
                        </Typography>
                        <Typography variant="body1" style={{paddingTop:'1rem'}}>
                            Departure Time: 
                            {/* {`${train.departureTime.Hours}:${train.departureTime.Minutes} AM`} */}
                        </Typography>
                        <Typography variant="body1" style={{color:'red'}}>
                            Delay: 
                            {/* {train.delayedBy}  */}
                            minutes</Typography>

                            <Typography variant="h6" component="h2" style={{paddingTop:'1rem'}}>
                            Availability
                            </Typography>
                            <Typography variant="body1">Sleeper Seats: 
                            {/* {train.seatsAvailable.sleeper} */}
                            </Typography>
                            <Typography variant="body1">AC Seats: 
                            {/* {train.seatsAvailable.AC} */}
                            </Typography>
                            <Typography variant="h6" component="h2" style={{paddingTop:'1rem'}}>
                            Price Details
                            </Typography>
                            <Typography variant="body1">Sleeper: <BsCurrencyRupee/> 
                            {/* {train.price.sleeper} */}
                            </Typography>
                            <Typography variant="body1">AC: <BsCurrencyRupee/>
                            {/* {train.price.AC} */}
                            </Typography>
                        
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                    <Link to="/">
                    <Button variant="outlined" style={{borderRadius:'1rem',paddingLeft:'1rem'}}>
                        Back
                    </Button></Link>
                    <Link to="/">
                    <Button variant="contained" color="success" style={{borderRadius:'1rem',paddingLeft:'1rem'}}>
                        Book
                    </Button></Link>
                </div>
            </Container>):(
                <h1></h1>
            )}
    </div>
  )
}

export default Train