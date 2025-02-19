import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from "../../../../shared/services/party.service";
import { TrucksService } from "../../../../shared/services/trucks.service";
import { DriverService } from "../../../../shared/services/driver.service";
import { RouteLocationService } from "../../../../shared/services/route-location.service";
import { OrderService } from "../../../../shared/services/order.service";
import { Party } from "../../../../models/Party";
import { Trucks } from "../../../../models/Trucks";
import { RouteLocation } from "../../../../models/RouteLocation";
import { Driver } from "../../../../models/Driver";
import { Order } from "../../../../models/Order";

@Component({
    selector: 'app-order-form',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    orderForm!: FormGroup;
    // orders: any[] = [];
    orders: any[] = [
        {
          orderId: 'ATCABC12345678',
          party: 'ABC Corp',
          origin: 'New York',
          destination: 'Los Angeles',
          freightWeight: 20,
          assignedTruck: 'TN01AB1234',
          assignedDriver: 'Suresh',
          status: 'In Transit',
          commissionAmount: 5000,
          approvedBy: 'Manager A',
          clearance: 'Cleared',
          incharge: 'Supervisor X'
        },
        {
          orderId: 'ATCXYZ87654321',
          party: 'XYZ Ltd',
          origin: 'San Francisco',
          destination: 'Houston',
          freightWeight: 15,
          assignedTruck: 'MH02CD5678',
          assignedDriver: 'Vinod',
          status: 'Pending',
          commissionAmount: 4500,
          approvedBy: 'Manager B',
          clearance: 'Pending',
          incharge: 'Supervisor Y'
        }
      ];
      
    editingIndex: number | null = null;
  
   // Sample Data for Dropdowns
  parties = [{ label: 'ABC Corp' }, { label: 'XYZ Ltd' }, { label: 'Flat Logistics' }];
  routeLocations = [{ label: 'New York' }, { label: 'Los Angeles' }, { label: 'Chicago' }];
  trucks = [{ label: 'Truck 1' }, { label: 'Truck 2' }];
  drivers = [{ label: 'Driver A' }, { label: 'Driver B' }];

  // Filtered Data for Manual Input + Dropdown
  filteredParties = [...this.parties];
  filteredOrigins = [...this.routeLocations];
  filteredDestinations = [...this.routeLocations];

  showPartyDropdown = false;
  showOriginDropdown = false;
  showDestinationDropdown = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      party: [''],
      origin: [''],
      destination: [''],
      freightWeight: [''],
      assignedTruck: [''],
      assignedDriver: [''],
      status: [''],
      commissionAmount: [''],
      approvedBy: [''],
      clearance: [''],
      incharge: ['']
    });
  }

  // Filtering Logic
  filterParties() {
    const query = this.orderForm.get('party')?.value.toLowerCase();
    this.filteredParties = this.parties.filter(p => p.label.toLowerCase().includes(query));
    this.showPartyDropdown = this.filteredParties.length > 0;
  }

  filterOrigins() {
    const query = this.orderForm.get('origin')?.value.toLowerCase();
    this.filteredOrigins = this.routeLocations.filter(loc => loc.label.toLowerCase().includes(query));
    this.showOriginDropdown = this.filteredOrigins.length > 0;
  }

  filterDestinations() {
    const query = this.orderForm.get('destination')?.value.toLowerCase();
    this.filteredDestinations = this.routeLocations.filter(loc => loc.label.toLowerCase().includes(query));
    this.showDestinationDropdown = this.filteredDestinations.length > 0;
  }

  // Select Value from Dropdown
  selectValue(field: string, value: string) {
    this.orderForm.get(field)?.setValue(value);
    this.hideDropdown(field);
  }

  // Hide Dropdown on Blur
  hideDropdown(field: string) {
    setTimeout(() => {
      if (field === 'party') this.showPartyDropdown = false;
      else if (field === 'origin') this.showOriginDropdown = false;
      else if (field === 'destination') this.showDestinationDropdown = false;
    }, 200);
  }
    submitOrder() {
      if (this.orderForm.invalid) return;
  
      const newOrder = { orderId: this.orders.length + 1, ...this.orderForm.value };
  
      if (this.editingIndex !== null) {
        this.orders[this.editingIndex] = newOrder;
        this.editingIndex = null;
      } else {
        this.orders.push(newOrder);
      }
  
      this.orderForm.reset();
    }
  
    editOrder(order: any) {
      this.editingIndex = this.orders.findIndex(o => o.orderId === order.orderId);
      this.orderForm.patchValue(order);
    }
  
    deleteOrder(orderId: number) {
      this.orders = this.orders.filter(order => order.orderId !== orderId);
    }
  
    filterTrucks(event: any) {
      // Placeholder for autocomplete truck search
      console.log('Searching for:', event.query);
    }
  }
//     filteredTrucks: any[] = [];
//     parties: Party[] = []; // Party list from the API
//     routeLocations: RouteLocation[] = []; // Route location list from the API
//     trucks: Trucks[] = []; // Trucks list for selection
//     drivers: Driver[] = []; // Drivers list for selection
//     orderId: any | null = null; // To store the order ID for update or delete


//     constructor(
//         private fb: FormBuilder,
//         private orderService: OrderService,
//         private partyService: PartyService,
//         private trucksService: TrucksService,
//         private driverService: DriverService,
//         private routeLocationService: RouteLocationService,
//         private route: ActivatedRoute,
//         private router: Router
//     ) {
//         this.createForm();
//     }

//     filterTrucks(event:any) {
//         let query = event.query;
//         this.filteredTrucks = this.trucks.filter(truck =>
//             truck.truckNumber.toLowerCase().includes(query.toLowerCase())
//         );
//     }

//     autoGenerateOrderId() {
//         const randomInt = Math.floor(Math.random() * 1000000000); // Generate a random number
//         const randomString = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random string
//         this.orderForm.patchValue({ orderId: `ATC${randomString}${randomInt}` }); // Set orderId with prefix 'ATC'
//     }

//     ngOnInit(): void {
//         // Fetching the order ID from route params if we're editing an existing order
//         this.route.paramMap.subscribe(params => {
//             this.orderId = +params.get('id')!;
//             if (this.orderId) {
//                 this.loadOrder(); // Load the order data for editing
//             }
//             else{
//                 this.autoGenerateOrderId()

//             }
//         });

//         this.loadData(); // Load data for dropdowns (Parties, RouteLocations, Trucks, Drivers)
//     }

//     createForm() {
//         this.orderForm = this.fb.group({
//             orderId: ['', Validators.required],
//             party: ['', Validators.required],
//             origin: ['', Validators.required],
//             destination: ['', Validators.required],
//             freightWeight: ['', [Validators.required, Validators.min(1)]],
//             assignedTruck: ['', Validators.required],
//             assignedDriver: ['', Validators.required],
//             status: ['', Validators.required],
//             commissionAmount: ['', Validators.required],
//             approvedBy: ['', Validators.required],
//             clearance: ['', Validators.required],
//             incharge: ['', Validators.required]
//         });
//     }

//     loadData() {
//         // Load all necessary data for dropdowns
//         this.partyService.getAllParties().subscribe(parties => {
//             this.parties = parties;
//         });

//         this.trucksService.getAllTrucks().subscribe(trucks => {
//             this.trucks = trucks;
//         });

//         this.routeLocationService.getAllRouteLocations().subscribe(locatiom => {
//             this.routeLocations = locatiom;
//         });
//     }

//     loadOrder() {
//         if (this.orderId) {
//             this.orderService.getOrderById(this.orderId).subscribe(
//                 (order: Order) => {
//                     this.orderForm.patchValue({
//                         orderId: order.orderId,
//                         party: order.party,
//                         origin: order.origin,
//                         destination: order.destination,
//                         freightWeight: order.freightWeight,
//                         assignedTruck: order.assignedTruck,
//                         assignedDriver: order.assignedDriver,
//                         status: order.status,
//                         commissionAmount: order.commissionAmount,
//                         approvedBy: order.approvedBy,
//                         clearance: order.clearance,
//                         incharge: order.incharge
//                     });
//                 },
//                 error => {
//                     console.error('Error fetching order:', error);
//                 }
//             );
//         }
//     }

//     submitOrder() {
//         if (this.orderForm.valid) {
//             if (this.orderId) {
//                 this.updateOrder();
//             } else {
//                 this.createOrder();
//             }
//         } else {
//             console.log('Form is invalid');
//         }
//     }

//     createOrder() {
//         this.orderService.createOrder(this.orderForm.value).subscribe(
//             response => {
//                 console.log('Order Created Successfully!', response);
//                 this.router.navigate(['/orders']);
//             },
//             error => {
//                 console.error('Error creating order:', error);
//             }
//         );
//     }

//     updateOrder() {
//         if (this.orderId) {
//             this.orderService.updateOrder(this.orderId, this.orderForm.value).subscribe(
//                 response => {
//                     console.log('Order Updated Successfully!', response);
//                     this.router.navigate(['/orders']);
//                 },
//                 error => {
//                     console.error('Error updating order:', error);
//                 }
//             );
//         }
//     }

//     deleteOrder() {
//         if (this.orderId) {
//             if (confirm('Are you sure you want to delete this order?')) {
//                 this.orderService.deleteOrder(this.orderId).subscribe(
//                     () => {
//                         console.log('Order Deleted Successfully!');
//                         this.router.navigate(['/orders']);
//                     },
//                     error => {
//                         console.error('Error deleting order:', error);
//                     }
//                 );
//             }
//         }
//     }
// }
