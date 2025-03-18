let wordsArray = [];

/* Chat gpt method to generate random words from a list */

    async function loadWords() {
        const response = await fetch('txt/words.txt');
        const text = await response.text();
        wordsArray = text.split('\n').map(line => {
            const [word, definition] = line.split(':').map(item => item.trim());
            return { word, definition };
        }).filter(entry => entry.word && entry.definition); // Remove empty lines
    }

    function displayRandomWord() {
        if (wordsArray.length === 0) {
            alert('Words not loaded yet. Try again in a moment.');
            return;
        }
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        document.getElementById('word').innerText = wordsArray[randomIndex].word;
        document.getElementById('definition').innerText = wordsArray[randomIndex].definition;
    }

    /* Generate Random number method  */

    function GenerateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    function getRandomNumber() {
        const randomNumber = GenerateRandomNumber(1, 5000000);
        document.getElementById("numberDisplay").innerText = randomNumber;
    }

    /* Generate random background color  */
    
    function GenerateBackgroundColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function getRandomColor(){
        const randomColor = GenerateBackgroundColor();
        document.querySelector('.bottom').style.backgroundColor = randomColor;
        document.getElementById("colorDisplay").innerText = randomColor
    }


loadWords();