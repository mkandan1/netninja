import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   
    public postJsonValue: any;
    public user: any;
    public student: any = [];
    constructor(private http: HttpClient){

    }

    ngOnInit(): void {
      this.user = this.getMethod();
    }

    public getMethod(){
      this.http.get('http://localhost:3443/api/v1/welcome').subscribe(
        (data)=> {
         this.student = data
        }
      );
    }
}
