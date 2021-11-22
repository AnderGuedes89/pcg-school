import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, NotFoundComponent, ConfirmDialogComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class SharedModule {}
