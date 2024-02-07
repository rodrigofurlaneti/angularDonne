export interface IVehicleBrandInterface {
    vehicleBrandId: number;
    vehicleBrandName: string;
}

export class VehicleBrandModel implements IVehicleBrandInterface {
    vehicleBrandId: number = 0;    
    vehicleBrandName: string = '';
    }