import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandsCreateService } from './commands-create.service';
import { CommandsModel } from '../../../interface/commands.interface';
import { StoreNameService } from 'src/app/store-name.service';
import { StoreIdService } from 'src/app/store-id.service';
import { MatSelect } from '@angular/material/select';
import { UserNameService } from 'src/app/user-name.service';
import { UserIdService } from 'src/app/user-id.service';
import { BuyerModel } from 'src/interface/buyer.interface';

let ELEMENT_DATA_Buyer: BuyerModel[];

@Component({
  selector: 'commands-create',
  templateUrl: './commands-create.component.html',
  styleUrls: ['./commands-create.component.css']
})

export class CommandsCreateComponent {

  buyerNameSelect: string = " ";
  buyerIDSelect: number = 0;

  selectedBuyerName: BuyerModel = new BuyerModel();

  commandsModel = new CommandsModel();

  constructor(private commandsCreateService: CommandsCreateService, 
    private _snackBar: MatSnackBar,  private readonly router: Router,
    private storeNameService: StoreNameService,
    private storeIdService: StoreIdService,
    private userNameService: UserNameService,
    private userIdService: UserIdService) { }

    @ViewChild('matSelect')
    matSelect!: MatSelect;
 
    ngOnInit(): void {
      this.listBuyer();
    }
  
    ngAfterViewInit() {
      this.matSelect.valueChange.subscribe(obj => {
        this.selectedBuyerName.buyerName = obj.buyerName;
      });
    }
  
    change(event: any) {
      this.buyerIDSelect = event.buyerId;
      this.buyerNameSelect = event.buyerName;
    }

    listBuyer() {
      this.commandsCreateService.listBuyer().subscribe(list => {
        ELEMENT_DATA_Buyer = list;
        this.dataSourceBuyer = ELEMENT_DATA_Buyer;
      }, err => {
        console.log('Erro ao listar os perfis', err);
      })
    }
  

  save() {
    
    //checkFields
    if(this.commandsModel.buyerName == "")
    {
      this._snackBar.open('O nome da categoria está vazio, precisa preencher!','', {
        duration: 2000
      });
    }

    //save
    if(this.commandsModel.buyerName != "")
    {
      this.commandsModel.storeName = this.storeNameService.storeName;
      this.commandsModel.storeId = parseInt(this.storeIdService.storeId);
      this.commandsCreateService.save(this.commandsModel).subscribe(user => {
        this._snackBar.open('A categoria "'+ this.commandsModel.buyerName +'" foi cadastrada com sucesso!','', {
          duration: 2000
        });
        this.commandsList();
      }, err => {
        this._snackBar.open('Erro ao cadastrar a categoria "'+ this.commandsModel.buyerName +'" foi cadastrada com sucesso!','', {
          duration: 2000
        });
        console.log('Erro ao cadastrar a categoria "'+ this.commandsModel.buyerName +'", necessário refazer o procedimento!', err);
      })
    }
  }

  saveClient() {
    
    //checkFields
    if(this.commandsModel.buyerName == "")
    {
      this._snackBar.open('O cliente não foi seleciona, precisa selecionar!','', {
        duration: 2000
      });
    }

    //save
    if(this.commandsModel.buyerName != "")
    {
      this.commandsModel.buyerName = this.selectedBuyerName.buyerName;
      this.commandsModel.buyerId = parseInt(this.selectedBuyerName.buyerId);
      this.commandsCreateService.save(this.commandsModel).subscribe(user => {
        this._snackBar.open('O cliente "'+ this.commandsModel.buyerName +'" foi salvo na comanda com sucesso!','', {
          duration: 2000
        });
      }, err => {
        this._snackBar.open('Erro ao salvar o cliente"'+ this.commandsModel.buyerName +'", necessário refazer o procedimento!','', {
          duration: 2000
        });
        console.log('Erro ao salvar o cliente"'+ this.commandsModel.buyerName +'", necessário refazer o procedimento!', err);
      })
    }
  }

  dataSourceBuyer = ELEMENT_DATA_Buyer;

  reply(){
    this.router.navigate(['main']);
  }

  commandsList(){
    this.router.navigate(['commands-list']);
  }
}