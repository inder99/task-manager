import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { TaskService } from './services/task.service';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MastHeaderComponent } from './common/mast-header/mast-header.component';
import { MastFooterComponent } from './common/mast-footer/mast-footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskFormComponent } from './task-manager/task-form/task-form.component';
import { TaskListComponent } from './task-manager/task-list/task-list.component';
import { TaskItemComponent } from './task-manager/task-list/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    LoginFormComponent,
    MastHeaderComponent,
    MastFooterComponent,
    RegisterFormComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
