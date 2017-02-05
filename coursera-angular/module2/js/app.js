(function (){

angular.module("ShoppingListCheckOff", [])
       .controller("ToBuyController", ToBuyController)
       .controller("AlreadyBoughtController", AlreadyBoughtController)
       .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject=["ShoppingListCheckOffService"];

function ToBuyController(ShoppingListCheckOffService) {

	this.toBuy = ShoppingListCheckOffService.toBuy;
	
	this.buy = function(index) {
	    ShoppingListCheckOffService.buy(index);
	};

}

AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];

function AlreadyBoughtController(ShoppingListCheckOffService) {

	this.bought = ShoppingListCheckOffService.bought;
	

}

function ShoppingListCheckOffService() {

    this.toBuy = [
    				{name: "cookies", quantity: 10 },
    				{name: "water", quantity: 12 },
    				{name: "bread", quantity: 3 },
    				{name: "meat", quantity: 7 },
    				{name: "candy", quantity: 1 }
    			]
    			
    this.bought= []
    
    this.buy = function (index) {
      var boughtItem = this.toBuy[index]
      this.toBuy.splice(index, 1);
      this.bought.push(boughtItem);
    }

}



})();