import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  message: string;
  messageClass: string;

  constructor(
    private registro: RegistroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Accediendo al componente de inicio de sesión');
  }

  signIn() {
    this.registro.signIn(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.messageClass = 'alert alert-success';
        this.message = 'Ha iniciado sesión satisfactoriamente';
        setTimeout(() => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home/Catalogo']);
        },2000);
      },
      err => {
        console.log(err);
        this.messageClass = 'alert alert-danger';
        this.message = 'Error de estado: ' + err.status + ': ' + err.statusText + ',  ' + err.error;
      }
    )
    //console.log(this.user);
  }

}
