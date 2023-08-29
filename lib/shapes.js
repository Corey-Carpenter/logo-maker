class Shape {
    constructor() {
        this.color=""
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        const radius = 60;
        return `<circle cx="150" cy="100" r="${radius}" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        const halfSideLength = 60;
        const height = Math.sqrt(3) / 2 * (2 * halfSideLength);
        return `
            <polygon points="150,${100 - halfSideLength} ${90},${100 + height / 2} ${210},${100 + height / 2}" 
                     fill="${this.color}" />
        `
    }
}

module.exports = {Circle, Triangle, Square}
