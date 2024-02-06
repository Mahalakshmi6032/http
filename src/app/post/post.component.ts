import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private Service: UserService, private Fb: FormBuilder) {
    this.contactForm = this.Fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
      
    })
  }

  ngOnInit(): void {
  }
  postData(data: any) {
    this.Service.postData(this.contactForm.value).subscribe(res => {
      console.log(res);
      alert("submited successfully");
    })

  }

}
