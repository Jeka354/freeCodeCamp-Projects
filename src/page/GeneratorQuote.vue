<template>
  <!-- TO DO переделать на БЭМ!!! -->
  <div id="wrapper">
    <div id="quote-box">
      <div class="quote-text">
        <i class="fa fa-quote-left"></i>
        <span id="text">{{ currentQuote }}</span>
      </div>
      <div class="quote-author">
        - <span id="author">{{ currentAuthor }}</span>
      </div>
      <div class="buttons">
        <a
          class="button"
          id="tweet-quote"
          :href="tweetUrl"
          title="Tweet this quote!"
          target="_top"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          class="button"
          id="tumblr-quote"
          :href="tumblrUrl"
          title="Post this quote on tumblr!"
          target="_blank"
        >
          <i class="fa fa-tumblr"></i>
        </a>
        <button class="button" id="new-quote" @click="getQuote">New quote</button>
      </div>
    </div>
    <div class="footer">
      by <router-link to="/about">Jeka354</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    // TO DO вынести в компонент состояния.
    const colors = [
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
      '#73A857',
    ];
    const currentQuote = ref('');
    const currentAuthor = ref('');
    const tweetUrl = ref('');
    const tumblrUrl = ref('');
    let quotesData = null;

    const router = useRouter();

    const getQuotes = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      quotesData = await response.json();
    };

    const getRandomQuote = () => {
      return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
    };

    const getQuote = () => {
      const randomQuote = getRandomQuote();
      currentQuote.value = randomQuote.quote;
      currentAuthor.value = randomQuote.author;

      tweetUrl.value = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
        `"${currentQuote.value}" ${currentAuthor.value}`
      )}`;

      tumblrUrl.value = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
        currentAuthor.value
      )}&content=${encodeURIComponent(
        currentQuote.value
      )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

      const color = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = color;
      document.body.style.color = color;
      document.querySelectorAll('.button').forEach((button) => {
        button.style.backgroundColor = color;
      });
    };

    // Сброс цвета фона при уходе со страницы
    const resetBackground = () => {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#333';
      document.querySelectorAll('.button').forEach((button) => {
        button.style.backgroundColor = '#333';
      });
    };

    onMounted(async () => {
      await getQuotes();
      getQuote();
    });

    // Сброс цвета фона при уходе со страницы
    onUnmounted(() => {
      resetBackground();
    });
    
    
    //TO DO ----- не работает смена цвета при переходе. 

    // Сброс цвета фона при переходе на другую страницу
    router.beforeEach(() => {
      resetBackground();
    });

    return {
      currentQuote,
      currentAuthor,
      tweetUrl,
      tumblrUrl,
      getQuote,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
}

#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.footer {
  width: 450px;
  text-align: center;
  display: block;
  margin: 15px auto 30px auto;
  font-size: 0.8em;
  color: #fff;
}
.footer a {
  font-weight: 500;
  text-decoration: none;
  color: #fff;
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