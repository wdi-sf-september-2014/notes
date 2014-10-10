##More Prototypes and Chai Testing

####What is Mocha and Chai?

- Mocha is a test framework, and chai is an expectation framework.
- Basically, Mocha helps you set up the tests and run them in the command line.
- Chai tests your assertions and returns a passing or failing result.

####Let's Install Mocha and Chai

`npm install mocha`

`npm install chai`

####Running Tests

`mocha -R spec [relative path to file]`

####Setup NPM Method to Run Tests

```
"scripts": {
  "test": "mocha -R spec [relative path to file]"
}
```

####Using Expectations with Suites and Specs

```
var expect = require("chai").expect;

describe("Sum operations", function() {
	it("Should equal 4 when 2 is added to 2.", function() {
		expect(2 + 2).to.equal(4);
	});
});
```

##Prototypes and Chai Testing Lab

- Files for this project can be found [here](https://github.com/litterbox-sf-fall/car_lab).
- You will run the tests in the command line with Chai to complete the project.