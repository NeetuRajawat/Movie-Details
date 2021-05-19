import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl  } from '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  'src/app/user';
import { AuthService } from  'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router,private formBuilder :FormBuilder) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
      })
  }
  isSubmitted  =  false;
  ngOnInit(): void {
  
  
  }
  get formControls() { return this.loginForm.controls; }
  login(){
    console.log(this.loginForm);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }else {
      if(this.loginForm.value.email == "admin" && this.loginForm.value.password == "admin"){
        this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/home');
      }else if(this.loginForm.value.email != "" && this.loginForm.value.password != ""){
        this.loginForm.controls['email'].setValue(''); 
        this.loginForm.controls['password'].setValue(''); 
        this.router.navigateByUrl('/invalid');
      }else{
        this.loginForm.controls['email'].setValue(''); 
        this.loginForm.controls['password'].setValue(''); 
      }
    
    }
    
  }
}
