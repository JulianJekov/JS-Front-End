function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector('#inputs textarea');
   const bestReastaurantP = document.querySelector('#bestRestaurant p');
   const bestWorkersP = document.querySelector('#workers p');

   function onClick() {
      let inputArr = JSON.parse(input.value);
      let restaurants = {};

      for (const line of inputArr) {
         let [restaurantName, workersArr] = line.split(' - ');
         let workers = parseWorkers(workersArr.split(', '));

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {
               workers,
               avgSalary: calcualteAverageSalary(workers),
               bestSalary: bestSalary(workers),
            }
         } else {
            restaurants[restaurantName].workers = addNewWorkers(restaurants, restaurantName, workers);
            let currentWorkers = restaurants[restaurantName].workers;
            restaurants[restaurantName].avgSalary = calcualteAverageSalary(currentWorkers);
            restaurants[restaurantName].bestSalary = bestSalary(currentWorkers);
         }
      }

      let sortedAvgSalary = Object.entries(restaurants);
      sortedAvgSalary.sort((first, second) => second[1].avgSalary - first[1].avgSalary);
      let bestRestaurant = sortedAvgSalary[0];

      bestReastaurantP.textContent =
         `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`


      let workersInfo = [];
      bestRestaurant[1].workers.sort((first, second) => second.salary - first.salary).forEach(worker => {
        workersInfo.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      });

      bestWorkersP.textContent = workersInfo.join(' ');
   }

   function addNewWorkers(restaurants, restaurantName, workers) {
      return restaurants[restaurantName].workers.concat(workers);
   }

   function parseWorkers(workersArr) {
      let workers = [];
      for (const worker of workersArr) {
         let [name, salary] = worker.split(' ');
         workers.push({ name, salary })
      }
      return workers;
   }

   function calcualteAverageSalary(workers) {
      let avgSalary = 0;
      for (const worker of workers) {
         avgSalary += Number(worker.salary);
      }
      return avgSalary / workers.length;
   }

   function bestSalary(workers) {
      let bestSalary = 0;
      for (const worker of workers) {
         if (bestSalary < worker.salary) {
            bestSalary = Number(worker.salary)
         }
      }
      return bestSalary;
   }
}

// const input = document.querySelector('#inputs>textarea');
// const bestRestaurantP = document.querySelector('#bestRestaurant>p');
// const workersP = document.querySelector('#workers>p');

// function onClick() {
//    let arr = JSON.parse(input.value);
//    let restaurants = {};

//    arr.forEach((line) => {
//       const tokens = line.split(' - ');
//       const name = tokens[0];
//       const workersArr = tokens[1].split(', ');
//       let workers = [];

//       for (const worker of workersArr) {
//          let workerTokens = worker.split(' ');
//          let workerName = workerTokens[0];
//          let salary = Number(workerTokens[1]);
//          workers.push({ name: workerName, salary: salary });
//       }

//       if (restaurants[name]) {
//          workers = workers.concat(restaurants[name].workers);
//       }

//       workers.sort((a, b) => b.salary - a.salary);
//       let bestSalary = workers[0].salary;
//       let averageSalary = workers.reduce((sumSalary, worker) => sumSalary + worker.salary, 0) / workers.length;

//       restaurants[name] = {
//          workers,
//          averageSalary,
//          bestSalary
//       };
//    });

//    let bestAverageSalary = 0;
//    let bestRestaurant = {};

//    for (const name in restaurants) {
//       let currentAverageSalary = restaurants[name].averageSalary;
//       if (currentAverageSalary > bestAverageSalary) {
//          bestAverageSalary = currentAverageSalary;
//          bestRestaurant = {name, ...restaurants[name]};
//       }
//    }
//    let workersInfo = [];
//    bestRestaurantP.textContent =
//    `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
//    bestRestaurant.workers.forEach((worker) => {
//       workersInfo.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
//    });
//    workersP.textContent = workersInfo.join(' ');
// }