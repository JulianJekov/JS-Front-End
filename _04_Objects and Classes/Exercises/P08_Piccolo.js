function parking(input) {
    let parkingLot = [];

    for (const line of input) {
        let [direction, carNumber] = line.split(', ');

        if (direction === 'IN' && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
        } else if (direction === 'OUT' && parkingLot.includes(carNumber)) {
            // parkingLot = parkingLot.filter(element => element != carNumber)
            let index = parkingLot.indexOf(carNumber);
            parkingLot.splice(index, 1);
        }
    }

    if (!parkingLot.length) {
        console.log(`Parking Lot is Empty`);
    } else {
        parkingLot.sort().forEach((e) => console.log(e));
    }


}

parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

);