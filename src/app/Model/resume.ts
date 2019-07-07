import { Header } from "./header";
import { Education } from "./education";
import { Experience } from "./experience";
import { Project } from "./project";
export class Resume {

    constructor(private header:Header,private education:Education[],
        private experience:Experience[], private skills:any,private projects:Project[]
        ){
    
        }
}
