import { UniversalFunction } from "./UniversalFunction.js";

export class Connect{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>GitHub</span>
                    <span><a href="https://github.com/juli32bit" target="_blank">github.com/juli32bit</a></span>
                    <span class='keyword'>LeetCode</span>
                    <span><a href="https://leetcode.com/juli32bit" target="_blank">leetcode.com/juli32bit/</a></span>
                    <span class='keyword'>HackerRank</span>
                    <span><a href="https://www.hackerrank.com/juli32bit" target="_blank">hackerrank.com/juli32bit</a></span>
                    <span class='keyword'>LinkedIn</span>
                    <span><a href="https://www.linkedin.com/in/juli32bit" target="_blank">linkedin.com/in/juli32bit/</a></span>
                    <span class='keyword'>Twitter</span>
                    <span><a href="https://twitter.com/juli32bit" target="_blank">twitter.com/juli32bit</a></span>
                    <span class='keyword'>Instagram</span>
                    <span><a href="https://www.instagram.com/juli32bit/" target="_blank">instagram.com/juli32bit</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}