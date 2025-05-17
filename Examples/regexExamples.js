let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = "john.doe@example.com";

if (emailRegex.test(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}




let phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;
let phone = "123-456-7890";

let match = phoneRegex.exec(phone);
if (match) {
  console.log("Area code:", match[1]);
  console.log("Prefix:", match[2]);
  console.log("Line number:", match[3]);
}



let urlRegex = /https?:\/\/[^\s/$.?#]+(?:\.[^\s/$.?#]+)+/g;
var text = "Visit https://www.google.com or http://example.org";

let urls = text.match(urlRegex);
console.log("urls:", urls);



// Simple Character Class:
var regex = /[A-Z]/;

// 2. String Starting and Ending with Alphabets:
var regex = /^[A-Z]+$/;

// 3. One or More Word Characters:
var regex = /\w+/;

// 4. Checking for Digits:
str = "123";
var isDigit = /^\d+$/.test(str);

// 5. Alphanumeric Characters with Length letraints:
var regex = /^[a-zA-Z0-9]{3,10}$/;

// 6. Matching Whitespace Characters:
var regex = /\s+/;

// 7. Matching Digits Followed by Letters:
// JavaScript: 
// (The g flag is added for global matching)
var regex = /(\d)([a-z])/g; 

var str = "Hello, World!";
var regex = /\d+/;
var isMatch = regex.test(str); // isMatch will be false

