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

    messageTime: number = 30000;

    messageTimeErro: number = 60000;

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
      this.appService.appService(this.authenticationUser).subscribe(userResp => {
        this.access = true;
        this.authenticationUser.userId = userResp.userId;
        this.user.userId = userResp.userId;
        this.user.userName = userResp.userName;
        this.router.navigate(['/main']);
        this._snackBar.open('Acesso autorizado com sucesso! Seja bem-vindo!','',{
          duration: this.messageTime
        });
        }, err => {
          console.log('Erro autenticar o usuário', err);
          if(err.error == 'InvalidUserName')
          {
            this._snackBar.open('O usuário não está cadastrado no banco de dados, entre em contato com o administrador do sistema!','',{
              duration: this.messageTimeErro
            });
          }
          else if(err.error == 'InvalidPassword')
          {
            this._snackBar.open('A senha está inválida, entre em contato com o administrador do sistema!','',{
              duration: this.messageTimeErro
            });
          }
        })
          setTimeout(() => {
            this._snackBar.dismiss();
          }, 30000);
      }
      

    getIP()  
    {  
      this.appService.getIPAddress().subscribe((res:any)=>{  
        this.ipAddress=res.ip;
      });  
    } 

    navigatorUserAgent(navigator: Navigator){
      let sBrowser = '';
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
