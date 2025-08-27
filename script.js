//Increment hearts
const hearts = document.querySelectorAll(".heart-icon");
const life = document.getElementById("life-inc");
hearts.forEach(function(heart){
    heart.addEventListener("click", function(){
        life.textContent = parseInt(life.textContent)+1;
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
    button.addEventListener('click', function() {
        // Get service details
        const card = button.closest('.bg-white');
        const serviceName = card.querySelector('h2').textContent;
        const serviceNumber = card.querySelector('h1').textContent;

        // Check coins less then 20
        if (coinCount < 20) {
            alert('Not enough coins. You need at least 20 coins to make a call.');
            return;
        }

        // Show alert
        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Dec coin
        coinCount -= 20;
        coinCountElement.textContent = coinCount;

        //Remove no calls msg 
        noCallsMessage.style.display = 'none';

        //Call History
        const historyItem = document.createElement('div');
        historyItem.classList.add('p-2', 'border-b', 'border-gray-200');
        historyItem.innerHTML = `
            <p class="font-semibold">${serviceName}</p>
            <p class="text-gray-500">${serviceNumber}</p>
        `;
        historyList.appendChild(historyItem);
    });
});

// Clear history button functionality
clearButton.addEventListener('click', function() {
    historyList.innerHTML = '<p id="no-calls" class="text-center text-gray-400">No calls yet. Your calls will appear here.</p>';
});