import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component {
  
  public products = [


    { id: 1, name: 'Hydra. Chicken Biryani', price: 140, image: 'https://th.bing.com/th/id/OIP.er1Gr9IUMiCMtFeZdSHdAAHaE8?w=281&h=187&c=7&r=0&o=5&pid=1.7', quantity: 0 },
    { id: 2, name: 'Mutton Biryani', price: 180, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbvJe_nDKdqBYTOsgM4H-FQxehtFfmtRSVQ&usqp=CAU', quantity: 0 },
    { id: 3, name: 'Samosa', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvcZ37_4gsmQDxz7fRks_j9Fy_nt19gZEysIYsSw7YUAqFAUzag1Ga9aLLB_a5K0wHYA&usqp=CAU', quantity: 0 },
    { id: 4, name: 'Panir Biryani', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Pgeaf5WLPc-KFECNoM9J28V-m0fEaujDg&usqp=CAU', quantity: 0 },
    { id: 5, name: 'French Fries', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs03Ygukyws4ZbNeg5MF5imFrJAnd0FBKMbQ&usqp=CAU', quantity: 0 },
    { id: 6, name: 'Momo', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBinlyLlcwAlv0v5KbEHIoxe6wEZgelBTZig&usqp=CAU', quantity: 0 },
    { id: 7, name: 'Masala Dosha', price: 65 , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6CpAzIhrxgWi6MPSyy7V8F_PAxwRy8JPng&usqp=CAU', quantity: 0 },
    { id: 8, name: 'Pizza', price: 250, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FfTm2jU8ZoQbG6bQDii03r5uQtRkwlLV3w&usqp=CAU', quantity: 0 },
    { id: 9, name: 'Litti', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwbOJHhJ15KHU9qkDi5lXGoAI2lUm98iYZw&usqp=CAU', quantity: 0 }
    // { id: 10, name: 'Puri Subji', price: 99.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirVK26QS4dMT5Z9h-wZgjRUuBYnc9u4yoVA&usqp=CAU', quantity: 0},
  ];

  addToCart(id: number) {
    for (let product of this.products) {
      if (id === product.id) { product.quantity = product.quantity + 1 }
    }
  }
  removeFromCart(id: number) {
    for (let product of this.products) {
      if (id === product.id ) {
        product.quantity = product.quantity - 1
      }
    }
  }

  totalCost : number= 0;
  calculate(){
     let price=0;
     for(let product of this.products)
     {price= price + product.price*product.quantity}
     this.totalCost=price
    }


    generateBill() {
      const doc = new jsPDF();
      doc.text("Your bill:", 10, 10);
      doc.setFontSize(12);
      let y = 20;
      this.products.forEach(product => {
        doc.text(product.name + " - $" + product.price + " x " + product.quantity, 10, y);
        y += 10;
      });
      doc.text("Total cost: $" + this.totalCost, 10, y+10);
      doc.save("bill.pdf");
    }
    

}
