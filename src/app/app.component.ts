import { Component, Input, OnChanges,SimpleChange } from '@angular/core';
//import { FormControlDirective } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
form ;
ngOnInit() {
  this.form =  new FormGroup({
  decimal : new FormControl(""),
  binary : new FormControl(""),
  octal : new FormControl(""),
  hexa : new FormControl("")
});
}
decimalChanged = function(oldValue, newValue) {
if(newValue!= ""){
this.form.patchValue ({binary :parseInt(newValue, 10).toString(2)});
this.form.patchValue ({octal :parseInt(newValue, 10).toString(8)});
this.form.patchValue ({hexa :parseInt(newValue, 10).toString(16).toUpperCase()});
  }
  else if(newValue == ""){
    this.form.patchValue ({binary :""});
    this.form.patchValue ({octal :""});
    this.form.patchValue ({hexa :""});
  }
}

bi = 0;
oc = 0; 
he = 0;

binaryChanged = function(oldValue, newValue) {
  this.bi = this.bi + 1;
  if(this.bi == 1){
    if(newValue != ""){
      this.form.patchValue({decimal: parseInt(newValue, 2).toString(10)});
    }
    else if(newValue == ""){
      this.form.patchValue({decimal : ""});
    }
    this.bi = 0;
  }
}

octalChanged = function(oldValue, newValue) {
  this.oc = this.oc + 1;
  if(this.oc == 1){
    if(newValue != ""){
      this.form.patchValue({decimal: parseInt(newValue, 8).toString(10)});
    }
    else if(newValue == ""){
      this.form.patchValue({decimal : ""});
    }
    this.oc = 0;
  }
}

hexaChanged = function(oldValue, newValue) {
  this.he = this.he + 1;
  if(this.he == 1){
    if(newValue != ""){
      this.form.patchValue({decimal: parseInt(newValue, 16).toString(10)});
    }
    else if(newValue == ""){
      this.form.patchValue({decimal : ""});
    }
    this.he = 0;
  }
}

}

