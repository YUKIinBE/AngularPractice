import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  private readonly _userEndpoint: string = 'https://jsonplaceholder.typicode.com/users';
  // http: HttpClient = inject(HttpClient);
  constructor(private http: HttpClient) { }

  get(): Observable<User[]>{
    return this.http.get<User[]>(this._userEndpoint);
  }
}
