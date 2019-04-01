import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-project-drop-down',
	templateUrl: './project-drop-down.component.html',
	styleUrls: ['./project-drop-down.component.scss']
})
export class ProjectDropDownComponent implements OnInit {
	projectlist: any;
	orgId: string;
	selectedProj: any;
	authUserOrganisation : any;

	constructor(
		private snackBar : MatSnackBar) { }
	@Output() selectProjects = new EventEmitter();
	ngOnInit() {
	}

	getProjectListinIt() {
		this.projectlist = [
         {
         	name : "test1"
         },
         {
         	name : "test2"
         }
		]
	}

	projectChanged(proj) {
		/*if (proj) {
          this.fileForm.get('formProject').setValue(proj);
        }
        if (res.length > 0) {
          this.projectlist = res;
        } else {
          // this.snackBar.open('No data found', 'project', {
          //   duration: 2000,
          // });
        }*/
		if(proj) {
			this.selectProjects.emit(proj)
		}
	}
}
