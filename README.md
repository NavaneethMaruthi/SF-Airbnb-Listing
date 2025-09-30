# SF Airbnb Listings Explorer

A simple and elegant web application that demonstrates how to load and display Airbnb listings data using vanilla JavaScript, Bootstrap, and modern web development practices.

## Project Objective

This project serves as an educational example showcasing how to:
- Load JSON data asynchronously with JavaScript
- Create responsive web interfaces using Bootstrap 5
- Implement modern web development best practices
- Display real-world Airbnb listings data from San Francisco

## Screenshot

![SF Airbnb Listings Explorer](https://via.placeholder.com/800x500/007bff/ffffff?text=SF+Airbnb+Listings+Explorer)

*A clean, responsive interface displaying San Francisco Airbnb listings with Bootstrap styling*

## Tech Stack & Requirements

### Technologies Used
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling and responsive design
- **JavaScript (ES6+)** - Data loading and DOM manipulation
- **Bootstrap 5.3.8** - Responsive UI framework
- **JSON** - Data format for listings

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **Jest** - Testing framework (configured)

### Browser Requirements
- Modern web browser with ES6 support
- JavaScript enabled

## Features

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🚀 **Fast Loading** - Optimized performance with efficient data handling
- 🎨 **Modern UI** - Clean, professional interface using Bootstrap components
- 📊 **Real Data** - Displays actual Airbnb listings from San Francisco
- 🔍 **Data Visualization** - Easy-to-read listing information and details

## Installation & Usage

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NavaneethMaruthi/SF-Airbnb-Listing.git
   cd SF-Airbnb-Listing
   ```

2. **Install dependencies (for development):**
   ```bash
   npm install
   ```

3. **Open the application:**
   - Simply open `index.html` in your web browser, or
   - Use a local server for better development experience:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

4. **Navigate to the application:**
   - Open your browser and go to `http://localhost:8000` (if using a local server)
   - Or simply double-click `index.html` to open directly

### Development Commands

```bash
# Run ESLint for code quality checks
npm run lint

# Run tests (when implemented)
npm test

# Format code with Prettier
npm run format
```

## Project Structure

```
airbnb2/
├── index.html              # Main application page
├── about.html             # About page
├── css/
│   └── main.css          # Custom styles
├── js/
│   └── main.js           # Main JavaScript logic
├── data/
│   └── airbnb_sf_listings_500.json  # Sample Airbnb data (500 listings)
├── package.json          # Project dependencies and scripts
├── eslint.config.js      # ESLint configuration
├── LICENSE               # MIT License
└── README.md            # This file
```

## Data Source

The application uses a dataset of 500 real Airbnb listings from San Francisco, including:
- Listing details (name, description, price)
- Host information
- Location data
- Amenities and features
- Photos and ratings

## Future Enhancements

- 🔍 Search and filtering functionality
- 📍 Interactive map integration
- 📈 Data visualization charts
- 🔗 API integration for live data
- 💾 Local storage for favorites

## Author

**Navaneeth Maruthi**

## Academic Reference

This project was created as part of the **Web Development Course (Fall 2025)** at Universidad de los Andes.

- 📚 **Course:** Web Development
- 🏫 **Institution:** Northeastern University
- 🎓 **Instructor:** John Alexis Guerra Gomez
- 🔗 **Course Materials:** [Web Development Lectures](https://johnguerra.co/lectures/webDevelopment_fall2025/)
- 📖 **Specific Lecture:** [Bootstrap & Project Documentation](https://johnguerra.co/lectures/webDevelopment_fall2025/04_Bootstrap/#/4/6/6)

## Video Demonstration

🎥 [View Live Demo](https://your-demo-link-here.com) *(Coming soon)*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## AI Usage

This README was generated using Github Copilot and Claude Sonet 4

Prompt 
```I Want You To Think As a Full stack engineer with a lot of experience in job script and help me create a README file for this project which is just a simple example on how to load Airbnb listings using javascript and You Can Follow This Guide that I'm providing from my class https://johnguerra.co/lectures/webDevelopment_fall2025/04_Bootstrap/#/4/6/6```
---

⭐ If this project helped you learn something new, please give it a star!
