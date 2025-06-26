import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

type BtnVariants = "primary"| "secundary";
@Component({
  selector: 'app-bnt-primary',
  imports: [
    CommonModule
  ],
  templateUrl: './bnt-primary.component.html',
  styleUrl: './bnt-primary.component.scss'
})
export class BntPrimaryComponent {
@Input("btn-text") btnText: string = "";
@Input()disabled: boolean = false;
@Input()loading: boolean = false;
@Input()variant : BtnVariants = "primary";
@Output("submit")onSubmit = new EventEmitter();

submit(){
  this.onSubmit.emit();

}
}
