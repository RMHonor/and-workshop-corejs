it('should print the name of the person objects', () => {
  const getName = function() {
    return this.name;
  };

  const john = { name: 'John' };

  const getNameBound = getName.bind(john);

  expect(getNameBound()).toBe('John'); // USE bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
  expect(getName.call(john)).toEqual('John'); // USE call https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  expect(getName.apply(john)).toEqual('John'); // USE apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
});

it('should print the name of the person objects', () => {
  function Person(name, age, isFine) {
    this.name = name;
    this.age = age;
    this.isFine = () => isFine;
  }

  const john = new Person('John', 28, true);

  expect(john.age).toBe(28);
  expect(john.name).toEqual('John');
  expect(john.isFine()).toBe(true);
});

it('should return the maximum number in an array', () => {
  //don't google it, try it first! hint: use apply and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const numbers = [1, 99, 34, 1000, 123];

  expect(Math.max.apply(this, numbers)).toBe(1000);
});

it('should return the average number in an array', () => {
  function LeaderBoard(scores) {
    this.scores = scores;
  }

  LeaderBoard.prototype.avg = function() {
    const sumOfScores = this.scores.reduce((prev, cur) => prev + cur);
    this.avgScore = sumOfScores / this.scores.length;

    return this;
  };

  const anotherleaderBoard = new LeaderBoard([8, 10, 8, 9, 10, 9]);

  expect(anotherleaderBoard.avg().avgScore).toBe(9);
});
