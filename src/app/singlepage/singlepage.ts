import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Api } from '../api';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-singlepage',
  imports: [],
  templateUrl: './singlepage.html',
  styleUrl: './singlepage.css',
})
export class Singlepage {
  singledata: any;
  productid: any;

  constructor( private api: Api, private cdr: ChangeDetectorRef, private ar: ActivatedRoute) { }

  ngOnInit() {
   this.productid = this.ar.snapshot.paramMap.get('id');
    this.api.getSingleProduct(this.productid).subscribe((res: any) => {
      this.singledata = res;
      this.cdr.detectChanges();
    })
  }
}
