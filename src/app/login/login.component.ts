import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  public seePassword: boolean = false;
  public isInvalidEmail: boolean;
  public isInvalidPassword: boolean;


  constructor(private toast: ToastrService, private router: Router, private formBuilder: FormBuilder, private dashboardService: DashboardService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });


  }

  onSubmit() {
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    

    let loginData = {
      email: this.loginForm.get('email'),
      password: this.loginForm.get('password')
    }
    if (loginData.email.valid && loginData.password.valid) {
      if (this.dashboardService.login(loginData)) {
        this.router.navigate(['home'])
      }
      else {
        this.toast.error('Email e/ou senha inválidos', 'Erro ao logar', {
          closeButton: true,
        })
      }
    }
    else {
      console.log(loginData.email)
      
      if (!loginData.email.valid) {
        this.isInvalidEmail = true;
        setTimeout(() => {
          this.isInvalidEmail = false;
        }, 3000)
      }
      else {
        this.isInvalidPassword = true;
        setTimeout(() => {
          this.isInvalidPassword = false;
        }, 3000)
      }
    }

  }

  handlerInputType() {
    this.seePassword = !this.seePassword;
  }


}
