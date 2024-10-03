let a = prompt('enter value');
if(!isNaN(a)) {
    console.log(`This is a number: ${a}`);
}
else if(a.toUpperCase() === a) {
    console.log("this Upper Case")
}
else if (a.toLowerCase() === a) {
    console.log("this is LowerCase")
} else {
    console.log(`This is a mixed case: ${a}`);
}   