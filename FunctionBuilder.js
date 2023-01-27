"use strict";
const createAppliance = () => {
    return {
        totalWashingMachine: 0,
        washingMachineEfficiency: '',
        totalFridge: 0,
        fridgeEfficiency: '',
        totalTvs: 0,
        dailyHoursWatchingTv: 0
    };
};
const setTotalWashingMachine = (totalWashingMachine) => (appliance) => {
    return Object.assign(Object.assign({}, appliance), { totalWashingMachine });
};
const setWashingMachineEfficiency = (washingMachineEfficiency) => (appliance) => {
    return Object.assign(Object.assign({}, appliance), { washingMachineEfficiency });
};
const setTotalFridge = (totalFridge) => (appliance) => {
    return Object.assign(Object.assign({}, appliance), { totalFridge });
};
const setFridgeEfficiency = (fridgeEfficiency) => (appliance) => {
    return Object.assign(Object.assign({}, appliance), { fridgeEfficiency });
};
const setTotalTvs = (totalTvs) => (appliance) => {
    return Object.assign(Object.assign({}, appliance), { totalTvs });
};
const setDailyHoursWatchingTv = (dailyHoursWatchingTv) => (appliance) => {
    return Object.assign(Object.assign({}, appliance), { dailyHoursWatchingTv });
};
let myAppliance = createAppliance();
myAppliance = setTotalWashingMachine(2)(myAppliance);
myAppliance = setWashingMachineEfficiency("High Efficiency")(myAppliance);
myAppliance = setTotalFridge(1)(myAppliance);
myAppliance = setFridgeEfficiency("Energy Star")(myAppliance);
myAppliance = setTotalTvs(3)(myAppliance);
myAppliance = setDailyHoursWatchingTv(4)(myAppliance);
console.log(myAppliance);
