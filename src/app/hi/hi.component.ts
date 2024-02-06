import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  helloForm: FormGroup;
  data: any;

  constructor(private like: FormBuilder, private http: HttpClient) {
    this.helloForm = this.like.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    
  }
  postdata(){
    this.http.post("http://localhost3000/posts",this.helloForm.value).subscribe(res=>{
      console.log(res);
      alert("submit successfully");
    })
  }
  getdata() {
    this.http.get("http://localhost3000/posts").subscribe(res=>{
      console.log(res);
      this.data=res;
  })
  }
}