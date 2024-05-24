console.log(process.argv) //  by defalt there are 2 args given locations of the node and dir
//O/P
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Dinesh\\OneDrive\\Desktop\\Project\\online\\Backend-Practice\\node.js\\app.js'
// ]

//// we can give arguments in the terminal it self --> node app.js app hello;

//O/P
// > node app.js app hello
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Dinesh\\OneDrive\\Desktop\\Project\\online\\Backend-Practice\\node.js\\app.js',
//   'app',
//   'hello'
// ]



let arg = process.argv;

for ( let i=2 ; i<arg.length ; i++ ) {
    console.log(`Hello and Welcome to ${arg[i]}` );
}

//O/P

// > node app.js Dinesh Gandu
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Dinesh\\OneDrive\\Desktop\\Project\\online\\Backend-Practice\\node.js\\app.js',
//   'Dinesh',
//   'Gandu'
// ]
// Hello and Welcome to Dinesh
// Hello and Welcome to Gandu

