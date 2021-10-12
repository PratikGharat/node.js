var buf1 = Buffer.alloc(20);
console.log(buf1);

const buf2 = Buffer.alloc(20,1)
console.log(buf2);

var buf3 = Buffer.allocUnsafe(15);
console.log(buf3);

var buf4 = Buffer.from([4,5,6]);
console.log(buf4);

var buf = Buffer.from('abc');
console.log(buf);
