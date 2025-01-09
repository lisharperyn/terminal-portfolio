import { UniversalFunction } from "./UniversalFunction.js";

export class About{
    toString(){
        return `<p>Sou a Julia, estudante da<b> uniCEUB</b>, <b>atualmente cursando Análise e desenvolvimento de sistemas.</b> Sou natural de Brasília. Sempre gostei de tecnologia e hoje busco aprimorar minhas habilidades todos os dias. Estou mais envolvida com desenvolvimento web, utilizando JavaScript, CSS e HTML. Também estou estudando para me tornar uma profissional de segurança através do curso do Google. Quando não estou codando ou estudando, estou jogando xadrez ou escutando música. Gosto de ler e de explorar um mundo introspectivo.
        Aqui vai um pouco do que gosto de escutar:
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/79fVRZLnIqS3FytTLfTBT4?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </p>`;
    }
    
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}