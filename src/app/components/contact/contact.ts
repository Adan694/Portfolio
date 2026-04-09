import { Component } from '@angular/core';
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
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  // 🔴 REPLACE THESE THREE VALUES WITH YOUR ACTUAL EmailJS CREDENTIALS 🔴
  private readonly EMAILJS_PUBLIC_KEY = '10_aVByKcsOktiTM1';      // Get from: Account → API Keys
  private readonly EMAILJS_SERVICE_ID = 'service_uel98mq';      // Get from: Email Services page
  private readonly EMAILJS_TEMPLATE_ID = 'template_02a1b56';    // Get from: Email Templates page

  async sendEmail(event: Event) {
    event.preventDefault();
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          from_name: this.formData.name,      // Must match {{from_name}} in template
          from_email: this.formData.email,    // Must match {{from_email}} in template
          message: this.formData.message      // Must match {{message}} in template
        },
        this.EMAILJS_PUBLIC_KEY
      );
      
      this.submitStatus = 'success';
      this.formData = { name: '', email: '', message: '' };
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      this.submitStatus = 'error';
      
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}