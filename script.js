const pi = '14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';

let livesRemaining = 3;

function CheckIfCorrect()
{
    const outputSpan = document.getElementById("output-span");
    const leftNumbers = document.getElementById("numbers-left");
    const typedNumbers = document.getElementById("numbers-typed");
    let inputValue = document.getElementById("number");
    let currentDigit = parseInt(inputValue.value.slice(-1));
    let digitIndex = inputValue.value.length;
    let piDigit = pi.charAt(digitIndex - 1);
    if (currentDigit == piDigit)
    {
        outputSpan.innerHTML = `Great! You typed ${digitIndex} numbers so far!`;
        leftNumbers.innerHTML = pi.slice(digitIndex, digitIndex + 12)
        if (digitIndex >= 12)
            typedNumbers.innerHTML = pi.slice(digitIndex - 12, digitIndex);
        else
            typedNumbers.innerHTML = pi.slice(0, digitIndex);
    }
    else if (currentDigit != piDigit && inputValue.value.length > 0)
    {
        outputSpan.innerHTML = `There should be ${piDigit} now!`;
        inputValue.value = inputValue.value.slice(0, -1);
        livesRemaining -= 1;
        if (livesRemaining <= 0)
        {
            outputSpan.innerHTML = 'You lost! Try again!';
            inputValue.disabled = true;
            let btn = document.createElement("button");
            btn.innerHTML = "Restart!";
            btn.className = 'button-restart';
            btn.onclick = function () {
                livesRemaining = 3;
                inputValue.value = '';
                outputSpan.innerHTML = '';
                leftNumbers.innerHTML = '1415926535897';
                typedNumbers.innerHTML = '';
                inputValue.disabled = false;
                btn.remove();
            };
            document.getElementById("output").appendChild(btn);
            return;
        }
    }
    console.log(livesRemaining);
}