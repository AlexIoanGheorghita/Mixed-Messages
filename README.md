# Mixed Messages Project

### Functionality

There is an object with three arrays containing hard-coded parts of quotes. In the main program, there is a factory function that takes in as parameter an object. 

There are two properties inside the factory function:
- `obj` which takes the object passed in;
- `arrMessage` which is empty initially, but it will hold the three parts of our message.

There are also two methods inside the factory function:
- `extractRandomPart()` which extracts a random index from an array and then it pushes in `arrMessage` the element at that index;
- `createMessage()` which loops through the elements of `arrMessage` and concatenates its elements to print a message to the console.

### How to run the solution

Use the command `node random_message.js` in the terminal to get a random message.