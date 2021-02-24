import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
}) 
export class ProfileComponent implements OnInit {
user:any;
image:any;
file:any;
imgSelectErr:any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService
      .getProfile()
      .then(data => {
        console.log(data.user);
        this.user=data.user
        if (!data.success) {
          this.flashMessagesService.show(
            `Something went wrong!`,
            { cssClass: 'alert-danger', timeout: 6000 });
          this.router.navigate(['/login']);
        }
      });
  }
  onChange(event: any) {
    this.image = event.target.files[0].name.toLowerCase();
    this.file = event.target.files[0];
    this.imgSelectErr = false;
  }

  updateProfile(f: any) {
     var id=this.user._id;

    var obj = {
      username:f.username,
      firstName: f.firstName,
      lastName: f.lastName,
      email: f.email,
      image: this.image
      
    };
    console.log(obj);
    // this.authService.update(id, obj).subscribe(() => {
     
    //   this.authService
    //   .getProfile()
    //   .then(data => {
    //     console.log(data.user);
    //     this.user=data.user
       
    //   });
    // });
  }

}
