export interface IVehicleColorInterface {
    vehicleColorId: number;
    vehicleColorName: string;
}

export class VehicleColor implements IVehicleColorInterface {
    vehicleColorId: number = 0;    
    vehicleColorName: string = '';
    }