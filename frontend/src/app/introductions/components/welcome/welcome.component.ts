import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface PingResponse {
  pong: number;
}

@Component({
  selector: 'snake-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  title = 'Welcome';
  subTitle = 'Ngx Snake Game by WebDave and Co.';

  constructor(private http: HttpClient) {
  }

  getServerPing() {
    this.http.get<PingResponse>('http://127.0.0.1:3000/api/v1/system/ping').subscribe(resp => console.log(resp));
  }
}
