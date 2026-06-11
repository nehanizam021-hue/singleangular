import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './productcard.html',
  imports: [RouterLink]
})
export class ProductCardComponent {
  @Input() product: any;
}