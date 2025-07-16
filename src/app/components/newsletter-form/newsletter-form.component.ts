import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BntPrimaryComponent } from '../bnt-primary/bnt-primary.component';
import { NewsletterService } from '../../services/newsletter.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BntPrimaryComponent
  ],
  providers:[
    NewsletterService
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false)

  constructor(private service: NewsletterService ) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  // Método de submissão com o nome correto (onSubmit)
  onSubmit() {
    this.loading.set(true)
    if (this.newsletterForm.valid) {
      console.log('Formulário Válido! Enviando dados:', this.newsletterForm.value);
      this.service.sendData(this.newsletterForm.value.name,this.newsletterForm.value.email).subscribe({
       next: ()=>{
            this.newsletterForm.reset();
            this.loading.set(false);
       }

      })

    } else {
      console.error('Formulário inválido. Por favor, verifique os campos.');
      // Opcional: Marcar campos como "tocados" para exibir mensagens de erro
      this.newsletterForm.markAllAsTouched();
    }
  }
}
