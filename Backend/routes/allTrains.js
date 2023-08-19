const express = require("express");
const router = express.Router();

const { getToken } = require("../helper/helper");

function filterAllTrains(trainDataSet) {
  const currentTime = new Date();
  const twelveHoursWindow = new Date(
    currentTime.getTime() + 12 * 60 * 60 * 1000
  );
  const ignoreTrainsWindow = currentTime.getTime() + 30 * 60 * 1000;

  const sortedTrainsData = [];

  for (const train of trainDataSet) {
    const departureTime = new Date();
    departureTime.setHours(train.departureTime.Hours);
    departureTime.setMinutes(train.departureTime.Minutes + train.delayedBy);
    departureTime.setSeconds(train.departureTime.Seconds);

    if (
      departureTime >= ignoreTrainsWindow &&
      departureTime <= twelveHoursWindow
    ) {
      const availableSeats =
        train.seatsAvailable.sleeper + train.seatsAvailable.AC;
      const ticketPrices = train.price;

      sortedTrainsData.push({
        trainName: train.trainName,
        trainNumber: train.trainNumber,
        departureTime: departureTime,
        seatsAvailable: availableSeats,
        price: ticketPrices,
      });
    }
  }

  sortedTrainsData.sort((train1, train2) => {
    const priceOfTrain1 = train1.price.sleeper + train1.price.AC;
    const priceOfTrain2 = train2.price.sleeper + train2.price.AC;
    if (priceOfTrain1 !== priceOfTrain2) return priceOfTrain1 - priceOfTrain2;

    const seatsOfTrain1 = train1.seatsAvailable;
    const seatsOfTrain2 = train2.seatsAvailable;
    // const totalSeatsA = seatsA.sleeper + seatsA.AC;
    // const totalSeatsB = seatsB.sleeper + seatsB.AC;
    if (seatsOfTrain1 !== seatsOfTrain2) return seatsOfTrain2 - seatsOfTrain1;

    return train2.departureTime - train1.departureTime;
  });

  return sortedTrainsData;
}

//@desc  : to get all trains
//route  : /api/v1/trains

router.get("/trains", async function (req, res) {
  try {
    const token_data = await getToken();
    const res_data = await fetch("http://20.244.56.144/train/trains", {
      method: "GET",
      headers: { Authorization: `Bearer ${token_data.access_token}` },
    });
    const data = await res_data.json();
    const sortedTrains = filterAllTrains(data);
    res.send({ data: sortedTrains });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Error", success: false });
  }
});

module.exports = router;
