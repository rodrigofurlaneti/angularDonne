import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'about-create',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  
  constructor(private readonly router: Router) { }
  
  reply(){
    this.router.navigate(['main']);
  }
}




