#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all markdown files
const blogDir = __dirname;
const markdownFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

console.log('Calculating reading time for blog posts...\n');

markdownFiles.forEach(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Split content into frontmatter and body
  const parts = content.split('---');
  if (parts.length < 3) {
    console.log(`⚠️ Skipping ${file}: Invalid frontmatter format`);
    return;
  }
  
  const frontmatter = parts[1];
  const body = parts.slice(2).join('---');
  
  // Extract title for logging
  const titleMatch = frontmatter.match(/title:\s*"(.+?)"/);
  const title = titleMatch ? titleMatch[1] : file;
  
  // Calculate word count and reading time
  const wordCount = body.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  
  console.log(`📝 "${title}"`);
  console.log(`   Words: ${wordCount}`);
  console.log(`   Reading time: ${readingTime} min\n`);
});

console.log('✅ Done!');
console.log('');
console.log('To add reading time to your posts, include this at the beginning of each post:');
console.log('**Reading time: X min** • Published on [date]');
