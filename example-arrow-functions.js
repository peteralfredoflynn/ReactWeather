var names = ['Joe', 'Peter', 'Nick'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Peter'));

//this binding
// arrow function binds this to parent

var person = {
  name: 'Peter',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

function add (a, b) {
  return a + b;
}

console.log(add(1,2));
console.log(add(1,3));

var add2 = (a,b) => a+b;

console.log(add2(1,3));