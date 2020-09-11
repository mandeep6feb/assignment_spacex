import { ApiServiceService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  name = 'Mandeep Kohli';
  launchData: any;
  data: any;
  constructor(public api: ApiServiceService) {}

  getApi() {
    this.api.getdata('https://api.spaceXdata.com/v3/launches?limit=100')
    .subscribe( (res: any) => {
      this.data = res;
      console.log(res);
      console.log(this.data[0].links.mission_patch);
    }, error => {
      console.log(error);
    });
}
getApiFilter(sucess) {
  // console.log(success);
  this.api.getdata('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + sucess)
  .subscribe( (res2: any) => {
    this.data = res2;
    console.log(res2);
    // console.log(this.data[0].links.mission_patch);
  }, error => {
    console.log(error);
  });
}
getApiFilterYear(sucess) {
  // console.log(success);
  this.api.getdata('https://api.spaceXdata.com/v3/launches?limit=100&launch_year=' + sucess)
  .subscribe( (res2: any) => {
    this.data = res2;
    console.log(res2);
    // console.log(this.data[0].links.mission_patch);
  }, error => {
    console.log(error);
  });
}
getApiFilterland(sucess) {
  // console.log(success);
  this.api.getdata('https://api.spaceXdata.com/v3/launches?limit=100&land_success=' + sucess)
  .subscribe( (res2: any) => {
    this.data = res2;
    console.log(res2);
    // console.log(this.data[0].links.mission_patch);
  }, error => {
    console.log(error);
  });
}
  ngOnInit() {
    this.getApi();

  }
}
