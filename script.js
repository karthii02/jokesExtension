fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(joke =>{
        const joketext = joke.attachments[0].text;
        const oneJoke = document.getElementById('oneJoke');

        oneJoke.innerHTML = joketext+`🤣😂`;
    })