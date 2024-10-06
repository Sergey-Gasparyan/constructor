function Car (model , milesPerGallon ) {
    this.tank = 0 
    this.odometr = 0
    this.fill = function (gallons) {
        this.tank += gallons
    }
    this.drive = function (distance) {

        if((this.tank * milesPerGallon) >= distance ) this.tank -= distance / milesPerGallon
            else {
                this.odometr += this.tank * milesPerGallon
                this.tank = 0
            }

        if(this.tank === 0) {
            return ( `I ran out fuel at ${this.odometr}`)
        }
        else {
            this.odometr += distance
           }
        }
    }
