import { Component } from '@angular/core';
import { ProductCardComponent } from '../productcard/productcard';
import { Api } from '../api';
import { ChangeDetectorRef } from '@angular/core';  

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productscomponent {

  products: any;

  constructor(private api: Api, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.api.getAllProducts().subscribe((res: any) => {
      this.products = res;
      this.cdr.detectChanges();
    })
  }
}