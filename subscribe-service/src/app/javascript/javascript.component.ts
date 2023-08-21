import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers: [EnrollService],
})
export class JavascriptComponent {
  title: string = 'Javascript';

  constructor(private enrollService: EnrollService) {}
  OnEnroll() {
    // const enrollService = new EnrollService();
    this.enrollService.OnEnrollClicked('Javascript');
  }
}
