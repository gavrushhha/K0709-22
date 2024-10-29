class Passenger {
    constructor(id, destination) {
        this.id = id;
        this.destination = destination;
    }
}

class Bus {
    constructor(id, route, capacity, speed) {
        this.id = id;
        this.route = route;
        this.currentStopIndex = 0;
        this.passengers = [];
        this.capacity = capacity;
        this.speed = speed;
    }

    move() {
        this.currentStopIndex = (this.currentStopIndex + 1) % this.route.stops.length;
    }

    pickUpPassengers(stop) {
        while (stop.passengers.length > 0 && this.passengers.length < this.capacity) {
            let passenger = stop.passengers.shift();
            if (this.route.stops.includes(passenger.destination)) {
                this.passengers.push(passenger);
            }
        }
    }

    dropOffPassengers(stop) {
        this.passengers = this.passengers.filter(p => p.destination !== stop.name);
    }

    status() {
        return `Bus ${this.id} at stop ${this.route.stops[this.currentStopIndex]} with ${this.passengers.length} passengers.`;
    }
}

class Stop {
    constructor(name) {
        this.name = name;
        this.passengers = [];
    }

    addPassenger(passenger) {
        this.passengers.push(passenger);
    }

    status() {
        return `Stop ${this.name} has ${this.passengers.length} passengers waiting.`;
    }
}

class Route {
    constructor(stops) {
        this.stops = stops;
    }
}

class Simulation {
    constructor(routes, buses, stops) {
        this.routes = routes;
        this.buses = buses;
        this.stops = stops;
        this.time = 0;
    }

    run() {
        this.time++;
        console.log(`Time: ${this.time} minute`);

        this.buses.forEach(bus => {
            let currentStop = this.stops[bus.route.stops[bus.currentStopIndex]];
            bus.dropOffPassengers(currentStop);
            bus.pickUpPassengers(currentStop);
            console.log(bus.status());
            bus.move();
        });

        this.stops.forEach(stop => {
            console.log(stop.status());
        });

        console.log("--------");
    }
}


let stops = {
    "Stop 1": new Stop("Stop 1"),
    "Stop 2": new Stop("Stop 2"),
    "Stop 3": new Stop("Stop 3"),
    "Stop 4": new Stop("Stop 4")
};


let route1 = new Route(["Stop 1", "Stop 2", "Stop 3", "Stop 4"]);


let bus1 = new Bus(1, route1, 5, 2);


let simulation = new Simulation([route1], [bus1], stops);


stops["Stop 1"].addPassenger(new Passenger(1, "Stop 3"));
stops["Stop 2"].addPassenger(new Passenger(2, "Stop 4"));


for (let i = 0; i < 10; i++) {
    simulation.run();
}
