import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  selectedTab: string = 'description';

  constructor() {
  }

  ngOnInit(): void {
  }

  // Function to switch tabs based on the selected tab name
  switchTab(tabName: string) {
    this.selectedTab = tabName;
  }

  // Function to dynamically update quantity (for + / - buttons)
  quantity: number = 1;

  incrementQuantity() {
    if (this.quantity < 10) { // Set a maximum limit if needed
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Function for adding a product to cart
  addToCart() {
    // Logic for adding the product to cart
    console.log('Product added to cart with quantity:', this.quantity);
  }

  // Function for adding a product to wishlist
  addToWishlist() {
    // Logic for adding the product to wishlist
    console.log('Product added to wishlist');
  }

}
