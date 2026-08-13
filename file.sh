cd /home/ubuntu/manixil-bio-organics

cat > create-structure.sh << 'EOF'
#!/bin/bash

echo "Creating Manixil Bio Organics project structure..."

# Create folders
mkdir -p components
mkdir -p data
mkdir -p public/images

mkdir -p app/about
mkdir -p app/products
mkdir -p app/research
mkdir -p app/contact

# Create component files
touch components/Navbar.tsx
touch components/Footer.tsx
touch components/Hero.tsx
touch components/AboutSection.tsx
touch components/ProductSection.tsx
touch components/ContactSection.tsx

# Create page files
touch app/about/page.tsx
touch app/products/page.tsx
touch app/research/page.tsx
touch app/contact/page.tsx

# Create data file
touch data/products.ts

echo ""
echo "Structure created successfully!"
echo ""
tree . -L 3
EOF
