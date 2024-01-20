// src/app/modules/register/register.module.ts
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@NgModule({
  declarations: [RegisterComponent],
  imports: [FormsModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
