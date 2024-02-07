export interface IVehicleColorInterface {
    vehicleColorId: number;
    vehicleColorName: string;
}

export class VehicleColorModel implements IVehicleColorInterface {
    vehicleColorId: number = 0;    
    vehicleColorName: string = '';
    }