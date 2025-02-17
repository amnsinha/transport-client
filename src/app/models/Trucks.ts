export interface Trucks {
    id: number;
    truckNumber: string;
    registrationNumber: string;
    model: string;
    capacity: number;
    fuelType: string;
    status: string;
    ownerNumber: string;
    ownerName: string;
    driverName: string;
    driverNumber: string;
    fright: string;
    active: boolean;
    documents: { [key: string]: string }; // E.g., {"Insurance": "/docs/insurance.pdf"}
    nextMaintenanceDate: Date;
}
