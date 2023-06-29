//1A
let array1=[ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]

for (let index = 0; index < array1.length; index++) {
    
        for (let i = 0; i < array1[index].length; i++) {

            console.log(array1[index][i]);
            
        }
        
    }


//B
array1.forEach(i=>{


    i.forEach(j=>{
        console.log(j);
    })
})

//2A
let array2= [[["%", 7, true, "#"],["&", 55, false, "="]],[[false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ]
    
 for (let m = 0; m < array2.length; m++) {
    
    for (let j = 0; j < array2[m].length; j++) {
        
         for (let a = 0; a < array2[m][j].length; a++) {
            console.log(array2[m][j][a]);
        }     }
 }

array2.forEach(m=>{

   m.forEach(i=>{

         i.forEach(a=>{            console.log(a);
         })
    })
 })


//3A

let array3=[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]

 array3.forEach(a=>{
     a.forEach(i=>{
         if (i%2!==0) {
             console.log(i);
            
         }
     })
})

let acomulador=0

array3.forEach(a=>{
    a.forEach(i=>{
        acomulador=acomulador+i
    })
});
console.log(acomulador);