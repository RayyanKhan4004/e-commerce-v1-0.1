import headphones from '../data/headphones.jpg'
import shoes from '../data/shoes.jpg'
import Smartwatch from '../data/smartwatch.png'
import backpack from './backpack.jpg'

import coffeemacker from './cofeemacker.jpg'
const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-fidelity sound with comfortable fit",
      price: 79.99,
      imageUrl: headphones, // Replace with your image URL
      category: "electronics",
    },
    {
      id: 2,
      name: "Running Shoes",
      description: "Lightweight and breathable for your next run",
      price: 99.95,
      imageUrl: shoes, // Replace with your image URL
      category: "sports",
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Track your fitness and stay connected",
      price: 249.00,
      imageUrl: Smartwatch, // Replace with your image URL
      category: "electronics",
    },
    {
      id: 4,
      name: "Coffee Maker",
      description: "Brew your favorite cup in minutes",
      price: 39.99,
      imageUrl: coffeemacker, // Replace with your image URL
      category: "kitchen",
    },
    {
      id: 5,
      name: "Laptop Backpack",
      description: "Durable and stylish for everyday use",
      price: 44.50,
      imageUrl: backpack, // Replace with your image URL
      category: "accessories",
    },
  ];
  export default products