// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
        money = {};

    while (currency > 0) {
        if (currency < 10000 && currency >= 50) {
            // console.log(50);
            if (money.H == undefined) {
               money.H = 0;
               continue;
            }
            currency = currency - 50;
            money.H++;
            continue;
        } else if (currency < 50 && currency >= 25) {
            if (money.Q == undefined) {
                money.Q = 0;
                continue;
             }
            // console.log(25);
            currency = currency - 25;
            money.Q++;
            continue;
        } else if (currency < 25 && currency >= 10) {
            if (money.D == undefined) {
                money.D = 0;
                continue;
             }
            // console.log(10);
            currency = currency - 10;
            money.D++;
            continue;
        } else if (currency < 10 && currency >= 5) {
            if (money.N == undefined) {
                money.N = 0;
                continue;
             }
            // console.log(5);
            currency = currency - 5;
            money.N++;
            continue;
        } else if (currency < 5 && currency >= 1) {
            if (money.P == undefined) {
                money.P = 0;
                continue;
             }
            // console.log(1);
            currency = currency - 1;
            money.P++;
            continue;
        } else if (currency == 0) {
            // console.log(0);
            continue;
        } else {
            
            money.error = "You are rich, my friend! We don't have so much coins for exchange";
            currency = 0;
            continue;
        }
    }
  
    return money;
}

// function makeExchange(currency) {
//     // Your code goes here!
//     // Return an object containing the minimum number of coins needed to make change
//     money = {};

//     while (currency > 0) {
//         if (currency < 10000 && currency >= 50) {
//             // console.log(50);
//             if (money.H == undefined) {
//                money.H = 0;
//                continue;
//             }
//             currency = currency - 50;
//             money.H++;
//             continue;
//         } else if (currency < 50 && currency >= 25) {
//             if (money.Q == undefined) {
//                 money.Q = 0;
//                 continue;
//              }
//             // console.log(25);
//             currency = currency - 25;
//             money.Q++;
//             continue;
//         } else if (currency < 25 && currency >= 10) {
//             if (money.D == undefined) {
//                 money.D = 0;
//                 continue;
//              }
//             // console.log(10);
//             currency = currency - 10;
//             money.D++;
//             continue;
//         } else if (currency < 10 && currency >= 5) {
//             if (money.N == undefined) {
//                 money.N = 0;
//                 continue;
//              }
//             // console.log(5);
//             currency = currency - 5;
//             money.N++;
//             continue;
//         } else if (currency < 5 && currency >= 1) {
//             if (money.P == undefined) {
//                 money.P = 0;
//                 continue;
//              }
//             // console.log(1);
//             currency = currency - 1;
//             money.P++;
//             continue;
//         } else if (currency == 0) {
//             // console.log(0);
//             continue;
//         } else {
            
//             money.error = "You are rich, my friend! We don't have so much coins for exchange";
//             currency = 0;
//             continue;
//         }
//     }
  
//     console.log(money);


// }

// makeExchange(9999999);