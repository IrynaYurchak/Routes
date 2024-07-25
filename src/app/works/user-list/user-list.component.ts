import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public newLogin!: string;
  public newPassword!: string;
  public newEmail!: string;
  public users: { login: string, password: string, email: string }[] = [];
  public editStatus = false;
  public editIndex!: number;

  add(): void {
    const newUser = {
      login: this.newLogin,
      password: this.newPassword,
      email: this.newEmail
    };
    this.users.push(newUser);
    this.clearForm();
  }

  clearForm(): void {
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
    this.editStatus = false;
    this.editIndex = -1;
  }

  deleteUser(index: number): void {
    if (index >= 0 && index < this.users.length) {
      this.users.splice(index, 1);
    }
  }

  editUser(index: number): void {
    const user = this.users[index];
    if (user) {
      this.newLogin = user.login;
      this.newPassword = user.password;
      this.newEmail = user.email;
      this.editIndex = index;
      this.editStatus = true;
    }
  }

  updateUser(): void {
    if (this.editIndex >= 0 && this.editIndex < this.users.length) {
      this.users[this.editIndex].login = this.newLogin;
      this.users[this.editIndex].password = this.newPassword;
      this.users[this.editIndex].email = this.newEmail;
      this.clearForm();
    }
  }
}