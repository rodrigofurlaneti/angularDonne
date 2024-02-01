import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface FoodNode {
  name: string;
  path: string;
  icon: string;
  children?: FoodNode[];
}

export class DynamicFlatNode {
  constructor(
    public item: string,
    public path: string,
    public icon: string,
    public level = 1,
    public expandable = false,
    public isLoading = false,
  ) {}
}


@Injectable({providedIn: 'root'})
export class DynamicDatabase {
  dataMap = new Map<string, FoodNode[]>([
    ['Categoria', 
      [
        { name:'Adicionar', path:'/category-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/category-update', icon:'sync'},
        { name:'Excluir', path:'/category-delete', icon:'delete_forever'},
        { name:'Listar', path:'/category-list', icon:'view_headline'},
      ]
    ],
    ['Cliente', 
      [
        { name:'Adicionar', path:'/buyer-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/buyer-update', icon:'sync'},
        { name:'Excluir', path:'/buyer-delete', icon:'delete_forever'},
        { name:'Listar', path:'/buyer-list', icon:'view_headline'},
      ]
    ],

    ['Comanda', 
      [
        { name:'Adicionar', path:'/command-create', icon:'exposure_plus_1'},
        { name:'Excluir', path:'/command-delete', icon:'delete_forever'},
        { name:'Filtrar', path:'/command-search', icon:'search'},
        { name:'Listar', path:'/command-list', icon:'view_headline'},
      ]
    ],
    ['Estoque', 
      [
        { name:'Iventário', path:'/product-stockinventory', icon:'view_headline'}
      ],
    ],
    ['Forma de pagamento', 
      [
        { name:'Adicionar', path:'/formofpayment-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/formofpayment-update', icon:'sync'},
        { name:'Excluir', path:'/formofpayment-delete', icon:'delete_forever'},
        { name:'Listar', path:'/formofpayment-list', icon:'view_headline'},
      ],
    ],
    ['Pagamento', 
      [
        { name:'Adicionar', path:'/payment-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/payment-update', icon:'sync'},
        { name:'Excluir', path:'/payment-delete', icon:'delete_forever'},
        { name:'Listar', path:'/payment-list', icon:'view_headline'},
      ],
    ],
    ['Pedido', 
      [
        { name:'Adicionar', path:'/order-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/order-update', icon:'sync'},
        { name:'Excluir', path:'/order-delete', icon:'delete_forever'},
        { name:'Listar', path:'/order-list', icon:'view_headline'},
      ],
    ],
    ['Perfil', 
      [
        { name:'Adicionar', path:'/profile-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/profile-update', icon:'sync'},
        { name:'Excluir', path:'/profile-delete', icon:'delete_forever'},
        { name:'Listar', path:'/profile-list', icon:'view_headline'},
      ],
    ],
    ['Produto', 
      [
        { name:'Adicionar', path:'/product-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/product-update', icon:'sync'},
        { name:'Excluir', path:'/product-delete', icon:'delete_forever'},
        { name:'Listar', path:'/product-list', icon:'view_headline'},
      ],
    ],
        ['Produto', 
      [
        { name:'Adicionar', path:'/product-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/product-update', icon:'sync'},
        { name:'Excluir', path:'/product-delete', icon:'delete_forever'},
        { name:'Listar', path:'/product-list', icon:'view_headline'},
      ],
    ],
    ['Usuário', 
      [
        { name:'Adicionar', path:'/user-create', icon:'exposure_plus_1'},
        { name:'Atualizar', path:'/user-update', icon:'sync'},
        { name:'Excluir', path:'/user-delete', icon:'delete_forever'},
        { name:'Listar', path:'/user-list', icon:'view_headline'},
      ],
    ],
    ['Tipo de veículo', 
    [
      { name:'Adicionar', path:'/vehicleType-create', icon:'exposure_plus_1'},
      { name:'Atualizar', path:'/vehicleType-update', icon:'sync'},
      { name:'Excluir', path:'/vehicleType-delete', icon:'delete_forever'},
      { name:'Listar', path:'/vehicleType-list', icon:'view_headline'}
    ],
    ],
    ['Marca do veículo', 
    [
      { name:'Adicionar', path:'/brand-create', icon:'exposure_plus_1'},
      { name:'Atualizar', path:'/brand-update', icon:'sync'},
      { name:'Excluir', path:'/brand-delete', icon:'delete_forever'},
      { name:'Listar', path:'/brand-list', icon:'view_headline'}
    ],
    ],
    ['Modelo do veículo', 
    [
      { name:'Adicionar', path:'/model-create', icon:'exposure_plus_1'},
      { name:'Atualizar', path:'/model-update', icon:'sync'},
      { name:'Excluir', path:'/model-delete', icon:'delete_forever'},
      { name:'Listar', path:'/model-list', icon:'view_headline'},
    ],
    ],
  ]);

  rootLevelNodes: string[] = ['Categoria', 'Cliente', 'Comanda', 'Estoque', 'Forma de pagamento', 'Pagamento', 
  'Marca do veículo', 'Modelo do veículo', 'Pedido', 'Perfil', 'Produto', 'Usuário', 'Relatório', 'Painel de controle', 'Tipo de veículo'];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(foodNode => new DynamicFlatNode(foodNode, foodNode, foodNode, 0, true));
  }

  getChildren(node: string): FoodNode[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}

export class DynamicDataSource implements DataSource<DynamicFlatNode> {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private _treeControl: FlatTreeControl<DynamicFlatNode>,
    private _database: DynamicDatabase,
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) {
      // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(
          foodNode => new DynamicFlatNode(foodNode.name, foodNode.path, foodNode.icon, node.level + 1, this._database.isExpandable(foodNode.name)),
        );
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (
          let i = index + 1;
          i < this.data.length && this.data[i].level > node.level;
          i++, count++
        ) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 2000);
  }
}

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent {
  constructor(private router: Router, database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  public activeCategoryCreate() {
    this.router.navigate(['category-create']);
  }

  public activeCategoryDelete() {
    this.router.navigate(['category-delete']);
  }

  public activeCategoryList() {
    this.router.navigate(['category-list']);
  }

  public activeCategoryUpdate() {
    this.router.navigate(['category-update']);
  }

  public activeProfileCreate() {
    this.router.navigate(['profile-create']);
  }

  public activeProfileDelete() {
    this.router.navigate(['profile-delete']);
  }

  public activeProfileList() {
    this.router.navigate(['profile-list']);
  }

  public activeProfileUpdate() {
    this.router.navigate(['profile-update']);
  }

  public activeUserCreate() {
    this.router.navigate(['user-create']);
  }

  public activeUserUpdate() {
    this.router.navigate(['user-update']);
  }

  public activeUserDelete() {
    this.router.navigate(['user-delete']);
  }

  public activeUserList() {
    this.router.navigate(['user-list']);
  }  
  public activeBuyerCreate() {
    this.router.navigate(['buyer-create']);
  }

  public activeBuyerDelete() {
    this.router.navigate(['buyer-delete']);
  }

  public activeBuyerList() {
    this.router.navigate(['buyer-list']);
  }

  public activeBuyerUpdate() {
    this.router.navigate(['buyer-update']);
  }

  public activeOrderCreate() {
    this.router.navigate(['order-create']);
  }

  public activeOrderList() {
    this.router.navigate(['order-list']);
  }

  public activeOrderDelete() {
    this.router.navigate(['order-delete']);
  }

  public activeOrderUpdate() {
    this.router.navigate(['order-update']);
  }


  public activeProductCreate() {
    this.router.navigate(['product-create']);
  }

  public activeProductList() {
    this.router.navigate(['product-list']);
  }

  public activeProductShoppingList() {
    this.router.navigate(['product-shoppinglist']);
  }

  public activeProductDelete() {
    this.router.navigate(['product-delete']);
  }

  public activeProductUpdate() {
    this.router.navigate(['product-update']);
  }

  public activeFormOfPaymentCreate() {
    this.router.navigate(['formofpayment-create']);
  }

  public activeFormOfPaymentList() {
    this.router.navigate(['formofpayment-list']);
  }

  public activeFormOfPaymentDelete() {
    this.router.navigate(['formofpayment-delete']);
  }

  public activeFormOfPaymentUpdate() {
    this.router.navigate(['formofpayment-update']);
  }

  public activeCommandCreate() {
    this.router.navigate(['command-create']);
  }

  public activeCommandUpdate() {
    this.router.navigate(['command-update']);
  }

  public activeCommandList() {
    this.router.navigate(['command-list']);
  }

  public activeCommandOrderList() {
    this.router.navigate(['command-search']);
  }
  
  public activeCommandDelete() {
    this.router.navigate(['command-delete']);
  }

  public activeAbout() {
    this.router.navigate(['about']);
  }

  public activePaymentCreate() {
    this.router.navigate(['payment-create']);
  }

  public activePaymentList() {
    this.router.navigate(['payment-list']);
  }

  public activeVehicleTypeCreate() {
    this.router.navigate(['vehicleType-create']);
  }

  public activeVehicleTypeDelete() {
    this.router.navigate(['vehicleType-delete']);
  }

  public activeVehicleTypeList() {
    this.router.navigate(['vehicleType-list']);
  }
  
  public activeVehicleTypeUpdate() {
    this.router.navigate(['vehicleType-update']);
  }

  public activeBrandCreate() {
    this.router.navigate(['brand-create']);
  }

  public activeBrandDelete() {
    this.router.navigate(['brand-delete']);
  }

  public activeBrandList() {
    this.router.navigate(['brand-list']);
  }

  public activeBrandUpdate() {
    this.router.navigate(['brand-update']);
  }

  public activeModelCreate() {
    this.router.navigate(['model-create']);
  }

  public activeModelList() {
    this.router.navigate(['model-list']);
  }

  public activeModelDelete() {
    this.router.navigate(['model-delete']);
  }

  public activeModelUpdate() {
    this.router.navigate(['model-update']);
  }
}