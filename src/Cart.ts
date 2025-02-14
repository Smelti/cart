import Movie from "./Movie";

export default class Cart {
    items: Movie[] = [];

    addItem(item: Movie): void {
        this.items.push(item);
    };

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    };

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    };

    calculateTotalWithDiscount(discount: number):number {
        const total = this.calculateTotal();
        return total - (total * discount / 100);
    };
};