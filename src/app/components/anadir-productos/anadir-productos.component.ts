import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ProductosService } from '../../services/productos.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-anadir-productos',
  templateUrl: './anadir-productos.component.html',
  styleUrls: ['./anadir-productos.component.css']
})
export class AnadirProductosComponent implements OnInit {

  productoSelected: string | ArrayBuffer;
  file: File

  constructor(private misprods: ProductosService, private router: Router) { }

  ngOnInit(): void {
    console.log('Accediendo a la página añadir un producto');
  }

  onProductoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.productoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadProducto(title: HTMLInputElement, price: HTMLInputElement, description: HTMLTextAreaElement) {
    console.log(title.value, price.value, description.value);
    this.misprods.createProduct(title.value, price.value, description.value, this.file).subscribe(res => console.log(res),
    err => console.log(err));
    this.router.navigate(['/home/Catalogo']);
  }

}
