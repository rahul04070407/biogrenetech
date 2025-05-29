import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit{

 shapes: { type: string, style: any, class: string }[] = [];

  ngOnInit() {
    const totalShapes = 15;
    for (let i = 0; i < totalShapes; i++) {
      const shapeType = this.getRandomShapeType();
      this.shapes.push({
        type: shapeType,
        class: this.getShapeClass(shapeType),
        style: this.getShapeStyle(shapeType),
      });
    }
  }

private getRandomShapeType(): string {
  const types = [
    'circle',
    'semi-circle',
    'triangle',
    'half-triangle',
    'curved-triangle',
    'kite',
    'hexagon',
    'half-hexagon'
  ];
  return types[Math.floor(Math.random() * types.length)];
}

private getShapeClass(type: string): string {
  switch (type) {
    case 'circle': return 'circle';
    case 'semi-circle': return 'circle half';
    case 'triangle': return 'triangle';
    case 'half-triangle': return 'triangle half';
    case 'curved-triangle': return 'triangle curved';
    case 'kite': return 'kite';
    case 'hexagon': return 'hexagon';
    case 'half-hexagon': return 'hexagon half';
    default: return '';
  }
}



private getShapeStyle(type: string): any {
  const top = `${Math.random() * 90}%`;
  const left = `${Math.random() * 90}%`;
  const rotation = `rotate(${Math.random() * 360}deg)`;
  const opacity = 0.15;

  if (type === 'circle' || type === 'semi-circle') {
    const size = 40 + Math.random() * 80;
    return {
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      transform: rotation,
      borderRadius: type === 'circle' ? '50%' : '0',
      background: type === 'circle' ? '#8bc34a' : '#aed581',
      clipPath: type === 'semi-circle' ? 'ellipse(50% 50% at 50% 100%)' : 'none'
    };
  }

  if (type === 'triangle') {
    const size = 50 + Math.random() * 80;
    const half = size / 2;
    return {
      top,
      left,
      width: '0',
      height: '0',
      opacity,
      transform: rotation,
      borderLeft: `${half}px solid transparent`,
      borderRight: `${half}px solid transparent`,
      borderBottom: `${size}px solid #4caf50`,
    };
  }

  if (type === 'curved-triangle') {
    const size = 60 + Math.random() * 60;
    return {
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      transform: rotation,
      background: '#66bb6a',
      clipPath: 'path("M 0 100 Q 50 0, 100 100 Z")',
    };
  }

  if (type === 'kite') {
    const size = 60 + Math.random() * 60;
    return {
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      transform: rotation,
      background: '#7cb342',
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    };
  }

  if (type === 'hexagon' || type === 'half-hexagon') {
    const width = 80 + Math.random() * 40;
    const height = width * 0.55;
    return {
      top,
      left,
      width: `${width}px`,
      height: `${height}px`,
      opacity,
      transform: rotation,
      background: type === 'hexagon' ? '#558b2f' : '#9ccc65',
      clipPath: type === 'hexagon'
        ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
        : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)',
    };
  }

  return {};
}

  // Simulating backend data
  questions = [
    { type: 'T', label: 'Full Name', name: 'fullName', inputType: 'text', required: true },
    { type: 'T', label: 'Company Name', name: 'company', inputType: 'text' },
    { type: 'T', label: 'Phone Number', name: 'phone', inputType: 'text' },
    { type: 'T', label: 'Business Email Address', name: 'email', inputType: 'email', required: true },


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
