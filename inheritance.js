// we will discusss inheritance with the help of constructor function in JS
function Batters(name,avg,sr,runs){
    this.name=name;
    this.average=avg;
    this.strikeRate=sr;
    this.runs=runs;

}

// creating a prototype of Batters constructor
Batters.prototype.batting=function(){
    console.log("I can bat");
}




function Bowlers(name,wkts,eco){
    this.name=name;
    this.wickets=wkts;
    this.economy=eco;
}

// important- here we are connecting the prototype of the Batters to the prototype of bowlers, so that objects of Bowlers can also access the functions of Batters.
Bowlers.prototype=Object.create(Batters.prototype);



let batter1=new Batters("virat",49,99,25000)
let bowler1=new Bowlers("cummins",300,3);

console.log(bowler1);
console.log(bowler1.batting)