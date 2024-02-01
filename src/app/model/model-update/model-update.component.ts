import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ModelUpdateService } from './model-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Model } from 'src/interface/model.inteface';

let ELEMENT_DATA: Model[];

@Component({
  selector: 'model-update',
  templateUrl: './model-update.component.html',
  styleUrls: ['./model-update.component.css']
})

export class ModelUpdateComponent implements OnInit {

  //#region [Properties]
  //Property DisplayedColumns
  private _displayedColumns: string[] = ['modelId','modelName'];
  get displayedColumns() { return this._displayedColumns; }
  set displayedColumns(value) { this._displayedColumns = value; }

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

  //Property MessageTime
  private _messageTime: number = 3000;
  get messageTime() { return this._messageTime; }
  set messageTime(value) { this._messageTime = value; }

  //Property MessageModelName
  private _messageModelName: string = '';
  get messageModelName() { return this._messageModelName; }
  set messageModelName(value) { this._messageModelName = value; }
  
  //Property ModelModel
  private _model = new Model();
  get model() { return this._model; }
  set model(value) { this._model = value; }

  //Property IsIdZero
  private _isIdZero: boolean = true;
  get isIdZero() { return this._isIdZero; }
  set isIdZero(value) { this._isIdZero = value; }

  //Property IsIdGreaterThanZero
  private _isIdGreaterThanZero: boolean = false;
  get isIdGreaterThanZero() { return this._isIdGreaterThanZero; }
  set isIdGreaterThanZero(value) { this._isIdGreaterThanZero = value; }

  //Property Status
  private _status: string = '';
  get status() { return this._status; }
  set status(value) { this._status = value; }

  //Property Ids
  private _ids: number = 0;
  get ids() { return this._ids; }
  set ids(value) { this._ids = value; }

  // #endregion

  //#region [Constructor]
  constructor(private modelUpdateService: ModelUpdateService,
    private _snackBar: MatSnackBar, 
    private router: Router) { }
  
  //#endregion
  
  //#region [Methods]

  ngOnInit(): void {
    this.list();   
    this.hideUpdateButton(); 
  }

  hideUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  showUpdateButton() {
    const updateBtn = document.querySelector('.update_btn') as HTMLButtonElement;
    updateBtn.style.display = 'none';
  }

  list() {
    this.modelUpdateService.list().subscribe(list => {
      this.dataSource = list;
    }, err => {
      console.log('Erro ao listar os modelos dos veículos!', err);
    })
  }

  public getById(id: number) {
    this.showUpdateButton();
    this.modelUpdateService.getById(id)
                              .subscribe(modelResponse => { 
                                this.model.modelId = modelResponse.ModelId;
                                this.model.modelName = modelResponse.ModelName;
                                this.isIdZero = false;
                                this.isIdGreaterThanZero = true;
                              });
  }

  dataSource = ELEMENT_DATA;

  clickedRows = new Set<Model>();

  reply(){
    this.routerString = 'main';
    this.router.navigate([this.routerString]);
  }

  public update() {

    this.model = this.checkFields(this.model);

    //update
    if(this.model.modelName != "")
    {
      this.modelUpdateService.update(this.model)
      .subscribe(modelResponse => { 
        this.successMessage();
        this.reply();
      }, err => {
        this.errorMessage();
      });
    }
  }

  public checkFields(objModelModel : Model) : Model
  {
    if(objModelModel.modelName == "")
    {
      this.messageModelName = 'Não está preenchido o campo nome do modelo do veículo!';
      this._snackBar.open(this.messageModelName,'', {
        duration: this.messageTime
      });
    }
    
    return objModelModel;
  }

  public successMessage(){
    this.messageSuccess = 'O modelo do veículo foi atualizado com sucesso!';
    this._snackBar.open(this.messageSuccess,'', {
      duration: this.messageTime
    });
  }

  public errorMessage(){
    this.messageErro = 'Erro ao atualizar o modelo do veículo!'
    this._snackBar.open(this.messageErro,'', {
      duration: this.messageTime
    });
  }

  // #endregion
}