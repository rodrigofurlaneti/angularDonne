  import { Component } from '@angular/core';
  import { AppService } from './app.service';
  import { Router } from '@angular/router'; 
  import { UserModel } from 'src/interface/user.interface';
  import { MatSnackBar } from '@angular/material/snack-bar';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent{
    
    title = 'Donne';

    user: UserModel;
    
    hide = true;

    access: boolean = false;

    constructor(private appService: AppService,
                private _snackBar: MatSnackBar,
                private router: Router) {
                  this.user = new UserModel();
                }

    addUserName(event: any)
    {
      this.user.userName = event.target.value;
    }

    addUserPassword(event: any)
    {
      this.user.userPassword = event.target.value;
    }

    validar() {
      this.appService.appService(this.user).subscribe(userResp => {
      if(userResp.userName === null)
      {
        this._snackBar.open('Não existe este usuário cadastrado!','',);
      }
      else if(this.user.userPassword === '')
      {
        this._snackBar.open('Não está preenchido o campo senha!','',);
      }
      else if(this.user.userPassword != userResp.userPassword)
      {
        this._snackBar.open('Senha inválida!','',);
      }
      else if(this.user.userPassword === userResp.userPassword && 
          this.user.userName === userResp.userName)
      {
        this.access = true;
        this.user.userId = userResp.userId;
        this.router.navigate(['/main']);
        this._snackBar.open('Acesso autorizado com sucesso! Seja bem-vindo!','',);
        console.log();
      }
      }, err => {
        console.log('Erro autenticar o usuário', err);
      })

      setTimeout(() => {
        this._snackBar.dismiss();
      }, 2000);
    }
  }
