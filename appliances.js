"use strict";
class AppliancesTypescript {
    constructor(totalWashingMachine, washingMachineEfficiency, totalFridge, fridgeEfficiency, totalTvs, dailyHoursWatchingTv) {
        this.totalWashingMachine = totalWashingMachine;
        this.washingMachineEfficiency = washingMachineEfficiency;
        this.totalFridge = totalFridge;
        this.fridgeEfficiency = fridgeEfficiency;
        this.totalTvs = totalTvs;
        this.dailyHoursWatchingTv = dailyHoursWatchingTv;
        if (totalWashingMachine < 0) {
            throw new Error("Invalid argument");
        }
        if (totalFridge < 0) {
            throw new Error("Invalid argument");
        }
        if (totalTvs < 0) {
            throw new Error("Invalid argument");
        }
    }
}
