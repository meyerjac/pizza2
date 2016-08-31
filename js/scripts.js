function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price = 10;
}

function Contact(name, street, city){
this.name = name;
this.street = street;
this.city = city;
}

var order = [];
var address = [];

Pizza.prototype.SizeOfPizzaToPrice = function() {
  if (this.size === "small") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 8;
  } else if (this.size === "large") {
    this.price += 10;
  } else {
    this.price += 15;
  }
}

Pizza.prototype.TotalPrice = function() {
  (this.price += this.size + this.toppings.length);
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#size").val();
    var toppings = [];
      $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val());
});
    var newPizza = new Pizza(pizzaSize)
    order.push(newPizza);
    for(i = 0;i < toppings.length; i ++) {
      newPizza.toppings.push(toppings[i]);
}
    order[0].SizeOfPizzaToPrice();
    var totalTotal = (toppings.length * 2) +(order[0].price)

    $("#right-column").show();
    $(".price-results").append("the total price for this pizza is $ " + totalTotal);
    $(".pizza-results").append("you ordered a " + pizzaSize + " pizza, topped with " + order[0].toppings);
    console.log(newPizza.size);
    $("ul.orders").prepend("<li class='name'>" + newPizza.size + "</li>");
    console.log(newPizza.size);


    $('.name').click(function() {
      console.log("hello");
      $(".ingred").text(newPizza.toppings);
  })
      });
    })
