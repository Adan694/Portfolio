import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common'; // Needed for *ngFor

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'], // <-- fixed
})
export class Projects {
  projects = [
   {
      name: "Doctor Appointment Booking System",
      description: "A Full-stack Appointment booking system built with Angular and NodeJS (Express).",
      github: "https://github.com/Adan694/DABS-Angular.git",
      demo: "https://fyp-sage.vercel.app/",
      fullstack: true
    },
     {
      name: "Wallpapers Website",
      description: "A modern Wallpaper website built with Angular and .NET Core.",
      github: "https://github.com/Adan694/WallPaperApp.git",
demo: null,
  fullstack: true    },
    {
      name: "Portfolio Website",
      description: "A modern portfolio website built with Angular.",
      github: "https://github.com/Adan694/Portfolio.git",
demo: null,
  fullstack: true    },
    {
      name: "Pharmacy Management System",
      description: "A full-stack pharmacy management system with Angular and .NET Core.",
      github: "https://github.com/Adan694/Pharmacy-Management-System.git",
demo: null,
  fullstack: true    }
  ];
}
