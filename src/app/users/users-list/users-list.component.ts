import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  hi(name: string): void {
    alert(`Hi ${name}`);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log({ data });

      this.users = data;
    });
  }
}
