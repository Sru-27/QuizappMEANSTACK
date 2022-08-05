import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexnavComponent } from './index/indexnav/indexnav.component';
import { IndexheaderComponent } from './index/indexheader/indexheader.component';
import { IndexmainComponent } from './index/indexmain/indexmain.component';
import { LoginTeacherComponent } from './auth/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './auth/login-student/login-student.component';
import { TeacherGuard } from './teacher/teacher.guard';
import { StudentGuard } from './student/student.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';
import { TempComponent } from './index/temp/temp.component';
import { TComponent } from './index/t/t.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { TeachernavComponent } from './teacher/teachernav/teachernav.component';
import { StudentnavComponent } from './student/studentnav/studentnav.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { CreatequizComponent } from './teacher/createquiz/createquiz.component';
import { UploadquizComponent } from './teacher/uploadquiz/uploadquiz.component';
import { SeestudentsComponent } from './teacher/seestudents/seestudents.component';
import { AddquestionComponent } from './teacher/addquestion/addquestion.component';
import { NotfoundErrorComponent } from './error/notfound-error/notfound-error.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';
import { MsgboxComponent } from './msgbox/msgbox.component';
import { PlayquizComponent } from './student/playquiz/playquiz.component';
import { CheatingComponent } from './error/cheating/cheating.component';
// import { WebcamModule } from 'ngx-webcam';
//  import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    IndexnavComponent,
    IndexheaderComponent,
    IndexmainComponent,
    LoginTeacherComponent,
    LoginStudentComponent,
    ResetComponent,
    ResetPasswordComponent,
    ResetPasswordDoneComponent,
    TempComponent,
    TComponent,
    TeacherhomeComponent,
    TeachernavComponent,
    StudentnavComponent,
    StudenthomeComponent,
    CreatequizComponent,
    UploadquizComponent,
    SeestudentsComponent,
    AddquestionComponent,
    NotfoundErrorComponent,
    ServerErrorComponent,
    MsgboxComponent,
    PlayquizComponent,
    CheatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // WebcamModule,
    // RecaptchaMo
    // NgxCaptchaModule,
    BrowserAnimationsModule, // required animations  module
    ToastrModule.forRoot(),
  ],
  providers: [TeacherGuard,StudentGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }