import {Party} from "./Party";
import {RouteLocation} from "./RouteLocation";
import {Trucks} from "./Trucks";
import {Driver} from "./Driver";


export interface Order {
    id: number;
    orderId: number;
    party: Party;
    origin: RouteLocation;
    destination: RouteLocation;
    freightWeight: number;
    status: string;
    commissionAmount: string;
    approvedBy: string;
    clearance: string;
    incharge: string;
    assignedTruck: Trucks;
    assignedDriver: Driver;
}
