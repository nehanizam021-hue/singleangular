import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { About} from './about/about';
import { Productscomponent} from './products/products';
import { ContactComponent } from './contact/contact';
import { Singlepage } from './singlepage/singlepage';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'products',
    component: Productscomponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: 'singlepage/:id',
    component: Singlepage
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];