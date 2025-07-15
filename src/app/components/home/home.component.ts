import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BntPrimaryComponent } from "../bnt-primary/bnt-primary.component";
import { NewsletterFormComponent } from "../newsletter-form/newsletter-form.component";

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    HeaderComponent, NgOptimizedImage,
    BntPrimaryComponent,
    NewsletterFormComponent
],
  providers:[],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
