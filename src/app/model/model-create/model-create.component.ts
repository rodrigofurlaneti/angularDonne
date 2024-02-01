import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModelCreateService } from './model-create.service';
import { Model } from '../../../interface/model.inteface';

@Component({
  selector: 'model-create',
  templateUrl: './model-create.component.html',
  styleUrls: ['./model-create.component.css']
})

export class ModelCreateComponent {
  
  //#region [Properties]
  //Property modelModel
  private _modelModel = new Model();
  get modelModel() { return this._modelModel; }
  set modelModel(value) { this._modelModel = value; }

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property RouterString
  private _routerString: string = '';
  get routerString() { return this._routerString; }
  set routerString(value) { this._routerString = value; }

  //Property MessageSuccess
  private _messageSuccess: string = '';
  get messageSuccess() { return this._messageSuccess; }
  set messageSuccess(value) { this._messageSuccess = value; }

  //Property MessageErro
  private _messageErro: string = '';
  get messageErro() { return this._messageErro; }
  set messageErro(value) { this._messageErro = value; }

  //Property MessagemodelName
  private _messageModelName: string = '';
  get messageModelName() { return this._messageModelName; }
  set messageModelName(value) { this._messageModelName = value; }
  
  // #endregion

  //#region [Constructor]
  
  constructor(private modelCreateService: ModelCreateService, 
    private _snackBar: MatSnackBar,
    private readonly router: Router) { }
  
  //#endregion

  //#region [Methods]

  save():void {
    console.log(this.modelModel);
    //check fields
    if(this.modelModel.modelName == "")
    {
      this.messageModelName = 'Não está preenchido o campo nome do modelo do veículo!';
      this._snackBar.open(this.messageModelName, 'Voltar', {
        duration: this.messageTime
      });
    }
    
    //save
    if(this.modelModel.modelName != "")
    {
      this.modelCreateService.save(this.modelModel).subscribe(model => {
        this.successMessage();
        this.modelList();
        }, err => {
          this.errorMessage();
        })
      }
    }

  reply():void{
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  modelList(){
    this.routerString = 'model-list';
    this.router.navigate([this.routerString]);
  }

  successMessage():void{
    this.messageSuccess = 'O cliente foi cadastrado com sucesso!';
    this._snackBar.open(this.messageSuccess + this.modelModel.modelName ,'', {
      duration: this.messageTime
    });
  }

  errorMessage():void{
    this.messageErro = 'Erro ao cadastrar o cliente!';
    this._snackBar.open(this.messageErro + this.modelModel.modelName,'', {
      duration: this.messageTime
    });
  }

  //#endregion
}