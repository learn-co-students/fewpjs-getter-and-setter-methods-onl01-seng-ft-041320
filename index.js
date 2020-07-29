// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
//    const pi = Math.PI
    // //Math.PI = 3.141592653589793 (((in console)))

    get diameter () {
        return this.radius * 2
    }
    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference () {
        const pi = Math.PI
        return (this.radius * 2) * pi
    }
    set circumference(circumference) {
        const pi = Math.PI
        this.radius = (circumference / pi) / 2
    }

    get area () {
        const pi = Math.PI
        return (this.radius ** 2) * pi
    }
    set area(area) {
        const pi = Math.PI
        this.radius = Math.sqrt(area / pi)
    }
    
}
