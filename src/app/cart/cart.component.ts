import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  stock;
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {}

  //returning data from server
  getInStock() {
    this.inventoryService.getItems().subscribe((res) => {
      this.stock = res;
      console.log('Item Data', this.stock);
    });
  }
}
