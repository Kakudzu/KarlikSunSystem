import  {Temperature} from  "./temperature.interface";
import  {Around} from './around.interface';
import {Atmosphere} from './around.interface';

export interface MiniSunSystem {
    sputnik: boolean;
    m: number;
    d: number;
    temperature: Temperature;
    around: Around;
}

console.log(MiniSunSystem.sputnik);