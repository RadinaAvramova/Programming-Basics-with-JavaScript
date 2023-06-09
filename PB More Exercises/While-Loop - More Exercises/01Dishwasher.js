function washMashine(arr) {
    let detergent = 750;
    let detergentForDish = 5;
    let detergentForPot = 15;

    let detergentQuantity = Number(arr[0]);
    let index = 1;
    let circle = 0;
    let dishes = 0;
    let pots = 0;

    while (arr[index] !== "End") {
    // while (index < arr.length) {
        if (index === arr.length) {
        // if (arr[index] === "End") {
            break;
        }

        // circle += 1;

        // if (circle % 3 !== 0) {
        if (index % 3 !== 0) {
            dishes += Number(arr[index]);
        }

        // if (circle % 3 === 0) {
        if (index % 3 === 0) {
            pots += Number(arr[index]);
        }
        index++;
    }

    let total = (dishes * detergentForDish) + (pots * detergentForPot);
    let totalDetergent = detergent * detergentQuantity;

    if (totalDetergent >= total) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent - total} ml.`)
    } else {
        console.log(`Not enough detergent, ${Math.abs(total - totalDetergent)} ml. more necessary!`)
    }
}

washMashine(["2","53","65","55","End"]);