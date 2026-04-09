import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';  // ✅ Correct import

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
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
    // ✅ Correct initialization for v3+
    emailjs.init({
      publicKey: this.EMAILJS_PUBLIC_KEY,
    });
    console.log('EmailJS initialized');
  }

  async sendEmail(event: Event) {
    event.preventDefault();
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      // ✅ For v3+, don't pass publicKey separately
      const response = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message,
        }
      );
      
      console.log('SUCCESS!', response);
      this.submitStatus = 'success';
      this.formData = { name: '', email: '', message: '' };
      
      setTimeout(() => this.submitStatus = 'idle', 5000);
      
    } catch (error) {
      console.error('FAILED:', error);
      this.submitStatus = 'error';
      setTimeout(() => this.submitStatus = 'idle', 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}