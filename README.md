# Age Calculator

A creative and interactive web application that calculates your precise age based on your birthdate. This tool breaks down your age into years, months, weeks, and days with smooth animations and an engaging user interface.

## Features

- **Precise Age Calculation**: Get your exact age broken down into:
  - Years
  - Months
  - Weeks
  - Days

- **Beautiful UI**: 
  - Modern glassmorphic design with animated gradient background
  - Responsive layout that works on all devices
  - Smooth animations when displaying results

- **Input Validation**:
  - Validates day, month, and year inputs
  - Prevents invalid dates (e.g., Feb 30)
  - Checks that birthdate is not in the future
  - User-friendly error messages with emojis

- **Interactive Experience**:
  - Real-time age calculation
  - Animated number transitions
  - Personalized messages based on age

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Installation

1. Clone or download this project to your local machine
2. Open `index.html` in your web browser
3. That's it! No dependencies or installations needed.

## How to Use

1. Enter your date of birth:
   - **Day**: Enter your birth day (1-31)
   - **Month**: Enter your birth month (1-12)
   - **Year**: Enter your birth year (1900 or later)

2. Click the **"Calculate Age"** button

3. View your age displayed in the results section with smooth animations

## Project Structure

```
Age-Calculator/
├── index.html      # HTML structure and layout
├── style.css       # Styling and animations
├── script.js       # Age calculation logic
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox for responsive layout
  - Gradient backgrounds and animations
  - Glassmorphic design effects
  - Media queries for responsiveness
- **JavaScript (Vanilla)**:
  - DOM manipulation
  - Date calculations and validation
  - Smooth number animations using requestAnimationFrame

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Features in Detail

### Age Calculation Algorithm
The calculator performs accurate date math by:
1. Computing the difference in years, months, and days
2. Adjusting for negative values (e.g., if the current month is before birth month)
3. Converting remaining days into weeks and individual days
4. Validating the input date against actual calendar rules

### Animation System
Results animate smoothly using:
- `requestAnimationFrame` for performance
- Ease-out expo function for natural motion
- 1.5-second animation duration for readability

### Validation
The app validates:
- Empty fields
- Invalid date ranges (day > 31, month > 12)
- Non-existent dates (Feb 30)
- Future dates with a fun message

## Future Enhancements

Potential features for future versions:
- Add zodiac sign display
- Include next birthday countdown
- Show age in different formats (hours, minutes)
- Dark mode toggle
- Save frequently used dates
- Share results functionality

## License

This project is open source and available for personal and educational use.

## Author

Created as a fun age calculation tool with a modern web design approach.

---

Enjoy discovering how long you've been on this planet! 🎉
