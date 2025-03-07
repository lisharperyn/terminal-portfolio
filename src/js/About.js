import { UniversalFunction } from "./UniversalFunction.js";

export class About{
    toString(){
        return `<p>Sou a Steffani, estudante do <b>Centro Universitário Internacional</b>, <b>atualmente cursando Engenharia de Software.</b> Tenho formação em Desenvolvimento Java Fullstack pelo SENAI. Sou natural de Brasília. Sempre gostei de tecnologia e hoje busco aprimorar minhas habilidades todos os dias. Estou envolvida com mais de uma linguagem, tecnologia e framework, mas meu foco principal é o Desenvolvimento Web Java com Spring, utilizando JavaScript, CSS e HTML, além de estar aprendendo Angular. Também trabalho com Análise de Dados, Business Intelligence e Administração de Banco de Dados. Quando não estou codando ou estudando, estou lendo O Silmarillion  ou escutando música. Gosto de ler e de explorar um mundo introspectivo. Amo aprender novas culturas e idiomas.
        Aqui vai um pouco do que gosto de escutar:
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3634aKisKlGdUfD9V3MOY5?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </p>`;
    }
    
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}
