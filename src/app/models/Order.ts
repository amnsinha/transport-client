export interface Order {
    id: number;
    orderId: number;
    clientName: string;
    origin: string;
    destination: string;
    freightWeight: number;
    assignedTruck: string;
    assignedDriver: string;
    status: string;
    commissionAmount: string;
    approvedBy: string;
    clearance: string;
    incharge: string;
}
