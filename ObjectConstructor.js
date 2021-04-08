function CreateTool(name, version, languages) {
    this.name = name;
    this.version = version;
    this.languages = languages;

    this.start=function(){
        console.log(this.name+" is started");
    }
    this.stop=function(){
        console.log(this.name+" is stopped");
    }
}

let tool = new CreateTool("selenium",4,["java","js","python","ruby","c#"]);
let tool2 = new CreateTool("playwright",1,["java","js","python","c#"]);

console.log(tool["name"]);
console.log(tool["version"]);

console.log(tool.name);
console.log(tool.version);
console.log(tool.languages);