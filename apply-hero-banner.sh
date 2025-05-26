#!/bin/zsh

# Apply Hero Banner Enhancement to Hashnode Blog
# This script helps you apply the full-width hero banner enhancement to your Hashnode blog

echo "🚀 Applying Hero Banner Enhancement to Hashnode Blog"
echo "======================================================"

# Define color codes for better readability
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Create directories if they don't exist
if [ ! -d "dist" ]; then
  mkdir dist
  echo "${BLUE}Created dist directory${NC}"
fi

# Combine CSS files
echo "${YELLOW}Combining CSS files...${NC}"
cat components/hero-banner.css > dist/hashnode-enhanced-styles.css
cat hashnode-custom-styles.css >> dist/hashnode-enhanced-styles.css
echo "${GREEN}✓ CSS files combined!${NC}"

# Combine JS files
echo "${YELLOW}Combining JS files...${NC}"
cat hashnode-hero-banner.js > dist/hashnode-enhanced-js.js
cat hashnode-custom-js.js >> dist/hashnode-enhanced-js.js
echo "${GREEN}✓ JS files combined!${NC}"

# Minify files if minify command is available
if command -v minify &> /dev/null; then
  echo "${YELLOW}Minifying files...${NC}"
  minify dist/hashnode-enhanced-styles.css > dist/hashnode-enhanced-styles.min.css
  minify dist/hashnode-enhanced-js.js > dist/hashnode-enhanced-js.min.js
  echo "${GREEN}✓ Files minified!${NC}"
else
  echo "${YELLOW}Minify command not found. Skipping minification.${NC}"
  # Create copies as .min versions
  cp dist/hashnode-enhanced-styles.css dist/hashnode-enhanced-styles.min.css
  cp dist/hashnode-enhanced-js.js dist/hashnode-enhanced-js.min.js
fi

echo "\n${GREEN}✓ Enhancement files prepared successfully!${NC}"
echo "\nNext steps:"
echo "${BLUE}1. Copy the content from dist/hashnode-enhanced-styles.min.css to your Hashnode blog's CSS section${NC}"
echo "${BLUE}2. Copy the content from dist/hashnode-enhanced-js.min.js to your Hashnode blog's JavaScript section${NC}"
echo "${BLUE}3. Follow the implementation guide in HERO_BANNER_GUIDE.md${NC}"
echo "\nEnjoy your enhanced blog with full-width hero banners! 🎉"
