function solve(number) {
    if(number==1) {
        console.log("January");
    }else if (number==2){
        console.log("February");  
    }else if(number==3) {
        console.log("March");
    }else if(number==4) {
        console.log("April");
    }else if(number==5) {
        console.log("May");
    }else if(number==6) {
        console.log("June");
    }else if(number==7) {
        console.log("July");
    }else if(number==8) {
        console.log("August");
    }else if(number==9) {
        console.log("September");
    }else if(number==10) {
        console.log("October");
    }else if(number==11) {
        console.log("November");
    }else if(number==12) {
        console.log("December");
    }else{
        console.log("Error!");
    }
}

function solve(number) {

    let result;
    switch (number) {
        case 1:
            result ="January";
            break;
        case 2:
            result ="February";
            break;
        case 3:
            result = "March";
            break;
        case 4:
            result = "April";
            break;
        case 5:
            result = "May";
            break;
        case 6:
            result = "June";
            break;
        case 7:
            result = "July";
            break;
        case 8:
            result = "August";
            break;
        case 9:
            result = "September";
            break;
        case 10:
            result = "October";
            break;
        case 11:
            result = "November";
            break;
        case 12:
            result = "December";
            break;
        default:
            result = "Error!";
            break;
    }
    console.log(result);
}