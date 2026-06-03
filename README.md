# MMM Autos Car Dealership Website

A high-performance, modern, and interactive car dealership website built using **Vanilla HTML5, CSS3, and native JavaScript**. The layout is designed based on the MMM Autos UI mockup, highlighting vehicles, pricing configurations, and immersive video walkthroughs.

## Features

- **Dynamic Hover-to-Play Video Walkthroughs**: Hovering over any vehicle card lazy-loads and plays a muted walkthrough video of the car. Hovering away reverts to the static image.
- **Walkthrough Modal Player**: Clicking "View Deal" or "View Details" opens a high-definition pop-up video player allowing users to watch the full video walkthrough with custom controls.
- **Dynamic Currency Converter**: Price valuations are pegged to USD (base prices) and can be dynamically displayed in Nigerian Naira (₦), US Dollars ($), Euros (€), British Pounds (£), or Japanese Yen (¥). 
- **Inventory Category Filtering**: Instant client-side filtering for car classifications (SUVs, Sedans, Hatchbacks, etc.) with smooth transition animations.
- **Aesthetic Excellence**: Implements premium typographic contrast (Outfit/Inter fonts), glassmorphic elements, modern shadow hierarchies, and a fully responsive grid system.

## Setup & Running the Project

Since this project utilizes native web standards (HTML5, CSS, and Vanilla JavaScript), there are no complex compilation steps or dependencies to install.

### Running Locally
1. Clone this repository to your local system.
2. Open `index.html` directly in any web browser, or launch it using a local dev server (e.g., Live Server in VS Code, or python simple server):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   ```
3. Open `http://localhost:8000` (or the port specified by your tool) in your web browser.

## File Structure

```
├── index.html     # Semantic HTML5 page layout and elements
├── style.css      # CSS variables, layout grids, and interactive styling
├── app.js         # JavaScript controllers (Currency, video hover, filters, mobile menu)
├── logo.svg       # Custom vector SVG logo for MMM Autos
└── README.md      # Project documentation
```

## Adjusting Prices & Exchange Rates

To modify the exchange rates, open `app.js` and modify the rates inside the `exchangeRates` object:
```javascript
const exchangeRates = {
    USD: 1.0,
    NGN: 1500, // 1 USD = 1500 Naira
    EUR: 0.92,
    GBP: 0.78,
    JPY: 155
};
```

To update the base price for a car, modify the `data-base-price` attribute inside the respective car card HTML in `index.html`:
```html
<!-- Price in USD. If active currency is NGN, it will show ₦(3,467 * 1,500) = ₦5,200,000 -->
<div class="car-card hover-video-card" data-base-price="3467" ...>
```
