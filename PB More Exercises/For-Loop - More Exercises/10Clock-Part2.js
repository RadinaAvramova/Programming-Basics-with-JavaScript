function clock() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            let result = '';
            for (let seconds = 0; seconds <= 59; seconds++) {                
                result += `${hour} : ${minutes} : ${seconds}\n`
            }
            console.log(result.slice(0, -1));
        }
    }
}

clock(0);