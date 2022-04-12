import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.component.html',
  styleUrls: ['./misproductos.component.css']
})
export class MisproductosComponent implements OnInit {

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
