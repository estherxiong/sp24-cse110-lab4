let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 5,
    rareCars: 2
}

for(let type in statistics) {
    if (type.startsWith('r') || statistics[type] % 2 !== 0) {
        console.log(statistics[type]);
    }
}