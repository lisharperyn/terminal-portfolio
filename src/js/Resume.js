import { UniversalFunction } from "./UniversalFunction.js";

export class Resume{
    constructor(options){
        this.options = options;
        this.parseCommand();
    }

    parseCommand(){
        if(this.options === ""){
            this.displayResume();
            return;
        }
        let parts = this.options.split(" ");
        if(parts.length > 2){
            let errMsg = `resume: too many arguments.<br>type 'resume --help' for help.`;
            new UniversalFunction().updateElement("div", "error", errMsg);
            return;
        }
        switch(parts[0]){
            case "--download":
                this.downloadResume(parts.slice(1).toString().trim());
                break;
            case "--help":
                this.help();
                break;
            default:
                let errMsg = `resume: '${parts[0]}' is not a valid argument.<br>type 'resume --help' for help.`;
                new UniversalFunction().updateElement("div", "error", errMsg);
                break;
        }
    }

    downloadResume(format){
        if(format === "" || format === "pdf") this.downloadFile("curriculoJulia.pdf");
        else if(format === "doc") this.downloadFile("curriculoJulia.docx");
        else{
            let errMsg = `resume: '${format}' is not a valid format.<br>type 'resume --help' for help.`;
            new UniversalFunction().updateElement("div", "error", errMsg);
            return;
        }
    }

    downloadFile(fileName){
        const link = document.createElement("a");
        link.href = `assets/resume/${fileName}`;
        link.setAttribute("download", fileName);
        link.click();
        // free memory
        URL.revokeObjectURL(link.href);
        link.remove();
    }

    help() {
        let outMsg = `resume: Displays or download my resume.<br>
        usage: resume [option] [value]<br>
        options:<br>
        --download [pdf(Default) | doc] downloads my resume in the given format.<br>
        --help shows this help message.<br>
        type 'resume' to display my resume.`;
        new UniversalFunction().updateElement("div", "output", outMsg);
    }

    getHeader(){
        return `<div class="header">
        <h1>Julia Reis</h1><hr>
        <p>
            <span><a href="tel:+55(61)981206088">+55(61)981206088</a> | </span>
            <span><a href="mailto:juliamesquita267@gmail.com">juliamesquita267@gmail.com</a> | </span>
            <span><a href="https://juli32bit.vercel.app/" target="_blank">CLI-Portfolio</a> | </span>
            <span><a href="https://github.com/juli32bit" target="_blank">GitHub</a> | </span>
            <span><a href="https://www.linkedin.com/in/juli32bit" target="_blank">LinkedIn</a> | </span>
            <span><a href="https://leetcode.com/juli32bit" target="_blank">Leetcode</a></span>
        </p><hr>
        </div>`;
    }

    getEducation(){
        return `<div class="education">
            <div>
                <h2>FORMAÇÃO</h2><hr>
            </div>
            <div class="education-item">
                <strong>uniCEUB</strong>  <strong>Brasília, Brasil</strong>
                <p>Análise e desenvolvimento de sistemas</p>  <p>October 2024–hoje</p>
                <p>Especializando : Cibersec, DevOps, Web Dev</p>
            </div>
            <div class="education-item">
                <strong>Google Cybersecurity</strong> <strong>Online</strong>
                <p>Certificado Foundations of Cybersecurity</p> <p>July 2024–hoje</p>
            </div>
        </div>`;
    }

    getProfessionalExperience(){
        return `<div class="professional-experience">
            <div>
                <h2>EXPERIÊNCIA</h2><hr>
            </div>
            <div class="professional-experience-item">
                <strong>
                     Voluntariado - uniCEUB
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7282835876009644033/" target="_blank">[LinkedIn]</a> 
                    </strong> 
                <strong>Brasília, Brasil</strong>
                <p><strong>Web Freelancer</strong> </p> <p>2024-hoje</p>
                <ul>
                    <li>Aula de informática para idosos</li>
                    <li>Configuração de redes locais e residenciais</li>
                    <li>Desenvolvimento de site para corretor imobiliário com otimização SEO</li>
                    
                </ul>
            </div>
        </div>`;
    }

    getProjects(){
        return `<div class="projects">
            <div>
                <h2>PROJETOS</h2><hr>
            </div>
            <div class="projects-item">
                <strong>Terminal Portfolio | HTML, CSS, JavaScript | 
                    <a href="https://github.com/juli32bit/Terminal-Portfolio" target="_blank">[GitHub]</a>
                </strong>
                <ul>                  
                    <li>Criei esse <strong> Portfolio inspirado em terminal </strong> para demonstrar habilidades com <strong>desenvolvimento web, backend e cibersegurança.</strong>.</li>
                    <li><strong>Armazenamento local</strong> para lista de comandos.</li> 
                    <li>Used <strong>Git e GitHub</strong> para controle de versão</li>
                    <li>Deploy no <strong>Vercel</strong>.</li>
                </ul>
            </div>
            <div class="projects-item">
                <strong>Página Bento | JavaScript, HTML, CSS | 
                    <a href="https://juli32bit.vercel.app/" target="_blank">[GitHub]</a>
                </strong>
                <ul>
                    <li>Uma página de fácil acesso e que <strong>promove as redes do usuário</strong></li>
                    <li>Demonstra as habilidades logo na <strong>primeira seção</strong></li>
                </ul>
            </div>
        </div>`;
    }
    
    getSkills(){
        return `<div class="skills">
            <div>
                <h2>HABILIDADES TÉCNICAS</h2><hr>
            </div>
            <ul>
                <li><strong>Linguagens :</strong>  C, HTML, CSS, Python(Basic), JavaScript(Basic)</li>
                <li><strong>Frameworks :</strong> React</li>
                <li><strong>Banco de dados :</strong> MySQL, Oracle Database</li>
                <li><strong>Ferramentas :</strong> Git, GitHub </li>
                <li><strong>Sistemas Operacionais :</strong> Windows, Linux</li>
            </ul>
        </div>`;
    }

    getAchievementsAndCertifications(){
        return `<div class="achievements-and-certifications">
            <div>
                <h2>CERTIFICAÇÕES</h2><hr>
            </div>
            <ul>
                <li>
                    Foundations of Cybersecurity,  Janeiro 2025.
                    <a href="https://coursera.org/share/3fb478b35ecc5c7e47601a0d2f9a1a40" target="_blank">[Certificado]</a>
                </li>
                <li>
                   C1 English (Avançado, proficiente), Dezembro 2025.
                    <a href="https://cert.efset.org/en/dyGAgA" target="_blank">[Certificado]</a>
                </li>
            </ul>
        </div>`;
    }

    toString(){
        return `${this.getHeader()}
        ${this.getEducation()}
        ${this.getProfessionalExperience()}
        ${this.getProjects()}
        ${this.getSkills()}
        ${this.getAchievementsAndCertifications()}
        `;
    }
    displayResume(){
        new UniversalFunction().updateElement("div", "output resume", this.toString());
        new UniversalFunction().updateElement("div", "output", 
            `<p>Use <em>resume --download [filetype]</em> to download above resume in the specified format.</p>`
        );
    }
}
