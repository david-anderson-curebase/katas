function isPerfSqr(num) {
    let rootArray = [];
    for (let i = 0; i*i <= num; i++) {
        rootArray.push(i*i)
    }
    let res = rootArray.slice(-1);
    if (num == res) {return true}
    else {return false}
    console.log(rootArray);
};

