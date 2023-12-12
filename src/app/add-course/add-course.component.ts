import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  userform = new FormGroup({ 
    courseid: new FormControl(),
    coursename: new FormControl(),
  });

  submitform() {
    console.log(this.userform.value);
  }
}
