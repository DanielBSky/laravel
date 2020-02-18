import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  url = 'http://localhost:8000/api/login/github';

  constructor(private http: HttpClient) {

  }

  sendData() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin':'*',
    //   })
    // };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    const obj = {
      driver: 'github'
    };
    this.http.post(this.url, obj).subscribe();
  }
}
