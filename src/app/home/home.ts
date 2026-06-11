import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Accordion } from '../accordion/accordion';
import { RouterLink } from '@angular/router';

@Component({
  selector:'app-home',
  standalone:true,
  imports:[
    Carousel,
    Accordion,
    RouterLink
  ],
  templateUrl:'./home.html'
})
export class HomeComponent {}