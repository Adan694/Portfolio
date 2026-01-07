import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects = [
    {
      name: "Doctor Appointment Booking System",
      description: "A full-stack healthcare platform for seamless appointment booking. Features real-time scheduling, automated reminders etc.",
      techStack: "Angular, TypeScript, Node.js, Express, MongoDB",
      github: "https://github.com/Adan694/DABS-Angular.git",
      demo: "https://fyp-sage.vercel.app/",
      fullstack: true
    },
    {
      name: "Wallpapers Website",
      description: "Modern wallpaper discovery platform with advanced search and filtering. Includes user authentication, favorites collection, and responsive design for all devices.",
      techStack: "Angular, TypeScript, .NET Core, REST API",
      github: "https://github.com/Adan694/WallPaperApp.git",
      demo: null,
      fullstack: true
    },
    {
      name: "Portfolio Website",
      description: "Modern portfolio with smooth animations and dark/light mode toggle. Features optimized performance and interactive projects.",
      techStack: "Angular, TypeScript, HTML, SCSS",
      github: "https://github.com/Adan694/Portfolio.git",
      demo: "portfolio-adan694s-projects.vercel.app",
      fullstack: true
    },
    {
      name: "Pharmacy Management System",
      description: "Enterprise pharmacy solution for inventory and sales management.",
      techStack: "Angular, TypeScript, .NET Core, SQL Server",
      github: "https://github.com/Adan694/Pharmacy-Management-System.git",
      demo: null,
      fullstack: true
    }
  ];
}