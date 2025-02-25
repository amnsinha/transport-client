import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartyService } from '../../../../shared/services/party.service';
import { Party } from '../../../../models/Party';

@Component({
  selector: 'app-add-client',
  templateUrl: './addClient.component.html',
  styleUrls: ['./addClient.component.css']
})
export class AddClientComponent {
  clientForm: FormGroup;
  clients: Party[] = [];
  editingClientId: number | null = null; // Store ID instead of index

  constructor(private fb: FormBuilder, private partyService: PartyService) {
    this.clientForm = this.fb.group({
      partyName: ['', Validators.required],
      ownerName: ['', Validators.required],
      ownerNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
    this.fetchClients();
  }

  fetchClients() {
    this.partyService.getAllParties().subscribe(
      (data) => (this.clients = data),
      (error) => console.error('Error fetching clients:', error)
    );
  }

  submitClient() {
    if (this.clientForm.invalid) return;

    const clientData: Party = { ...this.clientForm.value, id: this.editingClientId ?? 0 };

    this.partyService.saveParty(clientData).subscribe(
      (savedClient) => {
        if (this.editingClientId !== null) {
          const index = this.clients.findIndex((c) => c.id === this.editingClientId);
          if (index !== -1) this.clients[index] = savedClient;
        } else {
          this.clients.push(savedClient);
        }
        this.resetForm();
      },
      (error) => console.error('Error saving client:', error)
    );
  }

  editClient(client: Party) {
    this.editingClientId = client.id;
    this.clientForm.patchValue(client);
  }

  cancelEdit() {
    this.resetForm();
  }

  deleteClient(clientId: number) {
    this.partyService.deleteParty(clientId).subscribe(
      () => {
        this.clients = this.clients.filter((c) => c.id !== clientId);
        if (this.editingClientId === clientId) this.resetForm();
      },
      (error) => console.error('Error deleting client:', error)
    );
  }

  private resetForm() {
    this.editingClientId = null;
    this.clientForm.reset();
  }
}
