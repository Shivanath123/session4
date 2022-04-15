var a = process.argv;
var sum = 0;
for (let i=2;i<a.length;i++) {
    /**
     * Number() is used to convert javascript variables to numbers
     */
    sum = sum + Number(process.argv[i]);
}
console.log(sum);
