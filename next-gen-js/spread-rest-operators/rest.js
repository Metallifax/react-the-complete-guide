// Rest
// used to merge a list of function arguments
// into an array
function sortArgs(...args) {
    return args.sort();
}

console.log(sortArgs(3,4,2,1,5,6,7,8,3,2));