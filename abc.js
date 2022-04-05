var obj = {
    name: "Michael",
    func: () => {
        var self = this;
        console.log("outer func: " + this.name);
        console.log("outer func: " + self.name);
        const inner = () => {
            console.log("inner func:  " + this.name);
            console.log("inner func:  " + self.name);
        };
        inner();
    }
};
obj.func();





 













// console.log(firstName);
// console.log(birthDate);
// var firstName = 'Nick';
// const birthDate = 10;

// console.log([...'print string'])
// {
//     const b = [1, 2];
//            b.push(3);
//     b[3] = 4;
//             console.log(b)
// }

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let Name = person.fullName.bind(member);
//   console.log(Name())
//   console.log(person)

// var func = [];
// for(var i = 0; i <  5; i++) {
// 	    func.push(function () {
		
//     })
//     console.log(i);
// }
// func.forEach(fun => fun());

// {
//         const b = [1, 2];
//                b.push(3);
//         b[4] = 4;
//                 console.log(b)
//     }