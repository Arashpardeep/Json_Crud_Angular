import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = "https://jsonplaceholder.typicode.com/users";
  url1 = "http://localhost:3000/courses";
  constructor(private client: HttpClient) { }

  GetUsers(): any{
    return this.client.get(this.url); //always return 'Observable' datatype
  }

  GetCourses():any{
    return this.client.get(this.url1);
  }
}
