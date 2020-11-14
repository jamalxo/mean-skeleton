import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user.model";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import * as moment from "moment";
import {tap} from "rxjs/operators";

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUser(user: User): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/me`, options);
  }

  public userSignUp(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/user/signup`, user, options)
      .pipe(tap(res => {
        this.userLogIn(user);
      }))
  }

  public userLogIn(user: any): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/user/login`, user, options)
      .pipe(tap(res => {
        localStorage.setItem('access_token', res.token);
      }));
  }

  public logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
