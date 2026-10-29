const students=
[{name:"Tahameed",class: 7,roll:10,marks:88},
{name:"Shahrier",class:8,roll:10,marks:78},
{name:"Alvi", class: 7, roll:20,marks:40}
    ];
    students.forEach((student)=>
    {
        console.log(student);
    });
const names=students.map((student)=>student.name);
console.log(names);
const classes=students.map((student)=>student.class);
console.log(classes);
const with_grade=students.map((student)=>({...student,passed:student.marks>=50}));
console.log(with_grade);
