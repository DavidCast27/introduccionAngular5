import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user'




@Component({
	selector: 'app-user-crud',
	templateUrl: './user-crud.component.html',
	styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

	public users : Array<User>;
	constructor(
		private userService: UsersService
		) { }

	ngOnInit() {
		this.userService.getUsers().subscribe(users =>{
			this.users = users;
		});
	}

	remove(user:User){
		console.log(user);
		this.userService.deleteUser(user).subscribe(()=>{
			this.users = this.users.filter(u => user.id !== u.id);
		})
	}

}
