import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = "https://jsonplaceholder.typicode.com/users";
  url1 = "http://localhost:3000/courses";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private client: HttpClient) { }

  GetUsers(): any{
    return this.client.get(this.url); //always return 'Observable' datatype
  }

  GetCourses() {
    return this.client.get(this.url1);
  }
  
  AddCourse(course: any) {
    return this.client.post(
      this.url1,
      JSON.stringify(course),
      this.httpOptions
    );
  }
}
