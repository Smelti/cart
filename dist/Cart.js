"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    ;
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    ;
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
    ;
    calculateTotalWithDiscount(discount) {
        const total = this.calculateTotal();
        return total - (total * discount / 100);
    }
    ;
}
exports.default = Cart;
;
