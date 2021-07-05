import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

export interface loginResponse {
  status: boolean,
  data: any,
  message: string,
  api_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  header: any;
  constructor(
      private http: HttpClient,
      private router: Router
  ) {
      this.header = {
          headers: new HttpHeaders()
              .set('Content-Type', 'text/plain')
      };

  }

  isAuthenticated(): Observable<boolean> {
    const logged = localStorage.getItem('api_token');
    if(logged) {
      return of(true);
    } else {
      return of(false);
    }
    
  }

  signIn(email: string, password: string): Observable<loginResponse> {
    const url = environment.api_url + 'login';
    return <Observable<loginResponse>> <unknown>this.http.post(url, { email: email, password: password }, this.header);
  }

  async signOut() {
    try {
      localStorage.removeItem('api_token');
      this.router.navigate(['auth', 'login']);
      return true;
    } catch (error) {
      console.log('Sign out failed', error);
      return false;
    }
  }

}
