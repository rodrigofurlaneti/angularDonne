export interface IVehicleInterface {
    vehicleId: number;
    vehicleTypeId: number;
    brandId: number;
    modelId: number;
    colorId: number;
    plate: string;
    entryDate: string;
    entryTime: string;
    departureDate: string;
    departureTime: string;
    parked: boolean;
}
export class VehicleModel implements IVehicleInterface {
    vehicleId: number = 0;    
    vehicleTypeId: number = 0;
    brandId: number = 0;
    modelId: number = 0;
    colorId: number = 0;
    plate: string = '';
    entryDate: string =  '';
    entryTime: string =  '';
    departureDate: string =  '';
    departureTime: string =  '';
    parked: boolean = true;
    }
