/* A card's tap puts a one-time signed code in this page's address. It is not
   needed here, so it is taken out of the address bar straight away: a screenshot
   or a shared link then carries no card code. Nothing is sent anywhere. */
if (window.location.search && window.history && window.history.replaceState) {
  window.history.replaceState(null, "", window.location.pathname);
}
