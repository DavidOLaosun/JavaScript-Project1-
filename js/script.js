/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


const quotes = '';
   

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

/***
 * `getRandomQuote` function
***/
/**
 *  A function that will return a random number between 1 and the length of my quotes array
 */
function getRandomQuote(){
 const index = Math.floor(Math.random() * quotes.length );
  console.log(index);
  return quotes[index];
}

/***
 * `printQuote` function
 * The main function that will print a quote into my website
***/
function printQuote(){
   
  // grab a randomQuote from quotes
  const randomQuote = getRandomQuote();

  //build my quote inner HTML
  const quoteHTML = '';
  quoteHTML += '<p class="quote"> ' + randomQuote["quote"] + ' </p>';
  quoteHTML += '<p class="source"> ' + randomQuote["source"];
  
  //if quote has citation or year 
  if(randomQuote["citation"])
    quoteHTML += '<span class="citation"> ' + randomQuote["citation"] + ' </span>';
  if(randomQuote["year"])
    quoteHTML += '<span class="year"> ' + randomQuote["year"] + ' </span>';
  quoteHTML += '</p>';

  //if quote has tags
  if(randomQuote["tags"]){
    quoteHTML += '<p class="tags"><i>';
    for(var i = 0; i < randomQuote["tags"].length; i++){
      if(i === 0)
        quoteHTML += randomQuote["tags"][i];
      else 
        quoteHTML += ', ' + randomQuote["tags"][i];
    }
    quoteHTML += '</i></p>';
  }
  

  //set quoteHTML right into the div element
  document.getElementById("quote-box").innerHTML = quoteHTML;

  //change background color
  changeBackgroundColor();
}

/**
 * returns a random number between 0 and 255 
 */
function randomNumberRGB(){
  return Math.floor(Math.random()*256);
}

/**
 * Function that will change backgroun color for each call
 */
function changeBackgroundColor(){
  //set my rgb values
  const red = randomNumberRGB();
  const green = randomNumberRGB();
  const blue = randomNumberRGB();

    /**
   * grab my body element, source : https://developer.mozilla.org/en-US/docs/Web/API/Document/body
   * set background color, source : https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
   */    
  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
