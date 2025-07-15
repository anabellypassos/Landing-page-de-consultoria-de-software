import { Component } from '@angular/core';
import { BntPrimaryComponent } from '../bnt-primary/bnt-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  standalone: true, // Add this flag
  imports: [BntPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm: FormGroup; // No need for '!' if initialized in the constructor

  constructor() {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }



}
