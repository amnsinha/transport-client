import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartyService } from '../../../../shared/services/party.service';
import { Party } from '../../../../models/Party';

@Component({
  selector: 'app-client-management',
  templateUrl: './addClient.component.html',
  styleUrls: ['./addClient.component.css']
})
export class AddClientComponent {
  clientForm: FormGroup;
  clients: Party[] = [];
  editId: number | null = null;

  constructor(private fb: FormBuilder, private partyService: PartyService) {
    this.clientForm = this.fb.group({
      partyName: ['', Validators.required],
      ownerName: ['', Validators.required],
      ownerNumber: ['', [Validators.required, Validators.pattern('^\\d{10}$')]] // Change contactNo to ownerNumber
    });
    
    this.fetchClients();
  }

  fetchClients() {
    this.partyService.getAllParties().subscribe((data) => {
      this.clients = data;
    });
  }

  submitClient() {
    if (this.clientForm.valid) {
      const clientData = this.clientForm.value;
      if (this.editId !== null) {
        this.partyService.updateParty(this.editId, clientData).subscribe(() => {
          this.fetchClients();
          this.editId = null;
        });
      } else {
        this.partyService.createParty(clientData).subscribe(() => {
          this.fetchClients();
        });
      }
      this.clientForm.reset();
    }
  }

  editClient(client: Party) {
    this.editId = client.id;
    this.clientForm.patchValue(client);
  }

  deleteClient(id: number) {
    this.partyService.deleteParty(id).subscribe(() => {
      this.fetchClients();
    });
  }
}
