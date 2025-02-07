class Rectangle{
    
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;//_ tells other developers that it is a private property.
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newheight) {
        if (newheight > 0) {
            this._height = newheight;//_ tells other developers that it is a private property.
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width.toFixed(1);
    }

    get height() {
        return this._height.toFixed(1);
    }

    get area() {
        return this._width * this._height;
    }

}

const rectangle = new Rectangle(5, 3);

console.log(rectangle.width);
console.log(rectangle.height);