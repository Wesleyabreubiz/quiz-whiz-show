# Quiz Embed - Vanilla HTML/CSS/JavaScript

This directory contains vanilla HTML/CSS/JavaScript versions of the interactive quiz that can be embedded anywhere.

## Files Included

### 1. `quiz-embed.html` (Complete Standalone)
- **Recommended for most users**
- Single HTML file with embedded CSS and JavaScript
- No external dependencies
- Just upload and use

### 2. `quiz-embed.js` + `quiz-embed.css` (Separate Files)
- For those who prefer separate files
- Better for customization and maintenance
- Requires basic HTML structure

## Usage Options

### Option 1: Complete Standalone (Easiest)
```html
<!-- Simply include the complete file -->
<iframe src="quiz-embed.html" width="100%" height="700px" frameborder="0"></iframe>
```

### Option 2: Direct Integration
Copy the content of `quiz-embed.html` directly into your webpage.

### Option 3: Separate Files
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="quiz-embed.css">
</head>
<body>
    <!-- Add the HTML structure from quiz-embed.html -->
    <div class="quiz-container">
        <header class="quiz-header">
            <h1 class="quiz-title">Quiz Whiz Show</h1>
            <p class="quiz-subtitle">Test your knowledge with our interactive quiz!</p>
        </header>
        <!-- ... rest of HTML structure ... -->
    </div>
    
    <script src="quiz-embed.js"></script>
</body>
</html>
```

## Customization

### Change Quiz Questions
Edit the `quizQuestions` array in the JavaScript:
```javascript
const quizQuestions = [
    {
        id: 1,
        question: "Your custom question?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 2, // 0-based index
        explanation: "Explanation for the correct answer",
        type: "multiple-choice" // or "true-false"
    }
    // Add more questions...
];
```

### Change Colors/Styling
Modify the CSS variables in the `:root` section:
```css
:root {
    --primary: #8b5cf6;          /* Main brand color */
    --primary-glow: #a78bfa;     /* Lighter brand color */
    --success: #10b981;          /* Correct answer color */
    --error: #ef4444;            /* Wrong answer color */
    /* ... other colors ... */
}
```

### Change Title and Subtitle
Edit the HTML content:
```html
<h1 class="quiz-title">Your Academy Quiz</h1>
<p class="quiz-subtitle">Test your English knowledge!</p>
```

## Features Included

✅ Multiple choice questions (A, B, C, D)  
✅ True/False questions  
✅ Immediate visual feedback  
✅ Detailed explanations for wrong answers  
✅ Progress tracking  
✅ Score calculation  
✅ Completion screen  
✅ Restart functionality  
✅ Responsive design  
✅ Smooth animations  
✅ No external dependencies  

## Browser Compatibility

- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers
- Internet Explorer 11+ (with some limitations)

## File Sizes

- `quiz-embed.html`: ~15KB (complete solution)
- `quiz-embed.css`: ~8KB
- `quiz-embed.js`: ~7KB