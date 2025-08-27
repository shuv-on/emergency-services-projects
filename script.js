//Increment hearts
const hearts = document.querySelectorAll(".heart-icon");
const life = document.getElementById("life-inc");
hearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
        life.textContent = parseInt(life.textContent) + 1;
    });
});

//Inc or Dec coin
const callButtons = document.querySelectorAll('.btn-call');
const coinCountElement = document.getElementById('coin-count');
const historyList = document.querySelector('.history-list');
const noCallsMessage = document.getElementById('no-calls');
const clearButton = document.getElementById('btn-clear');


let coinCount = parseInt(coinCountElement.textContent);

//Call buttons functionality
callButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Get service details
        const card = button.closest('.bg-white');
        const serviceName = card.querySelector('h2').textContent;
        const serviceNumber = card.querySelector('h1').textContent;

        // Check coins less then 20
        if (coinCount < 20) {
            alert('Not enough coins. You need at least 20 coins to make a call.');
            return;
        }

        //Time update
        const now = new Date();
        const timestamp = now.toLocaleTimeString();

        // Show alert
        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Dec coin
        coinCount -= 20;
        coinCountElement.textContent = coinCount;

        //Remove no calls msg 
        noCallsMessage.style.display = 'none';



        //Call History
        const historyItem = document.createElement('div');
        historyItem.classList.add('p-2', 'border-b', 'border-gray-200', 'flex', 'justify-between', 'items-center');
        historyItem.innerHTML = `
            <div>
                <p class="font-semibold">${serviceName}</p>
                <p class="text-gray-500">${serviceNumber}</p>
            </div>
            <p class="text-gray-500">${timestamp}</p>
            
        `;
        historyList.appendChild(historyItem);
    });
});

// Clear history button functionality
clearButton.addEventListener('click', function () {
    historyList.innerHTML = '';
    historyList.appendChild(noCallsMessage);
    noCallsMessage.style.display = 'block';
});



//Copy buton functionality
document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll('.btn-copy');
    const copyCount = document.getElementById('copy-menu');

    copyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            let current = parseInt(copyCount.textContent);
            copyCount.textContent = current + 1;

           
        });
    });
});