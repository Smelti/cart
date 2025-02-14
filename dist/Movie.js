"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(id, title, director, year, price) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.price = price;
    }
    getInfo() {
        return `${this.title} (${this.year}), directed by ${this.director}, Price: $${this.price}`;
    }
}
exports.default = Movie;
