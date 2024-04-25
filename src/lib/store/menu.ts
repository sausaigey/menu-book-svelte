import { writable } from "svelte/store";

export const menus = writable([
	{
		id: 'salad',
		photoUrl:
			'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg?resize=960%2C503',
		name: 'Avocado Pesto Salad',
		description:
			'Home-grown vegetables with loads of avocado, topped with mouthwatering pesto salad',
		prices: [
			{
				label: '',
				price: 35
			},
			{
				label: '+ Grilled Salmon',
				price: 55
			}
		]
	},
	{
		id: 'pizza',
		photoUrl:
			'https://www.recipetineats.com/wp-content/uploads/2023/05/Garlic-cheese-pizza_9.jpg',
		name: 'Triple Cheese Pizza',
		description: 'Indulge yourself in this simple yet delicious delicacy',
		prices: [
			{
				label: '1 slide',
				price: 15
			},
			{
				label: 'Pan (6 slices)',
				price: 60
			}
		]
	},
	{
		id: 'wine',
		photoUrl:
			'https://images.theconversation.com/files/525691/original/file-20230511-19-w9pz4k.jpg?ixlib=rb-1.1.0&rect=5%2C2%2C1905%2C1276&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
		name: 'Seasonal Wine',
		description: 'A great meal becomes perfect when combined with a good wine',
		prices: [
			{
				label: 'Glass',
				price: 100
			},
			{
				label: 'Bottle',
				price: 1500
			}
		]
	},
	{
		id: 'coffee',
		photoUrl:
			'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_512,h_512/https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2019/12/How-Are-Espressos-Good-For-Health_blog-1.gif',
		name: 'Coffee',
		description: 'The best coffee you can have from the land of Indonesia',
		prices: [
			{
				label: 'Americano',
				price: 25
			},
			{
				label: 'Latte',
				price: 30
			}
		]
	}
]);