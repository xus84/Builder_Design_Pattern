interface Appliance {
        totalWashingMachine: number,
        washingMachineEfficiency: string,
        totalFridge: number,
        fridgeEfficiency: string,
        totalTvs: number,
        dailyHoursWatchingTv: number
      }
      
      const createAppliance = ():Appliance => {
          return {
              totalWashingMachine: 0,
              washingMachineEfficiency: '',
              totalFridge: 0,
              fridgeEfficiency: '',
              totalTvs: 0,
              dailyHoursWatchingTv: 0
          }
      }
      
      const setTotalWashingMachine = (totalWashingMachine: number) => (appliance:Appliance) :Appliance => {
          return {...appliance, totalWashingMachine}
      }
      const setWashingMachineEfficiency = (washingMachineEfficiency: string) => (appliance:Appliance) :Appliance => {
          return {...appliance, washingMachineEfficiency}
      }
      const setTotalFridge = (totalFridge: number) => (appliance:Appliance) :Appliance => {
          return {...appliance, totalFridge}
      }
      const setFridgeEfficiency = (fridgeEfficiency: string) => (appliance:Appliance) :Appliance => {
          return {...appliance, fridgeEfficiency}
      }
      const setTotalTvs = (totalTvs: number) => (appliance:Appliance) :Appliance => {
          return {...appliance, totalTvs}
      }
      const setDailyHoursWatchingTv = (dailyHoursWatchingTv: number) => (appliance:Appliance) :Appliance => {
          return {...appliance, dailyHoursWatchingTv}
      }
      
      let myAppliance = createAppliance();
      myAppliance = setTotalWashingMachine(2)(myAppliance);
      myAppliance = setWashingMachineEfficiency("High Efficiency")(myAppliance);
      myAppliance = setTotalFridge(1)(myAppliance);
      myAppliance = setFridgeEfficiency("Energy Star")(myAppliance);
      myAppliance = setTotalTvs(3)(myAppliance);
      myAppliance = setDailyHoursWatchingTv(4)(myAppliance);
      console.log(myAppliance);
      