const messages = [
    { msg: 'Please support the project by donating, contributing to open source code and sharing the project with people.' },
    { msg: 'If Opportunity doesn\'t knock! Build a door.' },
    { msg: '“You\'ve got to get up every morning with determination if you\'re going to go to bed with satisfaction.” —George Lorimer' },
    { msg: '“A year from now you may wish you had started today.” —Karen Lamb' }
];

function getQuote() {
    var probability = (Math.random(messages.length)).toFixed()
    var quote = messages[probability].msg;
    document.querySelector('.important-messages').innerHTML = quote;
    if (probability > 2) {
        document.querySelector('.important-messages').style.color = 'blue'
    } else {
        document.querySelector('.important-messages').style.color = 'green'
    }
}
getQuote();
var bars = document.querySelector('.fa-bars');
bars.addEventListener('click', () => {
    bars.style.display = 'none';
    document.querySelector('.fa-times').style.display = 'block';
    document.querySelector('.button-container').style.display = 'block';
});

var times = document.querySelector('.fa-times');
times.addEventListener('click', () => {
    bars.style.display = 'block';
    document.querySelector('.fa-times').style.display = 'none'
    document.querySelector('.button-container').style.display = 'none';

});