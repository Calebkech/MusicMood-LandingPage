const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Helper function to render EJS templates to static HTML files
const renderPage = (templatePath, outputPath, data) => {
  const template = fs.readFileSync(templatePath, 'utf8');
  const rendered = ejs.render(template, data, {
    views: [path.join(__dirname, 'views', 'partials')] // specify the path to the partials
  });
  fs.writeFileSync(outputPath, rendered);
};

const data = {}; // Add any data you need to pass to your templates here

renderPage(
  path.join(__dirname, 'views', 'pages', 'index.ejs'),
  path.join(__dirname, 'public', 'index.html'),
  data
);

renderPage(
  path.join(__dirname, 'views', 'pages', 'about.ejs'),
  path.join(__dirname, 'public', 'about.html'),
  data
);

renderPage(
  path.join(__dirname, 'views', 'pages', 'contact.ejs'),
  path.join(__dirname, 'public', 'contact.html'),
  data
);
