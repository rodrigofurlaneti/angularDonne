import { Component, OnInit } from '@angular/core';  
import { AppService } from './app.service';
import { Router } from '@angular/router'; 
import { UserModel } from 'src/interface/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationUserModel } from 'src/interface/authenticationUser.interface';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit{
    
    title = 'Donne';

    user: UserModel;

    authenticationUser: AuthenticationUserModel;
    
    hide = true;

    access: boolean = false;

    messageTime: number = 1000;

    constructor(private appService: AppService,
                private _snackBar: MatSnackBar,
                private router: Router) {
                  this.user = new UserModel();
                  this.authenticationUser = new AuthenticationUserModel();
                };
    
    ipAddress:string = '';

    ngOnInit()  
    {  
      this.getIP();  
    }   

    addUserName(event: any)
    {
      this.authenticationUser.userName = event.target.value;
    }

    addUserPassword(event: any)
    {
      this.authenticationUser.userPassword = event.target.value;
    }

    validar() {
      this.authenticationUser.navigatorUserAgent = this.navigatorUserAgent(navigator);
      this.authenticationUser.clientInternetProtocol = this.ipAddress;
      if(this.authenticationUser.userName == '')
      {
        this._snackBar.open('Usuário não está preenchido!','',);        
      }
      else
      {
        this.appService.appService(this.authenticationUser).subscribe(userResp => {
          console.log(userResp);
          if(this.authenticationUser.userName != userResp.userName)
          {
            this._snackBar.open('Usuário não existe!','',);
          }
          else if(this.authenticationUser.userPassword != userResp.userPassword)
          {
            this._snackBar.open('Senha inválida!','',);
          }

          else 
          {
            this.access = true;
            this.authenticationUser.userId = userResp.userId;
            this.router.navigate(['/main']);
            this._snackBar.open('Acesso autorizado com sucesso! Seja bem-vindo!','',{
              duration: this.messageTime
            });
          }
          }, err => {
            console.log('Erro autenticar o usuário', err);
          })
    
          setTimeout(() => {
            this._snackBar.dismiss();
          }, 2000);
        }
      }
      

    getIP()  
    {  
      this.appService.getIPAddress().subscribe((res:any)=>{  
        this.ipAddress=res.ip;
      });  
    } 

    navigatorUserAgent(navigator: Navigator){
      var sBrowser = '';
      let sUsrAg = navigator.userAgent;
      if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
      } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
      } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
      } else if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
      } else if (sUsrAg.indexOf("MSIE") > -1) {
        sBrowser = "Microsoft Internet Explorer";
      }
      return sBrowser;
    }

  }
