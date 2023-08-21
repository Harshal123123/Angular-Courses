import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/Services/logger.service';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LoggerService],
})
export class AppComponent implements OnInit {
  title = 'user-service';

  constructor(
    private userService: UserService,
    private LoggerService: LoggerService
  ) {}

  users: { name: string; status: string }[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
