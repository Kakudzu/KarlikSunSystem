let myString: string = 'Hello';


import { MiniSunSystem } from "./Planet.interface.ts";


let MiniSunSystem1: Merkury = {
    sputniks: false,
    m: 3285,
    d: 4879,
    temperature: {
            day: 170,
            night: -220
    }
    atmosphere: {
           a1: "He 42%",
            a2:"Na "42%",
            a3: "O "15%",
    }
};


let MiniSunSystem2: Venus = {
    sputniks: false,
    m: 4867,
    d: 8900,
    temperature: {   //Celsiy
        day: 500,
        night: 440
    }
    atmosphere: {
           a1: "N 4%",
           a2: "CO 96%"
    }
    around: {   //day
        aSun: 224,
        aroundItsAxis: 243
    }
}


let MinisunSystem3: Earth = {
    characteristics: undefined;
}

let MiniSunSystem4: Mars = {
    sputniks: true,
    m: 639,
    d: 6779,
    temperature: {
        day: 23,
        night: -168
    }
    atmosphere: {
        a1: "CO 94%",
        a2: "N 3%",
        a3: "Ar 3%"
    }
    around: {
        aSun: 687,
        aroundItsAxis: 25
    }
}


