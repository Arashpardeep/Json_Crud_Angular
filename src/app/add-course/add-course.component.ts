import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  userform = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private service: CrudService) {}

  submitform() {
    console.log('Form submitted:', this.userform.value);
    this.service.AddCourse(this.userform.value).subscribe();
  }
}
