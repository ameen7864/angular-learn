import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
url='https://jsonplaceholder.typicode.com/todos/1'
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url)
  }
}
