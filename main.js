const analytics = {
  PHRAZY: "clicked_getphrazy",
  WORD: "clicked_word"
};

$('.getphrazy-container').click(function () {
  sendEvent(analytics.PHRAZY);
  window.location = 'https://getphrazy.dailybrainplay.com/'
});
$('.word-container').click(function () {
  sendEvent(analytics.WORD);
  window.location = 'https://word.dailybrainplay.com/'
});

function sendEvent(action, values) {
  if (window.gtag) {
      gtag("event", action, { data: JSON.stringify(values) });
  };
};