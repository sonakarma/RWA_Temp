import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	userAuth : any;
	userName : any;
	userImage : any;

	notifications = [
	  { 
	  	"id" : "1" ,
			"message" : "Text here with the basic information of the message" ,
			"date" : "12/01/2018",
			"time" : "11.00am"
	  },
	  { 
	  	"id" : "2" ,
			"message" : "Text here with the basic information of the message" ,
			"date" : "12/01/2018",
			"time" : "8.25pm"
	  },
	  { 
	  	"id" : "3" ,
			"message" : "Text here with the basic information of the message" ,
			"date" : "12/01/2018",
			"time" : "9.00am"
	  },
	  { 
	  	"id" : "4" ,
			"message" : "Text here with the basic information of the message" ,
			"date" : "12/01/2018",
			"time" : "8.00am"
	  }
	]

  	constructor(){}

  	ngOnInit() {
  	}
}
