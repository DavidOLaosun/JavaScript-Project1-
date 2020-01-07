/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var quotes = [
    {
        'quote':'We have pain,but not as great as his name.',
        'source':'Jamie Grace',
        'citation':'AZ Quotes',
        'tag':'Gospel Singers',
    },
    {
        'quote': 'Focusing on the negative only makes a difficult journey more difficult.',
        'source':'TobyMac',
        'citation':'AZ Quotes',
        'tag':'Gospel Singers'
    },
    {
        'quote':'You lead me and keep me from falling.You carry ,e close to Your heart.And surely Your goodness and mercy will follow me.',
        'source':'Chris Tomlin',
        'citation':'AZ Quotes',
        'year': 'May 07,2017',
        'tag':'Gospel Singers',

    },
    {
        'quote':'I will walk by faith, even when I cannot see',
        'source':'Jeremy Camp',
        'citation': 'AZ Quotes',
        'year':'November 03,2014',
        'tag':'Gospel Singers',
    },
    {
        'quote':'Give me open hands and open doors.',
        'source':'Matthew West',
        'citation':'AZ Quotes',
        'year': '2012',
        'tag':'Gospel Singers',
    },
    {
        'quote':'In middle of my little mess,I forget how BIG i'm blessed!',
        'source':'Francesca Battistelli',
        'citation':'AZ Quotes',
        'year':'2011',
        'tag':'Gospel Singers',
    },
    {
        'quote':'The area where we struggle the most is often the area of our greatest effectiveness.',
        'source':'Mandisa',
        'citation':'AZ Quotes',
        'tag':'Gospel Singers',
    },
];

// This gets random quote from function
function getRandomQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    return quotes[randomNumber]
}

//This will connect the quote to the html sting
function printQuote(){
    var callGetRandomQuote = getRandomQuote();
    getQuote +='<p class="quote">' + callGetRandomQuote.quote + "</p";
    getQuote +='<p class="source"' + callGetRandomQuote.source;
    getQuote +='<p class="citation"' + callGetRandomQuote.citation + "</span>";
    getQuote +='<p class="year"' + callGetRandomQuote.year + "</span>";
    getQuote += <p class="tag"' + callGetRandomQuote.tag + "</span>";
    document.getElementById('quote-box').innerHTML = getQuote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
