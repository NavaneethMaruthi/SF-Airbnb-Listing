export default function Listings() {
  const listings = {};
  console.log("Listings module loaded");

  const form = document.getElementById("form-create-listing");
  const listingsContainer = document.querySelector("#listings-container");

  const appendListing = ({ title, price, description } = {}) => {
    console.log("Append listing:", listings);

    const listingDiv = document.createElement("div");
    listingDiv.className = "listings col-6";
    listingDiv.innerHTML = `<div class="listings col-6">
                <article class="listing card">
                  <img
                    src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
                    class="card-img-top"
                    alt="Image of the Serviced apartment in San Francisco ★4.87 · 1 bedroom · 2 beds · 1 bath"
                  />

                  <div class="card-body">
                    <h3>
                      ${title}
                    </h3>
                    <div class="host">Holly</div>
                    <div class="price">$${price}</div>
                    <div class="rating">⭐️4.87</div>
                    <div
                      class="description"
                      style="max-height: 180px; overflow: auto"
                    >
                      ${description}
                    </div>
                    <div class="actions">
                      <a
                        href="https://www.airbnb.com/rooms/958?source_impression_id=p3_1759181307_P3DAAjpGGvuPHOdV"
                        class="btn btn-primary"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                  <!-- /.card body-->
                </article>
              </div>`;
    listingsContainer.appendChild(listingDiv);
  };

  const oncreate = (event) => {
    event.preventDefault();
    console.log("Form element:", event);

    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());
    appendListing(listing);
  };
  form.addEventListener("submit", oncreate);

  return listings;
}
