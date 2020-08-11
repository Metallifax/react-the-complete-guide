// old
function myFunc(){
    //function
    return null;
}

// ES6 
const myOtherFunc = (str) => {
    console.log(str);
};

const multiply = number => number * 2;

myOtherFunc(multiply(2));