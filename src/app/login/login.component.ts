import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup
  public seePassword: boolean = false;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: [null],
      password: [null]
    });
  }

  onSubmit(){
    console.log(this.form);
    
  }

  handlerInputType(){
    this.seePassword = !this.seePassword;
  }

}
