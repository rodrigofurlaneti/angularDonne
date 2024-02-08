export interface IVehicleInterface {
    vehicleId: number;
    vehicleTypeId: number;
    vehicleTypeName: string;
    vehicleBrandId: number;
    vehicleBrandName: string;
    vehicleModelId: number;
    vehicleModelName: string;
    vehicleColorId: number;
    vehicleColorName: string;
    plate: string;
    entryDate: string;
    entryTime: string;
    departureDate: string;
    departureTime: string;
    parked: number;
}
export class VehicleModel implements IVehicleInterface {
    vehicleId: number = 0;    
    vehicleTypeId: number = 0;
    vehicleTypeName: string = '';
    vehicleBrandId: number = 0;
    vehicleBrandName: string = '';
    vehicleModelId: number = 0;
    vehicleModelName: string = '';
    vehicleColorId: number = 0;
    vehicleColorName: string = '';
    plate: string = '';
    entryDate: string =  '';
    entryTime: string =  '';
    departureDate: string =  '';
    departureTime: string =  '';
    parked: number = 0;
    }
