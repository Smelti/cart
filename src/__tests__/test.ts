import Cart from '../Cart';
import Movie from '../Movie';


test('Cart should calculate total correctly', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'Inception', 'Christopher Nolan', 2010, 10);
  const movie2 = new Movie(2, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999, 12);

  cart.addItem(movie1);
  cart.addItem(movie2);

  expect(cart.calculateTotal()).toBe(22);
});

test('Cart should apply discount correctly', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'Inception', 'Christopher Nolan', 2010, 10);
  const movie2 = new Movie(2, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999, 12);

  cart.addItem(movie1);
  cart.addItem(movie2);

  expect(cart.calculateTotalWithDiscount(10)).toBe(19.8);
});

test('Cart should remove item by id', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'Inception', 'Christopher Nolan', 2010, 10);
  const movie2 = new Movie(2, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999, 12);

  cart.addItem(movie1);
  cart.addItem(movie2);
  cart.removeItem(1);

  expect(cart.calculateTotal()).toBe(12);
});