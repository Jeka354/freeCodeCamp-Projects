<template >
    <div id="wrapper">
      <div id="quote-box">
        <div class="quote-text">
          <i class="fa fa-quote-left"> "Life isn’t about getting and having, it’s about giving and being." </i><span id="text"></span>
        </div>
        <div class="quote-author">- Kevin Kruse<span id="author"></span></div>
        <div class="buttons">
          <a
            class="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            class="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            <i class="fa fa-tumblr"></i>
          </a>
          <button class="button" id="new-quote">New quote</button>
        </div>
    </div>
</div>
</template>
<script>

let quotesData = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json' // использовать для подгрузки API


export default {
    data(){
        return {
            // Цвета для темы
            colors: [
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'
                ],
                currentQuote: '',
                currentAuthor: '',
                quotesData: ''
        }
    },
    methods: {

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500');
* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
}

div {
  position: relative;
  z-index: 2;
}

#wrapper {
    width: 100%;
  background-color: #333;
  color: #333;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#quote-box {
  border-radius: 3px;
  position: relative;
  width: 450px;
  padding: 40px 50px;
  display: table;
  background-color: #fff;
}
#quote-box .quote-text {
  text-align: center;
  width: 450px;
  height: auto;
  clear: both;
  font-weight: 500;
  font-size: 1.75em;
}
#quote-box .quote-text i {
  font-size: 1em;
  margin-right: 0.4em;
}
#quote-box .quote-author {
  width: 450px;
  height: auto;
  clear: both;
  padding-top: 20px;
  font-size: 1em;
  text-align: right;
}
#quote-box .buttons {
  width: 450px;
  margin: auto;
  display: block;
}
#quote-box .buttons .button {
  height: 38px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #333;
  outline: none;
  font-size: 0.85em;
  padding: 8px 18px 6px 18px;
  margin-top: 30px;
  opacity: 1;
  cursor: pointer;
}
#quote-box .buttons .button:hover {
  opacity: 0.9;
}
#quote-box .buttons .button#tweet-quote,
#quote-box .buttons .button#tumblr-quote {
  float: left;
  padding: 0px;
  padding-top: 8px;
  text-align: center;
  font-size: 1.2em;
  margin-right: 5px;
  height: 30px;
  width: 40px;
}
#quote-box .buttons .button#new-quote {
  float: right;
}

</style>

