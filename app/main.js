window.addEventListener("load", () => {
    initFormEvents();
    renderTweets();
    resetAllTweets();
    renderTwitterMenuAsLi();
});

const tweets = [
    {
        text: "primer tweet",
        likes: 2,
        retweets: 2,
        dateCreation: new Date(),
        userName: "Ainara",
        userDirection: "@ainaraa_21",
    },
];

//formulario se envia

const initFormEvents = () => {
    const form = document.forms.new;
    const textArea = form.elements.tweet;

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        if (textArea.value != "") {
            tweets.push({
                text: textArea.value,
                likes: 0,
                dateCreation: new Date(),
            });
        }
        form.reset();
        renderTweets();
    });

    //
    textArea.addEventListener("keyup", (ev) => {
        console.log(textArea.value.length);
        if (textArea.value.length > 150) {
            ev.preventDefault();
        }
    });

    //
    textArea.addEventListener("keyup", (ev) => {
        if (textArea.value.length > 150) {
            ev.preventDefault();
        }
    });
};

const renderTweets = () => {
    const tweetsFeed = document.querySelector(".tweets_feed");
    let HTMLString = "";

    tweets.forEach((tweets) => {
        HTMLString += `
        <div class="tweet01">
        <div class="principal">
            <img src="images/S1e19_bill_snap.png" alt="">

            <div class="user_name">
                ${tweets.userName}
            </div>
            <div class="user_direction">
                ${tweets.userDirection}
            </div>
            <div class="hora">
                &#8226 15h
            </div>
            <div class="basura">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </div>


        </div>
        <div class="texto_tweet">
        ${tweets.text}
        </div>
        <div class="footer_hecho">
            <div class="iconos">
              
                <div class="comments">
                    <i class="fa fa-comment" aria-hidden="true"></i>
                    <div class="comment_number">
                        0
                    </div>
                </div>
                
                <div class="retweets">
                    <i class="fa fa-retweet" aria-hidden="true"></i>
                    <div class="retweet_number">
                    ${tweets.retweets}
                    </div>
                </div>
                <div class="likes">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <div class="like_number">
                       ${tweets.likes}
                    </div>
                </div>
                <i class="fa fa-upload" aria-hidden="true"></i>

            </div>
        </div>
    </div>
      
        `;
    });

    tweetsFeed.innerHTML = HTMLString;
    initTweetEvents();
    renderTweetsAmount();
};

//cuantos tweets hay

const renderTweetsAmount = () => {
    const amount = tweets.length;
    const amountDom = document.querySelector(".aside .amount");
    const HTMLString = `Hay ${amount} tweet(s)`;

    amountDom.innerHTML = HTMLString;
};

//borrar todos

const resetAllTweets = () => {
    const amountDom = document.querySelector(".aside .reset");
    amountDom.addEventListener("click", () => {
        tweets.splice(0);
        renderTweets();
    });
};

// para click
const initTweetEvents = () => {
    const tweetsDom = document.querySelectorAll(".tweets_feed .tweet01");

    tweetsDom.forEach((tweetDom, i) => {
        //borrar tweets
        const trash = tweetDom.querySelector(".fa-trash");
        trash.addEventListener("click", () => {
            console.log(i);

            tweets.splice(i, 1);
            renderTweets();
        });

        const like = tweetDom.querySelector(".fa-heart");
        like.addEventListener("click", () => {
            tweets[i].likes++;
            console.log("hola");
            renderTweets();
        });
        const retweet = tweetDom.querySelector(".fa-retweet");
        retweet.addEventListener("click", () => {
            tweets[i].retweets++;
            console.log("hola");
            renderTweets();
        });
    });
};

const renderTwitterMenuAsLi = () => {
    let renderTwitterMenuAsLi = "";

    for (let i = 0; i < tweetsData.twitterMenu.length; i++)
        renderTwitterMenuAsLi += `
    <li><span class="fa ${tweetsData.twitterMenu[i].icon}"></span>${tweetsData.twitterMenu[i].category}</a></li>`;
    const ulMenu = document.querySelector(".side_menu .menu_tw ul");
    ulMenu.innerHTML = renderTwitterMenuAsLi;
};
