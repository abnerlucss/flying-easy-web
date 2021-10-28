import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  public seePassword: boolean = false;


  constructor(private router: Router, private formBuilder: FormBuilder, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    let loginData = {
      email: this.loginForm.get('email'),
      password: this.loginForm.get('password')
    }
    if (loginData.email.valid && loginData.password.valid) {
      this.dashboardService.login(loginData)
    }
    else {
      alert("Invalido")

    }

  }

  handlerInputType() {
    this.seePassword = !this.seePassword;
  }


}
