import { UniversalFunction } from "./UniversalFunction.js";

export class Contact{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>Telefone</span>
                    <span><a href="tel:+55(61)981206088">+55(61)981206088</a></span>
                    <span class='keyword'>Email</span>
                    <span><a href="mailto:juliamesquita267@gmail.com">juliamesquita267@gmail.com</a></span>
                    <span class='keyword'>Whatsapp</span>
                    <span><a href="https://wa.me/+5561981206088" target="_blank">+5561981206088</a></span>
                    <span class='keyword'>Telegram</span>
                    <span><a href="https://t.me/juli32bit" target="_blank">@juli32bit</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}