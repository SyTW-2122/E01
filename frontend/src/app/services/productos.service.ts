import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  createProduct(title: string, price: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('price', price);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(this.URL + '/editarProducto', fd);
  }

  getProducts() {
    return this.http.get<product[]>(this.URL + '/editarProducto');
  }

  getProduct(id: string) {
    return this.http.get<product>(this.URL + '/editarProducto/' + id);
  }
}
