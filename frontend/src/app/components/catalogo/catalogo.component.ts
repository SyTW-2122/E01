import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  products = [];

  constructor(private productosService: ProductosService,
    private router: Router) { }

  ngOnInit(): void {
    this.productosService.getProducts().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },  
      err => console.log(err),
    );
  }

  selectedCard(id: string) {
    this.productosService.getProduct(id).subscribe({
      next: (res) => console.log(res),
      error: (e) => console.error(e),
      
    });
    console.log(id);
    // this.router.navigate(['/photos', id]);
  }

}
