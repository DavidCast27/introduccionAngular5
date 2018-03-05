import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryApiService implements InMemoryDbService{


	constructor() { }

	createDb(){
		
		const users = [
		{
			"id": "5a9c7f2d48d936df639ad035",
			"isActive": true,
			"name": "Vivian Stanton",
			"email": "vivian stanton@accenture.com"
		},
		{
			"id": "5a9c7f2d4af31b03b160180a",
			"isActive": false,
			"name": "Trudy King",
			"email": "trudy king@accenture.info"
		},
		{
			"id": "5a9c7f2d641114657e887bb1",
			"isActive": true,
			"name": "Myrna Houston",
			"email": "myrna houston@accenture.biz"
		},
		{
			"id": "5a9c7f2d5893434f9ca2f735",
			"isActive": false,
			"name": "Irwin Gould",
			"email": "irwin gould@accenture.me"
		},
		{
			"id": "5a9c7f2d3ebc63c8b4cfd6ca",
			"isActive": false,
			"name": "Morrison Dudley",
			"email": "morrison dudley@accenture.biz"
		},
		{
			"id": "5a9c7f2dafe83b6f97caca83",
			"isActive": true,
			"name": "Ochoa Bishop",
			"email": "ochoa bishop@accenture.net"
		},
		{
			"id": "5a9c7f2d5fb23e7405b2024e",
			"isActive": false,
			"name": "Beard Merrill",
			"email": "beard merrill@accenture.ca"
		},
		{
			"id": "5a9c7f2dbbacc93b2805d4bf",
			"isActive": false,
			"name": "Beck Donovan",
			"email": "beck donovan@accenture.io"
		},
		{
			"id": "5a9c7f2d0f2ba9ae3bb940d1",
			"isActive": true,
			"name": "Alta Compton",
			"email": "alta compton@accenture.co.uk"
		},
		{
			"id": "5a9c7f2d6cd7f5946a04d6ff",
			"isActive": true,
			"name": "Rhea Nolan",
			"email": "rhea nolan@accenture.name"
		},
		{
			"id": "5a9c7f2d382f6ae736e19f2e",
			"isActive": true,
			"name": "Lewis Gallegos",
			"email": "lewis gallegos@accenture.us"
		},
		{
			"id": "5a9c7f2d61d233615430ced5",
			"isActive": false,
			"name": "Christian Gentry",
			"email": "christian gentry@accenture.tv"
		},
		{
			"id": "5a9c7f2dcfebaf4c767323c0",
			"isActive": false,
			"name": "Ross Dunlap",
			"email": "ross dunlap@accenture.com"
		},
		{
			"id": "5a9c7f2dbedc03164c7e0a03",
			"isActive": true,
			"name": "Thompson Sweet",
			"email": "thompson sweet@accenture.info"
		},
		{
			"id": "5a9c7f2d0373d1b71c1969c2",
			"isActive": true,
			"name": "Zelma Peterson",
			"email": "zelma peterson@accenture.biz"
		},
		{
			"id": "5a9c7f2dda020d2f4774714a",
			"isActive": true,
			"name": "Janell Le",
			"email": "janell le@accenture.me"
		},
		{
			"id": "5a9c7f2d41baa4bd10ad1bcb",
			"isActive": true,
			"name": "Jami Mack",
			"email": "jami mack@accenture.biz"
		},
		{
			"id": "5a9c7f2dbef7a751c65a2221",
			"isActive": false,
			"name": "Estrada James",
			"email": "estrada james@accenture.net"
		},
		{
			"id": "5a9c7f2d499db891395eda13",
			"isActive": true,
			"name": "English Garza",
			"email": "english garza@accenture.ca"
		},
		{
			"id": "5a9c7f2d25604a562d8ad782",
			"isActive": false,
			"name": "Rodriquez Foster",
			"email": "rodriquez foster@accenture.io"
		},
		{
			"id": "5a9c7f2dcdd73f93674a95f1",
			"isActive": false,
			"name": "Kline Lawrence",
			"email": "kline lawrence@accenture.co.uk"
		},
		{
			"id": "5a9c7f2d1963e7b58b70cf06",
			"isActive": false,
			"name": "Sharp Carlson",
			"email": "sharp carlson@accenture.name"
		},
		{
			"id": "5a9c7f2d96153dea834ba92a",
			"isActive": false,
			"name": "Sellers Burgess",
			"email": "sellers burgess@accenture.us"
		},
		{
			"id": "5a9c7f2d77da114c1046a6b7",
			"isActive": true,
			"name": "Spencer Long",
			"email": "spencer long@accenture.tv"
		},
		{
			"id": "5a9c7f2db1456066e9a7921c",
			"isActive": false,
			"name": "Joyce Martin",
			"email": "joyce martin@accenture.com"
		},
		{
			"id": "5a9c7f2dad1da06db5243cfc",
			"isActive": true,
			"name": "Holcomb Webb",
			"email": "holcomb webb@accenture.info"
		},
		{
			"id": "5a9c7f2d88b29a9c6b65d51c",
			"isActive": true,
			"name": "Cervantes Klein",
			"email": "cervantes klein@accenture.biz"
		},
		{
			"id": "5a9c7f2dfa331604def10f0b",
			"isActive": false,
			"name": "Potter Olsen",
			"email": "potter olsen@accenture.me"
		},
		{
			"id": "5a9c7f2ddcdc9ea691ffe6c6",
			"isActive": true,
			"name": "Wallace Rodriquez",
			"email": "wallace rodriquez@accenture.biz"
		},
		{
			"id": "5a9c7f2da8bfcd5e66d55a95",
			"isActive": true,
			"name": "Cotton Fulton",
			"email": "cotton fulton@accenture.net"
		},
		{
			"id": "5a9c7f2d2c7ab077f69fa785",
			"isActive": true,
			"name": "Georgina Coffey",
			"email": "georgina coffey@accenture.ca"
		},
		{
			"id": "5a9c7f2d0c184af3c2a077d4",
			"isActive": true,
			"name": "Lorna Guy",
			"email": "lorna guy@accenture.io"
		},
		{
			"id": "5a9c7f2db3c420bedafa0b99",
			"isActive": true,
			"name": "Keri Harding",
			"email": "keri harding@accenture.co.uk"
		},
		{
			"id": "5a9c7f2d11a2b7f9ea2c34e5",
			"isActive": true,
			"name": "Lilian Singleton",
			"email": "lilian singleton@accenture.name"
		},
		{
			"id": "5a9c7f2dea39099accaf1934",
			"isActive": true,
			"name": "Saundra Leach",
			"email": "saundra leach@accenture.us"
		},
		{
			"id": "5a9c7f2d74d03ee16428d418",
			"isActive": true,
			"name": "Dianne Acosta",
			"email": "dianne acosta@accenture.tv"
		},
		{
			"id": "5a9c7f2d0e8bd2ea393d7afb",
			"isActive": false,
			"name": "Espinoza Vargas",
			"email": "espinoza vargas@accenture.com"
		},
		{
			"id": "5a9c7f2d4207fc6e9baf2eaf",
			"isActive": false,
			"name": "Bettie Berger",
			"email": "bettie berger@accenture.info"
		},
		{
			"id": "5a9c7f2d5c8d007314bfed32",
			"isActive": true,
			"name": "Daniel Gill",
			"email": "daniel gill@accenture.biz"
		},
		{
			"id": "5a9c7f2d3d5a5bd4eda004e2",
			"isActive": false,
			"name": "Olive Sanders",
			"email": "olive sanders@accenture.me"
		},
		{
			"id": "5a9c7f2d816c05abfd6cd41f",
			"isActive": false,
			"name": "Carla Summers",
			"email": "carla summers@accenture.biz"
		},
		{
			"id": "5a9c7f2d89b233372c4b9658",
			"isActive": true,
			"name": "Foley Wilder",
			"email": "foley wilder@accenture.net"
		},
		{
			"id": "5a9c7f2db73c422296e39fe1",
			"isActive": true,
			"name": "Anderson Bailey",
			"email": "anderson bailey@accenture.ca"
		},
		{
			"id": "5a9c7f2da256b96b05d320f2",
			"isActive": false,
			"name": "Jerry Hurley",
			"email": "jerry hurley@accenture.io"
		},
		{
			"id": "5a9c7f2d95daea02b91fc79c",
			"isActive": true,
			"name": "Stacy Cobb",
			"email": "stacy cobb@accenture.co.uk"
		},
		{
			"id": "5a9c7f2dd31d217c8d82a881",
			"isActive": true,
			"name": "Nona Colon",
			"email": "nona colon@accenture.name"
		},
		{
			"id": "5a9c7f2d391fb532825519e8",
			"isActive": true,
			"name": "Long Mathews",
			"email": "long mathews@accenture.us"
		},
		{
			"id": "5a9c7f2de8c69354ebed742a",
			"isActive": true,
			"name": "Trujillo Douglas",
			"email": "trujillo douglas@accenture.tv"
		},
		{
			"id": "5a9c7f2da28b3a277cfba5b1",
			"isActive": true,
			"name": "Nina Mills",
			"email": "nina mills@accenture.com"
		},
		{
			"id": "5a9c7f2d83d513b06ba67c65",
			"isActive": true,
			"name": "Higgins Suarez",
			"email": "higgins suarez@accenture.info"
		},
		{
			"id": "5a9c7f2d8199eb177fc80eee",
			"isActive": false,
			"name": "Nellie Booth",
			"email": "nellie booth@accenture.biz"
		},
		{
			"id": "5a9c7f2d5abddd4cf6bac9e8",
			"isActive": true,
			"name": "Eugenia Alvarez",
			"email": "eugenia alvarez@accenture.me"
		},
		{
			"id": "5a9c7f2db5a74c7e30e57736",
			"isActive": true,
			"name": "Booker Wilcox",
			"email": "booker wilcox@accenture.biz"
		},
		{
			"id": "5a9c7f2d513b876e2a3f02d5",
			"isActive": true,
			"name": "Vickie Nguyen",
			"email": "vickie nguyen@accenture.net"
		},
		{
			"id": "5a9c7f2d9cdf28fd3bb01fba",
			"isActive": true,
			"name": "Delia Silva",
			"email": "delia silva@accenture.ca"
		},
		{
			"id": "5a9c7f2d5c8f21f7f5055591",
			"isActive": false,
			"name": "Mayo Randolph",
			"email": "mayo randolph@accenture.io"
		},
		{
			"id": "5a9c7f2d53151eac12ab10a8",
			"isActive": true,
			"name": "Vasquez Avila",
			"email": "vasquez avila@accenture.co.uk"
		},
		{
			"id": "5a9c7f2d7c5cbc8286d1f692",
			"isActive": true,
			"name": "Charles Taylor",
			"email": "charles taylor@accenture.name"
		},
		{
			"id": "5a9c7f2d1e9924b99c768e64",
			"isActive": false,
			"name": "Ernestine Norris",
			"email": "ernestine norris@accenture.us"
		},
		{
			"id": "5a9c7f2df8b2456ae5e42bdb",
			"isActive": false,
			"name": "Dixon Sexton",
			"email": "dixon sexton@accenture.tv"
		},
		{
			"id": "5a9c7f2dd5499dc5ad083b52",
			"isActive": false,
			"name": "Antonia Travis",
			"email": "antonia travis@accenture.com"
		},
		{
			"id": "5a9c7f2d1780ebb5b7fe0374",
			"isActive": true,
			"name": "Gilbert Bowen",
			"email": "gilbert bowen@accenture.info"
		},
		{
			"id": "5a9c7f2d9cd8cf53265863da",
			"isActive": true,
			"name": "Mercedes Justice",
			"email": "mercedes justice@accenture.biz"
		},
		{
			"id": "5a9c7f2d8d204ff2b374a4c3",
			"isActive": true,
			"name": "Erika Mercer",
			"email": "erika mercer@accenture.me"
		},
		{
			"id": "5a9c7f2d25fef712b149df68",
			"isActive": true,
			"name": "Robin Whitney",
			"email": "robin whitney@accenture.biz"
		},
		{
			"id": "5a9c7f2dd5adc8a29dfe3436",
			"isActive": true,
			"name": "Workman Hopper",
			"email": "workman hopper@accenture.net"
		},
		{
			"id": "5a9c7f2db7c229f6b330c7f4",
			"isActive": true,
			"name": "Pacheco Webster",
			"email": "pacheco webster@accenture.ca"
		},
		{
			"id": "5a9c7f2d3711653f4e49bc64",
			"isActive": false,
			"name": "Ayala Middleton",
			"email": "ayala middleton@accenture.io"
		},
		{
			"id": "5a9c7f2d65c07771de90d29a",
			"isActive": true,
			"name": "Baldwin Nicholson",
			"email": "baldwin nicholson@accenture.co.uk"
		},
		{
			"id": "5a9c7f2d535ec6d37f271077",
			"isActive": false,
			"name": "Jessie York",
			"email": "jessie york@accenture.name"
		},
		{
			"id": "5a9c7f2d4d66e43cbf022ab7",
			"isActive": false,
			"name": "Shawn Murray",
			"email": "shawn murray@accenture.us"
		},
		{
			"id": "5a9c7f2d548e0cec9498870f",
			"isActive": true,
			"name": "Flores Greer",
			"email": "flores greer@accenture.tv"
		},
		{
			"id": "5a9c7f2d2404a558a1182ca2",
			"isActive": true,
			"name": "Phillips Woodard",
			"email": "phillips woodard@accenture.com"
		},
		{
			"id": "5a9c7f2d1470464e43b3d06d",
			"isActive": true,
			"name": "Swanson Burton",
			"email": "swanson burton@accenture.info"
		}
		];
		return {users};
	}

}
