// 重新命名導出
const aa = () => {
    console.log("Kenny");
}

const bb = () => {
    console.log("Taiwan");
}

export {
    aa as sayMyName,
    bb as sayMyCountry
}