function greet(name) {
    console.log('hello!'+name); 
}

function goodbye(name){
    console.log('goodbye!'+name);
}

//方法1
module.exports = {
    greet:greet,
    goodbye:goodbye
};

//方法2
exports.greet = greet;
exports.goodbye = goodbye;