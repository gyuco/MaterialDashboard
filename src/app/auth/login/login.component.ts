import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userAuthError: string | undefined;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private spinner: SpinnerService
  ) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {

    this.spinner.spin$.next(true);

    this.auth.signIn(this.username!.value, this.password!.value).subscribe( userAuth => {
      
      if(userAuth.status) {
        localStorage.setItem('api_token', userAuth.api_token);
        localStorage.setItem('userLogged', JSON.stringify({username: userAuth.data.username, email: userAuth.data.email}));
        this.router.navigate(['pages', 'dashboard']);
      }
      this.spinner.spin$.next(false);
    }, error => {
      console.log(error);
      this.spinner.spin$.next(false);
      this.userAuthError = 'login error';
    });

  }

}
