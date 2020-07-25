class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set diameter(diameter) {
        this.radius = diameter/2
        return diameter
    }

    set circumference(circumference) {
        this.diameter = circumference/Math.PI
        return circumference
    }

    set area(area) {
        this.radius = Math.sqrt(area/Math.PI)
        return are
    }
}