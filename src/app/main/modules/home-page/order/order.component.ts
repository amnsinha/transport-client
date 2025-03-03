import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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

import { debounceTime, distinctUntilChanged, Subject } from "rxjs";

@Component({
  selector: "app-order-form",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  orders: Order[] = [];
  parties: Party[] = [];
  routeLocations: RouteLocation[] = [];
  trucks: Trucks[] = [];
  drivers: Driver[] = [];
  orderId?: number | null;
  editingOrderId: number | null | undefined = null;
  filteredParties: any[] = []; 
  filteredOrigins: any[] = [];
  filteredDestinations: any[] = [];
  filteredTrucks: any[] = [];
  showPartySuggestions: boolean = false;
  showOriginSuggestions: boolean = false;
  showDestinationSuggestions: boolean = false;
  showTruckSuggestions: boolean = false; 

  private debounceTimer: any; 

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private partyService: PartyService,
    private trucksService: TrucksService,
    private driverService: DriverService,
    private routeLocationService: RouteLocationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      this.orderId = id ? Number(id) : undefined;
      if (this.orderId) {
        this.loadOrderById(this.orderId);
      } else {
        this.autoGenerateOrderId();
      }
    });

    this.loadData();
  }

  createForm() {
    this.orderForm = this.fb.group({
      orderId: ["", Validators.required],
      party: ["", Validators.required],
      origin: ["", Validators.required],
      destination: ["", Validators.required],
      freightWeight: ["", [Validators.required, Validators.min(1)]],
      assignedTruck: ["", Validators.required],
      assignedDriver: ["", Validators.required],
      status: ["", Validators.required],
      commissionAmount: ["", Validators.required],
      approvedBy: ["", Validators.required],
      clearance: ["", Validators.required],
      incharge: ["", Validators.required],
    });
  }

  autoGenerateOrderId() {
    const timestamp = Date.now();
    const randomString = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    this.orderForm.patchValue({ orderId: `ATC${randomString}${timestamp}` });
  }

  // Hide suggestions with a slight delay after input loses focus
  hideSuggestionsWithDelay() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      this.showPartySuggestions = false;
    }, 200); // Delay time before hiding
  }
  hideOriginSuggestionsWithDelay() {
    setTimeout(() => {
      this.showOriginSuggestions = false;
    }, 200);
  }
  
  // Optionally, add a 'blur' event handler to clear suggestions when the user clicks outside
  onBlur() {
    this.showPartySuggestions = false;
    this.showDestinationSuggestions = false;
    this.showOriginSuggestions= false;
    this.showTruckSuggestions = false; // Hide the suggestions after selection
  }

  filterParties(event: Event) {
    const input = event.target as HTMLInputElement; // Cast the event target to an HTMLInputElement
    const filterValue = input.value.toLowerCase(); // Get the input value and convert it to lowercase
    // Filter parties based on partyName and ownerNumber
    this.filteredParties = this.parties.filter(
      (party) =>
        party.partyName.toLowerCase().includes(filterValue) ||
        party.ownerNumber.toLowerCase().includes(filterValue)
    );

    // Show party suggestions when there is input
    this.showPartySuggestions = filterValue.length > 0;
  }

  filterOrigins(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredOrigins = this.routeLocations.filter(origin =>
      origin.locationName.toLowerCase().includes(query)
    );
  }

  filterDestinations(event: Event) {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.toLowerCase();
    this.filteredDestinations = this.routeLocations.filter((location) =>
      location.locationName.toLowerCase().includes(filterValue)
    );
  }
  filterTrucks(event: Event) {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.toLowerCase();
    this.filteredTrucks = this.trucks.filter((truck) =>
      truck.truckNumber.toLowerCase().includes(filterValue)
    );
  }
  selectOrigin(origin: any) {
    this.orderForm.patchValue({ origin: origin.id });
    this.showOriginSuggestions = false;
  }

  selectDestination(destination: any) {
    this.orderForm.patchValue({ destination: destination.id });
    this.showDestinationSuggestions = false;
  }

  // Function to select a truck from the list
  selectTruck(truck: any) {
    this.orderForm.patchValue({ assignedTruck: truck.id });
    this.showTruckSuggestions = false;
  }
  // Function to select a party from the list
  selectParty(party: any) {
    this.orderForm.patchValue({ party: party.id }); // Set the form control with the selected party name
    this.showPartySuggestions = false; // Hide suggestions after selection
  }

  getPartyName(): string {
    const selectedPartyId = this.orderForm.value.party;
    const selectedParty = this.parties.find(
      (party) => party.id === selectedPartyId
    );
    return selectedParty
      ? selectedParty.partyName || selectedParty.ownerNumber
      : "";
  }
  getOriginName() : string {
    const selectedOriginId = this.orderForm.value.origin;
    const selectedOrigin = this.routeLocations.find(
      (origin) => origin.id === selectedOriginId
    );
    return selectedOrigin ? selectedOrigin.locationName : "";
  }
  getDestinationName(): string {
    const selectedDestinationId = this.orderForm.value.destination;
    const selectedDestination = this.routeLocations.find(
      (location) => location.id === selectedDestinationId
    );
    return selectedDestination ? selectedDestination.locationName : "";
  }

  getTruckName(): string {
    const selectedTruckId = this.orderForm.value.assignedTruck;
    const selectedTruck = this.trucks.find(
      (truck) => truck.id === selectedTruckId
    );
    return selectedTruck ? selectedTruck.truckNumber : "";
  }

  loadData() {
    this.orderService
      .getAllOrders()
      .subscribe((orders) => (this.orders = orders));
    this.partyService
    .getAllParties()
    .subscribe((parties) => { this.parties = parties;
      this.filteredParties = this.parties; // Initially, show all parties
    });
    this.trucksService
      .getAllTrucks()
      .subscribe((trucks) => (this.trucks = trucks));
    this.driverService
      .getAllDrivers()
      .subscribe((drivers) => (this.drivers = drivers));
    this.routeLocationService
      .getAllRouteLocations()
      .subscribe((locations) => (this.routeLocations = locations));
  }

  loadOrderById(orderId: number) {
    this.orderService.getOrderById(orderId).subscribe(
      (order: Order) => {
        this.orderId = order.id;
        this.orderForm.patchValue({
          orderId: order.orderId,
          party: order.party.id,
          origin: order.origin.id,
          destination: order.destination.id,
          freightWeight: order.freightWeight,
          assignedTruck: order.assignedTruck.id,
          assignedDriver: order.assignedDriver.id,
          status: order.status,
          commissionAmount: order.commissionAmount,
          approvedBy: order.approvedBy,
          clearance: order.clearance,
          incharge: order.incharge,
        });
        this.refreshOrderList();
      },
      (error) => console.error("Error fetching order:", error)
    );
  }
  refreshOrderList() {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders; // Update the list with new data
      },
      (error) => console.error("Error fetching orders:", error)
    );
}
  confirmDeleteOrder(orderId: number) {
    if (confirm("Are you sure you want to delete this order?")) {
      this.deleteOrder(orderId);
    }
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const orderPayload: any = {
        orderId: this.orderForm.value.orderId,
        party: { id: Number(this.orderForm.value.party) } as Party,
        origin: { id: Number(this.orderForm.value.origin) } as RouteLocation,
        destination: {
          id: Number(this.orderForm.value.destination),
        } as RouteLocation,
        freightWeight: Number(this.orderForm.value.freightWeight),
        assignedTruck: {
          id: Number(this.orderForm.value.assignedTruck),
        } as Trucks,
        assignedDriver: {
          id: Number(this.orderForm.value.assignedDriver),
        } as Driver,
        status: this.orderForm.value.status,
        commissionAmount: this.orderForm.value.commissionAmount,
        approvedBy: this.orderForm.value.approvedBy,
        clearance: this.orderForm.value.clearance,
        incharge: this.orderForm.value.incharge,
      };

      if (this.orderId) {
        this.orderService.updateOrder(this.orderId, orderPayload).subscribe(
          () => {
            this.refreshOrderList(); // 🔄 Fetch latest order list
            this.router.navigate(["/orders"]);
          },
          (error) => console.error("Error updating order:", error)
        );
      } else {
        this.orderService.createOrder(orderPayload).subscribe(
          (newOrder) => {
            this.refreshOrderList(); // 🔄 Fetch latest order list
            this.router.navigate(["/orders"]);
          },
          (error) => console.error("Error creating order:", error)
        );
      }
    }
  }

  editOrder(order: Order) {
    this.editingOrderId = order.id;
    this.orderForm.patchValue({
      orderId: order.orderId,
      party: order.party.id,
      origin: order.origin.id,
      destination: order.destination.id,
      freightWeight: order.freightWeight,
      assignedTruck: order.assignedTruck.id,
      assignedDriver: order.assignedDriver.id,
      status: order.status,
      commissionAmount: order.commissionAmount,
      approvedBy: order.approvedBy,
      clearance: order.clearance,
      incharge: order.incharge,
    });
  }

  cancelEdit() {
    this.resetForm();
  }

 deleteOrder(orderId: number) {
  if (confirm("Are you sure you want to delete this order?")) {
    this.orderService.deleteOrder(orderId).subscribe(
      () => {
        this.refreshOrderList(); // 🔄 Fetch latest order list
      },
      (error) => console.error("Error deleting order:", error)
    );
  }
}


  resetForm() {
    this.orderForm.reset();
    this.orderId = undefined;
    this.editingOrderId = null;
  }

  compareById(optionValue: any, selectedValue: any): boolean {
    return optionValue === selectedValue;
  }
}
