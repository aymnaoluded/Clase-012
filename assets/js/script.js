import { robots } from "./robots.js";

const {id , series , name , spritel , avatar} = robots[0];
const cardContainer = document.getElementById("card-container")


/*function getRobotById(id){
    return robots.find((robot) => {
        return robot.id === id;
    });

}*/
const getRobotById = (id) => {
    return robots .find((robot) => {
        return robot.id === id;
    })
}

let robot = getRobotById('024');

console.log(robot);

function getRobotBySeries(series){
    return robots.filter((robot)=>{
        return robot.series === series;

    })

}
let robot2 = getRobotBySeries(2)

console.log(robot2);

let  contenedor = document.getElementById(contenedor)




