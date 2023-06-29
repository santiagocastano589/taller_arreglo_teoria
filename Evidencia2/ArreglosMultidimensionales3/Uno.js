//1
 let array1= [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]

 console.log(array1[0][1]);
 console.log(array1[1][0]);
 console.log(array1[2][2]);

 //2
let array2=[ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]

 /*A*/console.log(array2[1][0][3]);
  /*B*/console.log(array2[2][0][2]);
 /*C*/console.log(array2[0][0][2]);
/*D*/console.log(array2[0][0][0]);



 /*E*/console.log(array2[0][0][2]);
 /*F*/console.log(array2[2][0][0]);
 /*G*/console.log(array2[1][0][3]);
  /*H*/console.log(array2[0][1][1]);

//3
 let array3=[ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
 /*A*/console.log(array3[1][0][1]);
 /*B*/console.log(array3[2][0][0][0][0]);
  /*C*/console.log(array3[0][1][1]);
/*D*/console.log(array3[1][1][0][0]);
 /*E*/console.log(array3[3]);

let array4=[ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ]

array4[1][1]="?"
array4[2][1]=9
array4[0][0]="¡"
array4[1].splice(2,1)
array4[0].splice(2,1)
array4[3].splice(2,1)

console.log(array4);



