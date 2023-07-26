// bai 1:
// let arr =[1, 4, 5, 2, 7, 9, 4]// sử dụng phương thức sort xuất mảng tăng dần
// arr.sort(function (a,b) {
//     return a-b;
// })
// console.log(arr);
// sử dụng phương thức sort xuất mảng giảm dần
// let arr =[1, 4, 5, 2, 7, 9, 4]
// arr.sort(function (a,b) {
//     return b-a;
// })
// console.log(arr);

// bai 2:
// let array = [1, 4, 5, 2, 7, 9, 4];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 != 0) {          //thay kiểu so sánh === vs !=
//     console.log(array[i]);
//   }
// }
// let array = [1, 4, 5, 2, 7, 9, 4];
// let sum=0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i]%5===0) {  
//     sum += array[i]   ;     //thay kiểu so sánh === vs !=
//     console.log(sum);
//   }
// }
let array = [1, 4, 5, 2, 7, 9, 4];
let multi=1;
for (let i = 0; i < 3; i++) {
  multi*=array[i];
  }console.log(multi);  
