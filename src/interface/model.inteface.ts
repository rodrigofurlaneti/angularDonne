export interface IModelInterface {
    modelId: number;
    modelName: string;
}

export class Model implements IModelInterface {
    modelId: number = 0;    
    modelName: string = '';
    }