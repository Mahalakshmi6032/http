import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})

export class GetComponent implements OnInit {
    responseData:any;
    constructor(private dataservice:UserService){}
    ngOnInit(): void {
    this.getData();
    }
    getData() {
      this.dataservice.getData().subscribe((res)=> {
      this.responseData=res;
      });
    }
  }

