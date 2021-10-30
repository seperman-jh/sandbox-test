const friend = [1,2,3,4];
//const sunday = prompt("seventh");
const weekday = {
    start : "mon",
    FIRST : "mon",
    second : "tue",
    third : "wed",
    fourth : "thu",
    fifth : "fri",

};

const test_default = ({...weekday}) => {
    const start = {start:"sun"};
    return {...start, ...weekday};
    };

const test_default1 = ({...object}) => {
    const start = "sun";
    return {...object, start};
};

const test_default2 = ({start ="sun", ...weekday}) => ({start, ...weekday});

const test_rename = ({FIRST:first, ...object}) => ({first, ...object});

console.log(test_default(weekday));
console.log(test_default1(weekday));
console.log(test_default2(weekday));

console.log(test_rename(weekday));

//test
// console.log({...(false && {weekday})});

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


