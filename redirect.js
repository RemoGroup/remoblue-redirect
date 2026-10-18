(() => {
  const destination = new URL('https://remogm.com');
  destination.pathname = location.pathname;
  destination.search = location.search;
  destination.hash = location.hash;
  location.replace(destination.href);
})();
