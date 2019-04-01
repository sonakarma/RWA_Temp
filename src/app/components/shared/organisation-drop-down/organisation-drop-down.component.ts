import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-organisation-drop-down',
  templateUrl: './organisation-drop-down.component.html',
  styleUrls: ['./organisation-drop-down.component.scss']
})
export class OrganisationDropDownComponent implements OnInit {
organizations: any;
selectedOrg: any;
constructor() { }
  @Output() selectOrganizaion = new EventEmitter();
  ngOnInit() {
    //this.getOrganiztions()
  }

 /* getOrganiztions() {
    this.organisationService.getOrganization()
      .pipe().subscribe(res => {
        this.selectedOrg = res[0];
        this.organizations = res;
        this.selectOrganizaion.emit(this.selectedOrg)
      }, (error: any) => {
        console.log('error', error);
      })
  }*/

  organizationChanged(org) {
    if(org) {
     this.selectOrganizaion.emit(org)
    }
  }

}
