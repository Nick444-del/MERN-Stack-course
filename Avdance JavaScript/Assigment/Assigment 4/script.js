let data = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958,
        "price": 125
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836,
        "price": 225
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315,
        "price": 345
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700,
        "price": 500
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600,
        "price": 400
    },
    {
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200,
        "price": 255
    },
    {
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
        "pages": 384,
        "title": "Nj\u00e1l's Saga",
        "year": 1350,
        "price": 115
    },
    {
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
        "pages": 226,
        "title": "Pride and Prejudice",
        "year": 1813,
        "price": 295
    },
    {
        "author": "Honor\u00e9 de Balzac",
        "country": "France",
        "imageLink": "images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
        "pages": 443,
        "title": "Le P\u00e8re Goriot",
        "year": 1835,
        "price": 200
    },
    {
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
        "pages": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952,
        "price": 150
    },
];

class Data {
    constructor(data) {
        this.data = data;
    }

    getAll() {
        console.log(this.data);
    }

    getBookByAuthor() {
        let arr1 = this.data.filter((e) => {
            if (e.author.toLowerCase() != 'unknown') {
                console.log(e);
            }
        });
        console.log(arr1);
    }

    getBookByPrice() {
        let arr1 = this.data.filter((e) => {
            if (e.price < 300) {
                console.log(e);
            }
        });
        console.log(arr1);
    }

    getBookSum() {
        let sum = 0;
        this.data.forEach((e) => {
            sum += e.price;
        });
        console.log(sum);
    }

    getBookSumByFixedPrice(cost) {
        let sum = 0;
        let arr1 = this.data.filter((e) => {
            if(e.price > cost){
                sum += e.price;
            }
        });
        console.log(sum);
    }
}

let obj1 = new Data(data);
// obj1.getAll();
// obj1.getBookByAuthor();
// obj1.getBookByPrice();
// obj1.getBookSum();
// let cost = +prompt("Enter a cost: ");
// obj1.getBookSumByFixedPrice(cost);

maindata = [
    {
        "title": "Oranges",
        "price": 50,
        "status": "out of stock",
        "soldQuantity": "1000",
        "category": "Fresh Produce",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "White bread",
        "price": 100,
        "status": "available",
        "soldQuantity": "250",
        "category": "Bread",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Crackers",
        "price": 50,
        "status": "available",
        "soldQuantity": "150",
        "category": "Snacks",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Eggs",
        "price": 200,
        "status": "out of stock",
        "soldQuantity": "500",
        "category": "Meat/Protein",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Potatoes",
        "price": 250,
        "status": "out of stock",
        "soldQuantity": "2000",
        "category": "Fresh Produce",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Sugar",
        "price": 350,
        "status": "available",
        "soldQuantity": "1800",
        "category": "Baking goods",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Cinnamon",
        "price": 250,
        "status": "available",
        "soldQuantity": "2000",
        "category": "Condiments/spices",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Tomatoes",
        "price": 50,
        "status": "Coming Soon",
        "soldQuantity": "0",
        "category": "Fresh Produce",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Coconut Oil",
        "price": 200,
        "status": "Coming Soon",
        "soldQuantity": "0",
        "category": "Oils",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    }
];

class Data2{
    constructor(data){
        this.data = data;
    }

    getItemName(){
        let arr1 = this.data.map((e) => e.title);
        console.log(arr1);
    }

    getItemPrice(){
        let arr1 = this.data.map((e) => e.price);
        console.log(arr1);
    }

    getItemByOutOfStock(){
        let arr1 = this.data.filter((e) => {
            if(e.status == "out of stock"){
                console.log(e);
            }
        });
        console.log(arr1);
    }

    getAllItems(){
        console.log(this.data);
    }

    getItemByName(){
        let name = prompt("Enter a name");
        let arr1 = this.data.filter((e) => {
            if(e.title.toLowerCase() == name.toLowerCase()){
                console.log(e);
            }
        });
        console.log(arr1);
    }

    getSoldItems(){
        let sum = 0;
        this.data.forEach((e) => {
            sum += Number(e.soldQuantity);
        });
        console.log(sum);
    }

    getItemGreater(){
        let arr1 = this.data.filter((e) => {
            if(e.price > 100){
                console.log(e);
            }
        });
        console.log(arr1);
    }

    getItemLesser(){
        let arr1 = this.data.filter((e) => {
            if(e.price < 100){
                console.log(e);
            }
        });
        console.log(arr1);
    }

    getItemByType(category){
        let arr1 = this.data.filter((e) => {
            if(e.category.toLowerCase() == category.toLowerCase()){
                console.log(e);
            }
        });
        console.log(arr1);
    }
}

let obj2 = new Data2(maindata);
// obj2.getItemName();
// obj2.getItemPrice();
// obj2.getItemByOutOfStock();
// obj2.getAllItems();
// obj2.getItemByName();
// obj2.getSoldItems();
// obj2.getItemGreater();
// obj2.getItemLesser();
// let cat = prompt("Enter a category: ");
// obj2.getItemByType(cat);
