const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const a = [];

inp.on("line", (data) => {
	a.push(data);
});

inp.on("close", () => {
    var s=a[0].split(" ");
    var f=parseInt(s[0]);
    var d=parseInt(s[1]);
    var e=parseInt(s[2]);
    var x=(f*f)+(d*d);
    if((e*e)==x)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
});
