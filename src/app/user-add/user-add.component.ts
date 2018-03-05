import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { UsersService } from '../users.service';
import { User } from '../user'

@Component({
	selector: 'app-user-add',
	templateUrl: './user-add.component.html',
	styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

	public user:User = new User();
	constructor(
		private usersServices:UsersService,
		private router: Router 
		) { }

	save(user:User){
		user.id = Math.floor(Math.random()*10000000000000000000)+1;
		this.usersServices.addUser(user).subscribe(()=>{
			this.router.navigate(['/crud']);
		})
	}
}
