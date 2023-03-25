// Comparison Operator
let [a, b, c, d, e, f, zero, first] = [8, 5, 9, 12, true, false, 0, 1];

// Equal to ==
if (first == e) {
  console.log('First is Equal to E');
}

// Equal value and equal type ===
if (first === e) {
  console.log('First is Equal to E');
}

// not equal !=
if (zero != f) {
  console.log('done');
} else {
  console.log('its not');
}

// not equal value or not equal type !==
if (zero !== f) {
  console.log('done');
} else {
  console.log('its not');
}

// greater than
if (b > d) {
  console.log('correct');
} else {
  console.log('wronged');
}

// logical not !
if (!(a < c)) {
  console.log('correct');
} else {
  console.log('wronged');
}

// greater than or equal to >=
if (b >= a) {
  console.log('right');
} else {
  console.log('wronged');
}

// less than or equal to <=
if (zero <= b) {
  console.log('right');
} else {
  console.log('wronged');
}

// Ternary Operator
zero <= b ? console.log('true') : console.log('wrong');

/* assignment: 
Al-ANsar foundation want to employ a driver. Write a function to employ a drive that have atleast 3years of experience and between the age of 18 and 40. Anything above the condition return you are not qualify
*/

function employ(experience, age) {
  if (experience >= 3 && age >= 18 && age <= 40) {
    return 'You are Qualified';
  } else {
    return 'Not Qualify';
  }
}
console.log(employ(3, 40));