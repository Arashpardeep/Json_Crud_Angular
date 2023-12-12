import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-showcourses',
  templateUrl: './showcourses.component.html',
  styleUrls: ['./showcourses.component.css'],
})
export class ShowcoursesComponent {
  courses!: any[];
  constructor(private service: CrudService) {
    service.GetCourses().subscribe((x: any) => {
      console.log(x);
      this.courses = x;
    });
  }
}
