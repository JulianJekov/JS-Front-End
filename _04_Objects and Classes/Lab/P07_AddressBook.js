function addressBook(inut) {
    let addressbook = {};

    for (const line of inut) {
        let [name, address] = line.split(':');
        addressbook[name] = address;
    }

    let sortedNames = Object.keys(addressbook)
        .sort((a, b) => a.localeCompare(b));

    for (const key of sortedNames) {
        console.log(`${key} -> ${addressbook[key]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);