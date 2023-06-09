export class AddOrEditUserModel {
	id?: number;
	email!: string;
	firstName!: string;
	lastName!: string;
	roleId!: number;
	name?: string;
	password?: string;
}

export class UpdateProfileModel {
	email!: string;
	firstName!: string;
	lastName!: string;
	newPassword?: string;
	confirmPassword?: string;
}

export default class UserModel {
	_id?: string;
	id?: number;
	email!: string;
	firstName!: string;
	lastName!: string;
	roleId!: number;
	role?: string;
	password?: string;
	__v?: string
}
