import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {
  ngOnInit(): void {
    this.loginForm=this.fromBuilder.group({ 
      'email' :['',[
        Validators.required,
        Validators.email
        ] 
      ],
      'password': ['',[
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });
  }

  loginForm: FormGroup;
  userdata: any;
  mensaje: boolean;

  constructor(private fromBuilder:FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

    saveUserdata() {
      const saveUserdata = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      };
      return saveUserdata;
    }

    isAuth() {
      return this.autService.isAutenticated();
    }

    onSubmit() {
      this.userdata = this.saveUserdata();
      this.autService.inicioSesion(this.userdata);
      setTimeout(() => {
        if (this.isAuth() === false) {
          this.mensaje=true;
        }
      }, 2000);
    }
}
