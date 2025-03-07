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
        <h1>Steffani Amorim</h1><hr>
        <p>
            <span><a href="tel:+55(61)992577391">+55(61)992577391</a> | </span>
            <span><a href="mailto:lisharperyn77@outlook.com">lisharperyn77@outlook.com</a> | </span>
            <span><a href="https://github.com/lisharperyn" target="_blank">GitHub</a> | </span>
            <span><a href="https://www.linkedin.com/in/steffani-amorim-b541791b7/" target="_blank">LinkedIn</a> | </span>
        </p><hr>
        </div>`;
    }

    getEducation(){
        return `<div class="education">
            <div>
                <h2>FORMAÇÃO</h2><hr>
            </div>
            <div class="education-item">
                <strong>Centro Universitário Internacional (UNINTER)</strong>  <strong>Brasília, Brasil</strong>
                <p>Engenharia de Software</p>  <p>February 2022 – hoje</p>
                <p>Especializando : Java Dev, Python Dev, Ciência de Dados e Inteligência Artificial</p>
                <p>Trabalhando : Análise de Dados, Business Intelligence (Power BI) e Administração de Banco de Dados</p>
            </div>
            <div class="education-item">
                <strong>Desenvolvimento Java</strong> <strong>Fullstack</strong>
                <p>Certificado SENAI</p> <p>April 2023 - August 2023</p>
            </div>
            <div class="education-item">
                <strong>Python</strong> <strong>Essentials</strong>
                <p>CISCO</p> <p>May 2023</p>
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
                     Analista de Dados e BI- Ministério da Defesa - 2024 - hoje
                    <a href="https://www.linkedin.com/in/steffani-amorim-b541791b7/details/experience/" target="_blank">[LinkedIn]</a> 
                    <ul>
                       <li>MANUTENÇÃO E ATUALIZAÇÃO DE PAINEL GERENCIAL ELABORADO EM FERRAMENTA DE BI (BUSINESS
                        INTELLIGENCE), POWER BI</li>
                       <li>ELABORAÇÃO DE GRÁFICOS, ESTATÍSTICAS E MEDIDAS EM LINGUAGEM DAX E M PARA COMPOR INSTRUMENTOS GERENCIAIS DE
                       INFORMAÇÕES DO MINISTÉRIO DA DEFESA</li>
                       <li>ALIMENTAÇÃO E ATUALIZAÇÃO DE INFORMAÇÕES NA BASE DE DADOS MYSQL</li>
                    </ul>
                </strong> 
                <strong>Brasília, Brasil</strong>
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
                    <a href="https://github.com/lisharperyn/terminal-portfolio" target="_blank">[GitHub]</a>
                </strong>
                <ul>                  
                    <li><strong> Portfolio inspirado em terminal </strong> para demonstrar habilidades com <strong>desenvolvimento web e backend.</strong>.</li>
                    <li><strong>Armazenamento local</strong> para lista de comandos.</li> 
                    <li>Used <strong>Git e GitHub</strong> para controle de versão</li>
                    <li>Deploy no <strong>Vercel</strong>.</li>
                </ul>
            </div>
            <div class="projects-item">
                <strong>Página para download e upload de arquivos binários | Python, Flask, JavaScript, CSS, HTML, C, PowerShell | 
                    <a href="https://github.com/lisharperyn/uploading-downloading-binary-files-from-db" target="_blank">[GitHub]</a>
                </strong>
                <ul>
                    <li>Demonstrar habilidades em <strong>backend e integração com base de dados</strong></li>
                    <li>Demonstrar capacidade de <strong>manipulação de binários</strong></li>
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
