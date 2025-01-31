function Fahrenheit(c) {
    return (c * 9/5)+32
}
let temp1 = 38;
let temp2 = 24;
let temp3 = -1;
let tempF = Fahrenheit(temp1)
let tempF2 = Fahrenheit(temp2)
let tempF3 = Fahrenheit(temp3)

document.getElementById('demo').innerHTML = `${temp1}C is ${tempF}F`;
document.getElementById('demo').innerHTML = `${temp2}C is ${tempF2}F`;
document.getElementById('demo').innerHTML = `${temp3}C is ${tempF3}F`;

let classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];

document.getElementById('demo1').innerHTML = classification.slice((3));

let course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

let main = course.categories[0];
document.getElementById('demo2').innerHTML = course.title;
document.getElementById('demo3').innerHTML = main;

function fiveStar(){
    let totalreview = this['5_stars_reviews'] + this['4_stars_reviews'] + this['3_stars_reviews'] + this['2_stars_reviews'] + this['1_stars_reviews'] ;
    let percentage = (this['5_stars_reviews'] / totalreview) * 100;
    return Math.round(percentage);
};

document.getElementById('demo4').innerHTML = course.fiveStar();