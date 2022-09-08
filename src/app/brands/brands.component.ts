import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/Models/brand';
import { BrandService } from './brand.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  
  brands:Brand[] = [];
  curso = new Brand();

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

    getBrands():void{
      this.brandService.get().subscribe(
        (res:Brand[]) =>{
          this.brands = res;
        }
      )
    }

  }

