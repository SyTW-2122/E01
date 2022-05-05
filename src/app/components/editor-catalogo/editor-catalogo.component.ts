import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { product } from 'src/app/interfaces/product';
//para dar informacion de la url

@Component({
  selector: 'app-editor-catalogo',
  templateUrl: './editor-catalogo.component.html',
  styleUrls: ['./editor-catalogo.component.css']
})
export class EditorCatalogoComponent implements OnInit {
  id: string;
  product_: product;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.productosService.getProduct(this.id).subscribe(
        res => {
          this.product_ = res;
        },
        err => console.log(err),
      )
    })
  }

  deleteProduct(id: string) {
    this.productosService.deleteProduct(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/home/Catalogo']);
      })
  }

  updateProduct(title: HTMLInputElement, price: HTMLInputElement, description: HTMLInputElement) {
    this.productosService.updateProduct(this.product_._id, title.value, price.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/home/Catalogo']);
      });
  }

}
