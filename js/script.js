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
        'quote':'In middle of my little mess,I forget how BIG im blessed!',
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

  var getRandomQuote()

   
   var randomNumber = Math.floor(Math.random()* quotes.length)
  
   
   

function printQuote(){
   var getRand = getRandomQuote()
   var emptyString =
       '<p class="quote">' + getRand.quote + '</p>'
      emptyString+= '<p class ="source">' + getRand.source
   
  if(getRand.citation){
     emptyString += '<span class = "citation">' + getRand.citation + '</span>'
  }
  if (getRand.year){
     emptyString += '<span class = "year">' + getRand.year + '</span>'
  }
 emptyString += '</p>'    
   document.getElementById('quote-box').innerHTML = emptyString
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote')
   .addEventListener("click", printQuote, false);
