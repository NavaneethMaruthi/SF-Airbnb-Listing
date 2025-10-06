import Listings from "./listings.js";

function MainModule() {
  const me = {};
  me.listings = Listings();
  return me;
}

MainModule();
