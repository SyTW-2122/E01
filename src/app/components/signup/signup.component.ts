import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = { 
    email: '',
    password: ''
  }

  message: string;
  messageClass: string;

  constructor(
    private Registro: RegistroService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log('Accediendo al componente de registro de usuario');
  }

  signUp() { //el subscribe es la respuesta que me va a dar el servidor
    this.Registro.signUp(this.user).subscribe(
      res => {
        console.log(res);
        this.messageClass = 'alert alert-success';
        this.message = 'Se ha registrado satisfactoriamente';
        setTimeout(() => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home/Catalogo']);
        },2000);
      },
      err => {
        //console.log('error');
        console.log(err);
        this.messageClass = 'alert alert-danger';
        this.message = 'Error de estado: ' + err.status + ': ' + err.statusText + ',  ' + err.error;
      },
    )
    return 'hola';
  }

}