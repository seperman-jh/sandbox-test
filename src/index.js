const friend = [1,2,3,4];
//const sunday = prompt("seventh");
const weekday = {
    first : "mon",
    second : "tue",
    third : "wed",
    fourth : "thu",
    fifth : "fri",

};


console.log({...(false && {weekday})});

//spread
//console.log(...friend,5);
//console.log({...weekday, sixth:"sat"} );

//spread advanced


//console.log({...weekday,...(sunday !=="" ? {sunday} : "") });
// (sunday !=="" ? {sunday} : "") working as ...(sunday !=="" && {sunday}) true && string,object,array ==> string,object,array




//rest
// const test_f = (ff,ss,...rest) => rest;
// console.log(test_f("1", "2", "3", "4", ["1","2","3","4"]));
//
// const test_f1 = ({second, ...weekday}) => weekday;
// console.log(test_f1(weekday));





/*rest*/
