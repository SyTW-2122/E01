import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-anadir-productos',
  templateUrl: './anadir-productos.component.html',
  styleUrls: ['./anadir-productos.component.css']
})
export class AnadirProductosComponent implements OnInit {

  constructor(private misprods: ProductosService) { }

  ngOnInit(): void {
    this.getproductos();
  }

  getproductos() {
    this.misprods.fetchproductos().subscribe(
      res => {
        console.log(res.body);
      },
      err => {
        console.log("Error en mis productos");
      }
    )
  }

}
