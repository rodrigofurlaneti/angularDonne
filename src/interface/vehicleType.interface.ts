export interface IVehicleTypeInterface {
    vehicleTypeId: number;
    vehicleTypeName: string;
}
export class VehicleTypeModel implements IVehicleTypeInterface {
    vehicleTypeId: number = 0;    
    vehicleTypeName: string = '';
    }