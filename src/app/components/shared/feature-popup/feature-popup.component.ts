import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-feature-popup',
  templateUrl: './feature-popup.component.html',
  styleUrls: ['./feature-popup.component.scss']
})
export class FeaturePopupComponent implements OnInit {
  /*selectFeature : any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public allFeatures: any,
    public dialogRef: MatDialogRef<FeaturePopupComponent>,) {}
  
  ngOnInit() {
    console.log('data', this.allFeatures)
  }

  onCancel() {
    this.dialogRef.close();
    
  }

  changeEvent(event) {
    this.selectFeature = event.source.value;
  }

  saveFeature() {
    this.dialogRef.close(this.allFeatures)
    console.log(this.allFeatures, 'this.allFeatures')
  }*/

 constructor() {}
  
  ngOnInit() {
  }

}
