class AppliancesTypescript {
        constructor(
            public totalWashingMachine: number,
            public washingMachineEfficiency: string,
            public totalFridge: number,
            public fridgeEfficiency: string,
            public totalTvs: number,
            public dailyHoursWatchingTv: number
        ) {
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
    