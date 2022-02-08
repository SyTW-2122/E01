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

  constructor(
    private registro: RegistroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.registro.signIn(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/misproductos'])
      },
      err => console.log(err)
    )
    //console.log(this.user);
  }

}
