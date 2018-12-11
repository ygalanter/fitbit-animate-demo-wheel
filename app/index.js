import document from "document";
import {fitbit_animate} from 'fitbit-animate';

let gr = document.getElementById("gr"); //GUI element with wheel
let dur = 2000; // duration of a single animation

// main animation function
let animate = () => {
    fitbit_animate([ // left-to-right move
        {elem: gr, prop: "translate", subprop: "x", from: 25, to:275, dur:dur},
        {elem: gr,prop: "rotate", subprop: "angle", from: 720, to:0,dur:dur},
    ]).then(()=> fitbit_animate([ // top-to-bottom move
        {elem: gr, prop: "translate", subprop: "y", from: 25, to:275,dur:dur},
        {elem: gr, prop: "rotate", subprop: "angle", from: 720, to:0, dur:dur},
    ])).then(()=> fitbit_animate([ // right-to-left move
        {elem: gr, prop: "translate", subprop: "x", from:275, to: 25, dur:dur},
        {elem: gr, prop: "rotate", subprop: "angle", from: 720, to:0, dur:dur},
    ])).then(()=> fitbit_animate([ // bottom-to-top move
        {elem: gr, prop: "translate", subprop: "y", from:275, to: 25, dur:dur},
        {elem: gr, prop: "rotate", subprop: "angle", from: 720, to:0, dur:dur},
    ]));

}

animate(); // kicking off initial animation 

setInterval(animate, dur*4); // and showing the same animation at intervals

