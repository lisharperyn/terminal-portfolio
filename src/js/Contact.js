import { UniversalFunction } from "./UniversalFunction.js";

export class Contact{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>Telefone</span>
                    <span><a href="tel:+55(61)992577391">+55(61)992577391</a></span>
                    <span class='keyword'>E-mail</span>
                    <span><a href="mailto:lisharperyn77@outlook.com">lisharperyn77@outlook.com</a></span>
                    <span class='keyword'>Whatsapp</span>
                    <span><a href="https://wa.me/+5561992577391" target="_blank">+5561992577391</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}