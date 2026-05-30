# Personal Portfolio Website

A responsive personal portfolio website built with Angular to showcase skills, projects, and professional experience. Includes EmailJS integration for direct contact form submissions.

## Features

- Responsive design for desktop, tablet, and mobile devices
- Contact form with EmailJS integration for sending messages directly to email
- Project showcase section with links to GitHub repositories
- Skills and technologies display
- Professional experience and education section
- Social media and GitHub profile links
- Deployed on Vercel for fast and reliable hosting

## Tech Stack

Frontend: Angular, TypeScript, HTML, SCSS
Email Service: EmailJS
Hosting: Vercel

## Live Demo

https://portfolio-alpha-nine-3r7e4twqr1.vercel.app/

## Project Structure

portfolio/
├── src/
│   ├── app/           # Angular components and services
│   ├── assets/        # Images, fonts, and static files
│   └── styles/        # SCSS stylesheets
├── public/            # Public assets
├── .editorconfig      # Editor configuration
├── .gitignore         # Git ignore rules
├── angular.json       # Angular CLI configuration
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vercel.json        # Vercel deployment configuration
└── README.md          # Project documentation

## Installation

Prerequisites: Node.js (v14 or higher), Angular CLI

Clone the repository:
git clone https://github.com/Adan694/Portfolio.git
cd Portfolio

Install dependencies:
npm install

Run development server:
ng serve

Open your browser at http://localhost:4200

## Build for Production

ng build --prod

The build artifacts will be stored in the dist/ directory.

## Deployment

This project is configured for deployment on Vercel. The vercel.json file contains the build settings:

{
  "buildCommand": "ng build --prod",
  "outputDirectory": "dist/portfolio",
  "devCommand": "ng serve",
  "installCommand": "npm install"
}

To deploy your own instance:
1. Push code to GitHub repository
2. Import the repository on Vercel
3. Vercel automatically detects Angular and uses the configuration
4. Add EmailJS environment variables if needed

## EmailJS Configuration

The contact form uses EmailJS. To configure:
1. Create an account on EmailJS
2. Create an email service and template
3. Add your Public Key, Service ID, and Template ID to the email service configuration in the code

## Author

Amna Shehzad

GitHub: https://github.com/Adan694
LinkedIn: https://linkedin.com/in/amna-shehzad-373bba361
Email: ashehzad0100@gmail.com
