import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
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

  ngOnInit() {
    // THIS IS IMPORTANT - Initialize EmailJS
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized successfully'); // Check console for this
  }

  async sendEmail(event: Event) {
    event.preventDefault();
    
    // Check if form is empty
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      console.error('Form fields are empty');
      this.submitStatus = 'error';
      return;
    }
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    console.log('Sending email with data:', {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message
    });

    try {
      // DO NOT pass the public key here since we already initialized it
      const response = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message
        }
        // ❌ REMOVED: this.EMAILJS_PUBLIC_KEY from here
      );
      
      console.log('SUCCESS! Email sent:', response);
      this.submitStatus = 'success';
      this.formData = { name: '', email: '', message: '' };
      
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
      
    } catch (error) {
      console.error('FAILED to send email. Error details:', error);
      this.submitStatus = 'error';
      
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}