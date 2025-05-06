// Add these to your existing .eleventy.js config
const { DateTime } = require("luxon");

// Date formatting filter
eleventyConfig.addFilter("dateReadable", dateObj => {
  return DateTime.fromJSDate(dateObj).toFormat("LLLL d, yyyy");
});

// ISO date formatting filter
eleventyConfig.addFilter("dateIso", dateObj => {
  return DateTime.fromJSDate(dateObj).toISO();
});

// Excerpt filter
eleventyConfig.addFilter("excerpt", post => {
  const content = post.replace(/(<([^>]+)>)/gi, "");
  return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
});