import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SocialAuthService } from '../providers/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private readonly authService: SocialAuthService) {}

  ngOnInit(): void {}

  async facebookLogin() {
    const user = await this.authService.signIn('FACEBOOK');
    console.log(user);
  }

  async googleLogin() {
    const user = await this.authService.signIn('GOOGLE');
    console.log(user);
  }
}
