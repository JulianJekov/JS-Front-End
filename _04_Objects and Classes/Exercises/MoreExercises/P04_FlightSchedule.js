function flightSchedule(input) {
    let sectorFlights = input[0];
    let newFlightStatus = input[1];
    let status = input[2].toString();
    let flights = {};

    for (const flight of sectorFlights) {
        let flightStatus = 'Ready to fly';
        let [sector, destination] = flight.split(' ');
        flights[sector] = {
            Destination: destination,
            Status: flightStatus,
        }
    }

    for (const newStatus of newFlightStatus) {
        let [sector, status] = newStatus.split(' ');
        if(flights.hasOwnProperty(sector)) {
            flights[sector].Status = status;
        }
    }

    for (const flight in flights) {
       if(flights[flight].Status === status){
        console.log(flights[flight]);
       }
    }
}
    // let flights = input[0];
    // let newStatuses = input[1];
    // let statusToPrint = input[2];

    // let flightsBySector = [];
    // let cancelledFlights = [];
    // let readyToFly = [];

    // for (const line of flights) {
    //     let [Sector, Destination] = line.split(' ');
    //     flightsBySector.push({ Sector, Destination })

    // }

    // for (const line of newStatuses) {
    //     let sector = line.split(' ')[0];

    //     let flightToCancel = flightsBySector.find((f) => f.Sector === sector);

    //     if (flightToCancel) {
    //         flightsBySector.splice(flightsBySector.indexOf(flightToCancel), 1);
    //         cancelledFlights.push({ Destination: flightToCancel.Destination, Status: 'Cancelled' });
    //     }
    // }

    // for (const line of flightsBySector) {
    //     readyToFly.push({ Destination: line.Destination, Status: 'Ready to fly' });
    // }

    // cancelledFlights.sort((a, b) => a.Destination.localeCompare(b.Destination))

    // if (statusToPrint[0] === 'Cancelled') {

    //     for (const obj of cancelledFlights) {
    //         console.log(obj);
    //     }

    // }else {
    //     for (const obj of readyToFly) {
    //         console.log(obj);
    //     }
    // }


flightSchedule([

    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    [
        'Cancelled'
    ]
]
);