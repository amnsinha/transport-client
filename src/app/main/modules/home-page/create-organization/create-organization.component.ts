import {Component, OnInit} from '@angular/core';
import {OrganisationService} from "../../../service/organisation.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  index: number = 0;
  logoFile: any[] = [];
  uploadedFiles: any[] = [];
  organisations: any = [];
  singleOrganisation: any = {};

  constructor(private organisationService: OrganisationService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.organisationService.getOrganisationsByUserId(this.cookieService.get('userId')).subscribe((res: any) => {
      this.organisations = res;
    });
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  onUploadLogo(event: any) {
    for (let file of event.files) {
      this.logoFile.push(file);
    }
  }

  create(form: any) {
    console.log(this.uploadedFiles);
    console.log(form.files);
    console.log(form.files[0]);
    console.log(form.files[1]);


    this.singleOrganisation.uniqueUserId = this.cookieService.get('userId');
    if (form.invalid) {
      return;
    }
 /*   this.organisationService.createOrganisation(this.singleOrganisation)
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            alert("Organisation Created Successfully");
          } else {
            alert("Something happened wrong");
          }
        },
        error => {
          console.log(error);
        });*/
  }
  populateOrganisation(item: any) {
    this.singleOrganisation = item;
  }
}
