import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  // Simulating backend data
  questions = [
    { type: 'T', label: 'Full Name', name: 'fullName', inputType: 'text', required: true },
    { type: 'T', label: 'Company Name', name: 'company', inputType: 'text' },

  
    {
      type: 'R',
      label: 'What best describes your business?',
      name: 'businessType',
      required: true,
      options: [
        'Waste Management Company',
        'Bio-Gas Plant Operator',
        'Agricultural Business',
        'Renewable Energy Consultant',
        'Other'
      ]
    },
  { type: 'T', label: 'Phone Number', name: 'phone', inputType: 'text' },
   { type: 'T', label: 'Business Email Address', name: 'email', inputType: 'email', required: true },
    {
      type: 'C',
      label: 'Which features are you most interested in?',
      name: 'features',
      options: [
        'Plant logistics & operations tracking',
        'Cost analytics and reporting',
        'Mobile operations',
        'Procurement & raw material tracking',
        'Secure data platform',
        'End-to-end automation'
      ]
    },

    {
      type: 'R',
      label: 'Approximate size of your operation?',
      name: 'operationSize',
      options: [
        'Small (1–2 plants)',
        'Medium (3–5 plants)',
        'Large (6+ plants)',
        'Just getting started'
      ]
    },

    {
      type: 'R',
      label: 'When do you plan to implement a new digital system?',
      name: 'timeline',
      options: [
        'Immediately',
        'Within 1–3 months',
        'Within 6 months',
        'Just exploring'
      ]
    },

    { type: 'T', label: 'Any specific goals or challenges you’d like to address?', name: 'goals', inputType: 'textarea' },

    {
      type: 'R',
      label: 'Preferred method of follow-up:',
      name: 'followUp',
      options: [
        'Email',
        'Phone',
        'WhatsApp',
        'Video Demo'
      ]
    }
  ];

  formData: { [key: string]: any } = {};

  // Add or remove checkboxes from formData
  onCheckboxChange(event: Event, name: string) {
    const input = event.target as HTMLInputElement;
    if (!this.formData[name]) {
      this.formData[name] = [];
    }

    if (input.checked) {
      this.formData[name].push(input.value);
    } else {
      this.formData[name] = this.formData[name].filter((val: string) => val !== input.value);
    }
  }

  // Optional: mark full-width fields for layout
  isFullWidth(question: any): boolean {
    return question.type !== 'T' || question.inputType === 'textarea';
  }

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    alert('Form submitted successfully!');
    // You can send `this.formData` to your backend here
  }
}
