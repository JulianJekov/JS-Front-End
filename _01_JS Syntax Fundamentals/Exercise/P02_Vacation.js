function vacationPrice(groupOfPeople, type, day) {
    let price = 0;
    let totalPrice = 0;
    
    if (type === "Students") {
        if (day === "Friday") {
            price = 8.45;
        } else if (day === "Saturday") {
            price = 9.80;
        } else {
            price = 10.46;
        }
    } else if (type === "Business") {
        if (day === "Friday") {
            price = 10.90;
        } else if (day === "Saturday") {
            price = 15.60;
        } else {
            price = 16;
        }
    } else {
        if (day === "Friday") {
            price = 15;
        } else if (day === "Saturday") {
            price = 20;
        } else {
            price = 22.50;
        }
    }
    totalPrice = groupOfPeople * price;

    if (type === "Students" && groupOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (type === "Business" && groupOfPeople >= 100) {
        totalPrice -= price * 10;
    } else if (type === "Regular" && (groupOfPeople >= 10 && groupOfPeople <= 20)) {
        totalPrice *= 0.95;
    }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacationPrice(40,

    "Regular",
    
    "Saturday")