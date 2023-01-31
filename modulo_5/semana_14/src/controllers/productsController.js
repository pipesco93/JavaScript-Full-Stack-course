const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render(path.join(__dirname,'../views/products'),{'allProducts':products})

	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;
		const product = products.find(elem => elem.id == (id));
		if(id){
			//res.send(user);
			res.render(path.join(__dirname,'../views/detail'),{product});
		}else{
			res.send("Not found");
		}
		
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render(path.join(__dirname,'../views/product-create-form.ejs'));
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const {
			name,
			price,
			discount,
			category,
			description
		} = req.body;
	
		const newId = products[products.length - 1].id + 1;
	
		const obj = {
			id: newId,
			name,
			price,
			discount,
			category,
			description
		};
		products.push(obj);
		const newProdObj = JSON.stringify(products);
		fs.writeFileSync("./src/data/productsDataBase.json", newProdObj)
		console.log(products)
		//products.push(obj);
		res.redirect('/');
	},
	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const { id } = req.params;
		const productToEdit = products.find(elem => elem.id == (id));
		res.render(path.join(__dirname,'../views/product-edit-form'),{productToEdit});
	},

	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		products.forEach(elem => {
			if(elem.id == req.body.id){
				elem.name = req.body.name;
				elem.price = req.body.price;
				elem.discount = req.body.discount;
				elem.category = req.body.category;
				elem.description = req.body.description;
				
			}
			//console.log(products);
		});
		const dataToUpdate = JSON.stringify(products);
		console.log(dataToUpdate);
		fs.writeFileSync("./src/data/productsDataBase.json", dataToUpdate)
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;