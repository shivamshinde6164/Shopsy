import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route : Router){}
  
  login(formreq:any){
    
    if(formreq.value.username =="shivam" && formreq.value.password=="123"){
    alert('Successful');
    this.route.navigate(['home']);
    
  }
  else{
    alert('Invalid Credentials');
    this.route.navigate(['']);
  }
}
}
