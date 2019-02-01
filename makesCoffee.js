// makeCoffee function changes the src attribute of 
// coffeeImage to static/coffee_mug.jpg

// First, do these things in the console: 
//  const coffeeImage = document.querySelector('#coffee-image');
//  const revenueMessage = coffeeImage.getAttribute('src');

function makeCoffee(evt) {

  // Then, call this function, which will
  // change the src attribute of coffeeImage to static/coffee_mug.jpg
  coffeeImage.setAttribute('src', 'static/coffee_mug.jpg');
}

// It worked! My coffee image changed when I clicked it:)