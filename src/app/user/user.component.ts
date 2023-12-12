import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users!: any[];
  constructor(private service: CrudService) {
    service.GetUsers().subscribe((x:any) => {
      console.log(x);
      this.users = x;
    });
  }
}
