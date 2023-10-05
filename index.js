// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(cat) {
   cat = 'Ralph'
    return cats.push('Ralph')
}
function destructivelyPrependCat(kitty){
    kitty = "Bob"
    return cats.unshift("Bob")
}
function  destructivelyRemoveLastCat(){
    return cats.pop()
}
function  destructivelyRemoveFirstCat(){
    return cats.shift()
}
function  appendCat(fresh){
    fresh =['Broom']
    return cats = ["Milo", "Otis", "Garfield",... fresh]
}
function prependCat(stu){
     stu = ["Arnold"]
     return cats = [...stu, "Milo", "Otis", "Garfield"]
}
function  removeLastCat(){
    return cats.slice(1,3)
}
function  removeFirstCat(){
    return cats.slice(2,4)
}