export default class Movie {
    id: number;
    title: string;
    director: string;
    year: number;
    price: number;

    constructor(id: number, title: string, director: string, year: number, price: number) {

        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.price = price;
      }

    getInfo(): string {
        return `${this.title} (${this.year}), directed by ${this.director}, Price: $${this.price}`;
    }
}