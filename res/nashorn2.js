var Nashorn2 = Java.type('com.winterbe.java8.samples.nashorn.Nashorn2');
var nashorn2 = new Nashorn2();
var result = nashorn2.fun('John Doe');
print('\n' + result);

nashorn2.fun2(123);
nashorn2.fun2(49.99);
nashorn2.fun2(true);
nashorn2.fun2("hi there")
nashorn2.fun2(String("bam"))
nashorn2.fun2(new Number(23));
nashorn2.fun2(new Date());
nashorn2.fun2(new RegExp());
nashorn2.fun2({foo: 'bar'});


print('passing object hash:');
nashorn2.fun3({
    k1: 'bar',
    k2: 'foo'
});


print('passing custom person object:');

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var person1 = new Person("Peter", "Parker");
nashorn2.fun3(person1);
nashorn2.fun4(person1);