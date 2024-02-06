export interface IVehicleBrandInterface {
    vehicleBrandId: number;
    vehicleBrandName: string;
}

export class VehicleBrand implements IVehicleBrandInterface {
    vehicleBrandId: number = 0;    
    vehicleBrandName: string = '';
    }