// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i,j);
//     }
// }
/*
  0 0
  0 1
  0 2
  1 0
  1 1
  1 2
  2 0
  2 1
  2 2
*/ 

// Break : 
//j == 1
// for(let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j==1)
//         {
//           break;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0 
1 0
2 0
*/
// i == 1
// for(let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//       if(i==1)
//       {
//         break;
//       }
//       console.log(i,j);
//   }
// }
/*
0 0 
0 1 
0 2
2 0 
2 1
2 2
*/

// for(let i = 0; i < 3; i++) {
  
//     for (let j = 0; j < 3; j++) {
        
//         console.log(i,j);
//     }
//     if(i==1)
//         {
//           break;
//         }
// }
/* 
0 0
0 1
0 2
1 0
1 1
1 2
*/

// Continue 
// j==1
// for(let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j==1)
//         {
//           continue;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0 
0 2
1 0
1 2
2 0 
2 2
 */
//i==1
for(let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if(i==1)
        {
          continue;
        }
        console.log(i,j);
    }
  }
  /*
  0 0 
  0 1
  0 2
  2 0
  2 1
  2 2
  */