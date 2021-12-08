//data
const person = {
  gender: "male",
  name: "Jan",
  age: 45,
  city: "NewYork",
};
const person1 = {
  gender: "male",
  name: "Pavel",
  age: 30,
  city: "Paris",
};
const person2 = {
  gender: "male",
  name: "Pepa",
  age: 18,
  city: "Roma",
};
const person3 = {
  gender: "female",
  name: "Jana",
  age: 36,
  city: "NewYork",
};
const person4 = {
  gender: "female",
  name: "Ema",
  age: 65,
  city: "Italy",
};
const person5 = {
  gender: "female",
  name: "Lenka",
  age: 10,
  city: "London",
};

//arrays

let people = [person, person1, person2, person3, person4, person5];
let men = [person, person1, person2];
let women = [person3,person4,person5];

//function

function selectGender(humans) {

    for (x = 0; x <humans.length; x++) {
  if (humans[x].gender == "male") {
    console.log(
      `He is ${humans[x].name} he is ${humans[x].age} years old. And he live in ${humans[x].city}`
    );
    //console.log("He is " + humans[x].name + " he is " + humans[x].age + " years old. And he live in " + humans[x].city);
  }
  if (humans[x].gender == "female") {
    console.log(
      `She is ${humans[x].name} she is ${humans[x].age} years old. And she live in ${humans[x].city}`
    );
    // console.log("She is " + humans[x].name + " she is " + humans[x].age + " years old. And she live in " + humans[x].city);
  }
};
}
//function call
selectGender(people);
selectGender(men);
selectGender(women);


