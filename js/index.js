const totalSpan = document.querySelector('span.total');
let moneyInAcct = 1e5;
totalSpan.textContent = moneyInAcct;

function getCurrentBalance() {
    const totalSpan = document.querySelector('span.total');
    moneyInAcct = Number(totalSpan.textContent);
    return moneyInAcct || 0;
}

function myAccountDetails() {
    moneyInAcct = getCurrentBalance();

    let error = 'Insufficient Funds';
    let bankCredibility;
    let bank;
    let deposit;
    let amountToWithdraw = +prompt('How much do you want to withdraw?');
    if (amountToWithdraw <= 0) {
        let error = 'Please Enter Valid Amount'
        alert(error);
        return
    } else if (
        amountToWithdraw <= moneyInAcct ||
        amountToWithdraw == null ||
        amountToWithdraw == ''
    ) {
        alert(`Take your #${amountToWithdraw} naira`);

        moneyInAcct -= amountToWithdraw;

       // console.log('Money in account', moneyInAcct)
        //console.log('Amount withdrawn', amountToWithdraw)

        totalSpan.textContent = String(moneyInAcct);
    } else {
        alert(error);
        totalSpan.textContent = error;
    }
}

function myAcctDone() {
    alert('Thank you for banking with us!');
    window.location.href = '/';
}

function putMoneyIntoMyAccount() {
    moneyInAcct = getCurrentBalance();
    if (confirm('do you wanna deposit')) {
        bankCredibility = +prompt('Enter Acct no:');
        bank = +prompt('Enter Bank name:');
        deposit = +prompt('How much do you wanna deposit?');
        if (deposit <= 0) {
            let error = 'Please Enter Valid Amount'
            alert(error);
            return
        }
        moneyInAcct += deposit;
        totalSpan.textContent = String(moneyInAcct);
    }
}