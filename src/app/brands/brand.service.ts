import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Brand } from 'src/Models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = "http://localhost:3000/brands"

  constructor(private http: HttpClient) { }


  get():Observable<Brand[]>{
    return this.http.get<Brand[]>(this.url)
  }
}
