function firstZd(){
let user={
    name:"Nikolay",
    surname:"laptev",
    age:"18",
    country:"Russia",
    phonenumber:"+7-(984)-846-22-69",

    sayInf() {
        alert(this.name);
        alert(this.surname);
        alert(this.age);
    }
};

user.sayInf();
}

function secondZd(){
    let order={
        date:"14.12.2024",
        sum:"444 руб",
        rest:"Вкусочка",

        sayInfo(){
            alert(this.date);
            alert(this.sum);
            alert(this.rest); 
        }
    };
order.sayInfo();
}

function thirdZd(){
    let rests={
        firstRest:"Бульба",
        secondRest:"Вкусочка",
        thirdRest:"Берлога",

        sayRest(){
            alert(this.firstRest);
            alert(this.secondRest);
            alert(this.thirdRest);
        }
    }
rests.sayRest();
}


function fourthZd(){
function User(name) {
    this.name = name;
}

User.prototype.sayName = function() {
    alert(this.name);
};

let member1 = new User("Богдан");
let member2 = new User("Богом");
let member3 = new User("Дан");

member1.sayName();
member2.sayName();
member3.sayName();
}
