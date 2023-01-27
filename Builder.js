class Appliances {
    constructor(totalWashingMachine, washingMachineEfficiency, totalFridge, fridgeEfficiency, totalTvs, dailyHoursWatchingTv) {
        if (totalWashingMachine < 0) {
            throw new Error("Invalid argument");
        }
        this.totalWashingMachine = totalWashingMachine;
        this.washingMachineEfficiency = washingMachineEfficiency;

        if (totalFridge < 0) {
            throw new Error("Invalid argument");
        }
        this.totalFridge = totalFridge;
        this.fridgeEfficiency = fridgeEfficiency;

        if (totalTvs < 0) {
            throw new Error("Invalid argument");
        }
        this.totalTvs = totalTvs;
        this.dailyHoursWatchingTv = dailyHoursWatchingTv;
    }

    totalWashingMachine() {
        return this.totalWashingMachine;
    }

    washingMachineEfficiency() {
        return this.washingMachineEfficiency;
    }

    totalFridge() {
        return this.totalFridge;
    }

    fridgeEfficiency() {
        return this.fridgeEfficiency;
    }

    totalTvs() {
        return this.totalTvs;
    }

    dailyHoursWatchingTv() {
        return this.dailyHoursWatchingTv;
    }
}
