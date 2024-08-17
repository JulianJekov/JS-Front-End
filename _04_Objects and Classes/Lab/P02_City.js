function cityProperties(city) {

    let entries = Object.entries(city);

    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
    
}


// for (const key in city) {
//     console.log(`${key} -> ${city[key]}`);
//   }

cityProperties({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)

