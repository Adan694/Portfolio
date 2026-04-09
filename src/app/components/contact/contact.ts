import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  @ViewChild('contactForm') contactForm!: ElementRef;
  
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  private readonly EMAILJS_PUBLIC_KEY = '10_aVByKcsOktiTM1';
  private readonly EMAILJS_SERVICE_ID = 'service_uel98mq';
  private readonly EMAILJS_TEMPLATE_ID = 'template_02a1b56';

  constructor() {
    emailjs.init({
      publicKey: this.EMAILJS_PUBLIC_KEY,
    });
  }

  async sendEmail(event: Event) {
    event.preventDefault();
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      // Use sendForm instead of send
      const response = await emailjs.sendForm(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        this.contactForm.nativeElement,
        {
          publicKey: this.EMAILJS_PUBLIC_KEY,
        }
      );
      
      console.log('SUCCESS!', response);
      this.submitStatus = 'success';
      this.formData = { name: '', email: '', message: '' };
      this.contactForm.nativeElement.reset();
      
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
      
    } catch (error) {
      console.error('FAILED:', error);
      this.submitStatus = 'error';
      
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}