class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    set diameter(diameter) {
        return this.radius = diameter / 2;
    }

    set circumference(circum) {
        return this.radius = circum / (2 * Math.PI);
    }

    set area(area) {
        return this.radius = Math.sqrt(area) / Math.PI;
    }
}