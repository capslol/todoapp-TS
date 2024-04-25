const nominals = [50, 100, 200,500,1000,2000,5000]

function atm (amount: number, nominals: number[]):string[] {
    const result: string[] = []
    let remainder = amount

    for (let i = nominals.length - 1; i >= 0; i--) {
        const quantity = Math.floor(remainder / nominals[i])
        remainder = remainder % nominals[i];

        if(quantity > 0){
            result.push(`${nominals[i]}x${quantity}`)
        }


        if (remainder === 0) {
            break;
        }
    }
    return result
}