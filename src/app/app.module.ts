/*
 * NgModule is the foundation for organizing and structuring Angular apps. It helps
 * Angular understand how to assemble the app by specifying its building blocks (modules)
 * and their interactions.
 *
 * NgModule acts as a container or blueprint for the app. Angular applications typically
 * have at least one root NgModule, AppModule, which bootstraps the app and wires
 * everything up. You can also have multiple NgModules for organizing different features
 * or parts of your application.
 *
 * In summary, NgModule is crucial for Angular, as it manages and organizes the app's
 * building blocks, making it easier for Angular to understand the app's structure and
 * how its components, services, and other parts should work together.
 */
import { NgModule } from '@angular/core';

//The BrowserModule block helps make sure your app works correctly in web browsers. its very important for Angular applications because it provides the necessary tools and features for your app to run in a web browser environment. It contains the foundational components and services required to interact with the DOM (Document Object Model) and manage events in the browser. --> Browsermodule comes from NgModule
import { BrowserModule } from '@angular/platform-browser';

//Forms are like the little doors and windows that people can interact with to enter information. The FormsModule block helps you easily create these forms and manage the user input. You're getting this block from the '@angular/forms' bag of blocks.
import { FormsModule } from '@angular/forms';

/*
 * Importing the AppComponent from './app.component' file.
 * AppComponent is the main component in our Angular application, responsible for
 * controlling the user interface and orchestrating the interactions between various
 * parts of the app. By importing AppComponent, we're making it available for use
 * within our application.
 */
import { AppComponent } from './app.component';
import { ManualComponent } from './manual/manual.component';
import { AutomaticComponent } from './automatic/automatic.component';
import { ClassComponentComponent } from './class-component/class-component.component';

@NgModule({
  declarations: [AppComponent, ManualComponent, AutomaticComponent, ClassComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
