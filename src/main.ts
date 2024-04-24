import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes),
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
}).catch((err) => console.error(err));
