# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create([
	{ 
		title: 'T-Shirt', 
		description: "Your favorite pub's custom t-shirt. Made of 100% cotton this shirt is great for everyday wear and tear.", 
		price: 20, 
		quantity: 10
  },
  { 
		title: 'Hoodie', 
		description: "Your favorite pub's custom Hoodie. Made of 100% cotton this hoodie will keep you warm all day.", 
		price: 40, 
		quantity: 5
  },
  { 
		title: 'Pint Glass', 
		description: "Your favorite pub's custom Pint Glass. Drink beer at home from your favorite sports pub!", 
		price: 8, 
		quantity: 10
  },
  {
		title: 'World Cup Viewing Party Tickets', 
		description: "We are having a viewing party for the world cup. With your ticket you get a collectible ping glass as well as 10% off all drinks during the event.", 
		price: 14, 
		quantity: 10
  }

  
])