import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  @Input() data: any;
  @Input() formType: string;
  @Output() public tabSwitch: EventEmitter<any> = new EventEmitter<any>();
  @Output() public updateRefresh: EventEmitter<any> = new EventEmitter<any>();

  
	changeHistory = false;
	histroy={}




  dummyArray=[ 
  {
  	"type":"PDF1",
  	"name":"A001",
  	"createdBy":"narun",
  	"createdDate":"01/11/2019",
  	"version":"v1.0",

  	"change":{
	"modifiedDate":"14/02/2018",
  	"modifiedBy":"Narun",
  	"modifiedVersion":"v 0.1",
  	"aprrovedBy":"Sakhtivelu",
  	"comments":"Initial Draft"
}
  	
      
},
{
  	"type":"PDF2",
  	"name":"A001",
  	"createdBy":"narun",
  	"createdDate":"01/11/2019",
  	"version":"v1.0",

  	"change":{
	"modifiedDate":"14/02/2018",
  	"modifiedBy":"Roshan",
  	"modifiedVersion":"v 0.1",
  	"aprrovedBy":"Sakhtivelu",
  	"comments":"Initial Draft"
  	
      }
},
{
  	"type":"PDF3",
  	"name":"A001",
  	"createdBy":"narun",
  	"createdDate":"01/11/2019",
  	"version":"v1.0",

  	"change":{
	"modifiedDate":"14/02/2018",
  	"modifiedBy":"Sonal",
  	"modifiedVersion":"v 0.1",
  	"aprrovedBy":"Sakhtivelu",
  	"comments":"Initial Draft"
  	
      }
},
{
  	"type":"PDF4",
  	"name":"A001",
  	"createdBy":"narun",
  	"createdDate":"01/11/2019",
  	"version":"v1.0",

  	"change":{
	"modifiedDate":"14/02/2018",
  	"modifiedBy":"Mohit",
  	"modifiedVersion":"v 0.1",
  	"aprrovedBy":"Sakhtivelu",
  	"comments":"Initial Draft"
      
}
}

]





  constructor() { }

  ngOnInit() {
  }

orderView (v){

  this.histroy=v.change
 // console.log(this.histroy,"zdcfsfcdsfsffsfds")

  this.changeHistory = true;

}

}
