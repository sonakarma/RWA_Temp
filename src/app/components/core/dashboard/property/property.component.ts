import { Component, OnInit,Output, Input, ViewChild,EventEmitter } from '@angular/core';
import { MatDialog,MatPaginator } from '@angular/material';
import { merge as observableMerge, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-property',
	templateUrl: './property.component.html',
	styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
	@ViewChild('tabGroup') tabGroup;
	propertyDataOptions = [];
	propertySpinner =false;
	asset =['01','02' , '03'];
	property :any;
	pageIndex : number = 0;
	pageSize : number = 5;
	ncmListSpinner = false;

constructor( private route: ActivatedRoute,
	private router: Router) { }

ngOnInit() {
	this.getPropertyData()
}

dataPaginatorChange(event){
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
	}

getPropertyData() {
	this.ncmListSpinner = true;
	this.property = [
		{
			"name":"C V Raman Nagar",
			"location":"C V Raman Nagar,Banglore",
			"status":"OPEN",
			"area" : "10 acres",
			"dateOfAssesment":"22/02/2019"
		}
	]

	console.log(this.property,"dsddddddddddddd")
	console.log(this.propertyDataOptions,"propertyDataOptions")

	if(this.property.length > 0){
		this.propertyDataOptions = [
			{
				title: 'User Name', type: 'list', list: [
				{ title: 'UserName', key: 'name', hideTitle: true, type: 'label' },
				{ title: 'location', key: 'location', hideTitle: true, type: 'label' },
				{ title: 'status', key: 'status', hideTitle: true, type: 'label', isStatus: true }
				]
			},
			{ title: 'Area', key: 'area' },
			{ title: 'Date Of Assesment', key: 'dateOfAssesment' },
		]
		this.ncmListSpinner = false;
		console.log(this.propertyDataOptions,"dsddddddddddddd")
	}
}

	tabSwitch(tabReq) {
	this.tabGroup.selectedIndex = tabReq.index;
	this.getPropertyData()
   }
}