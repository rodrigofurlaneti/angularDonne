export interface IVehicleModelInterface {
    vehicleModelId: number;
    vehicleModelName: string;
}

export class VehicleModel implements IVehicleModelInterface {
    vehicleModelId: number = 0;    
    vehicleModelName: string = '';
    }