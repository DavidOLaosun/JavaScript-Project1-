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

//This function grabs a random quote from the Quotes array. 

  function getRandomQuote(){
    var randomNumber = Math.floor(Math.random()* quotes.length);
     return quotes[randomNumber];
    },
 
//This function will change the background color at random when the function is called. 
function random_bg_color(){
   red = Math.floor(Math.random() * 256);
   green = Math.floor(Math.random() * 256);
   blue = Math.floor(Math.random() * 256);
   rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
   document.body.style.background = rgbColor;
},   
       
  /*This function will create the HTML for the quotes to get prinited to the webpage. 
  It will check to see if the Citatiion & Year properties are present. When they are it adds them to the HTML to be printed. */

   function printQuote(){
	randomQuote = getRandomQuote(quotes);
	htmlToPage = '<p class="quote">' + randomQuote.quote +'</p>';
	htmlToPage +='<p class="source">' + randomQuote.source;
	if(randomQuote.citation){
		htmlToPage += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	if(randomQuote.year){ 
		htmlToPage += '<span class="year">' + randomQuote.year + '</span>';
	}
	if(randomQuote.catagory){
		htmlToPage += '<span class="category">' +  " " + randomQuote.catagory + '</p>';
	}
	htmlToPage += '</p>';
	random_bg_color();
	document.getElementById('quote-box').innerHTML = htmlToPage; 
}   


//This method setd an automatic timer to refresh the page every 10secs.

setInterval(function(){ printQuote(); }, 40000)

//Will change the quote at random when "Show another Quote" button is pressed.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote')
   .addEventListener("click", printQuote, false);
