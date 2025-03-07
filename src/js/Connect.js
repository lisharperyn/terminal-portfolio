import { UniversalFunction } from "./UniversalFunction.js";

export class Connect{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>GitHub</span>
                    <span><a href="https://github.com/lisharperyn" target="_blank">github.com/lisharperyn</a></span>
                    <span class='keyword'>LinkedIn</span>
                    <span><a href="https://www.linkedin.com/in/steffani-amorim-b541791b7/" target="_blank">linkedin.com/in/steffani-amorim-b541791b7/</a></span>
                    <span class='keyword'>Instagram</span>
                    <span><a href="https://www.instagram.com/lisharperyn/" target="_blank">instagram.com/lisharperyn</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}
