# TechGear Pro - Premium Tech Products

A modern e-commerce platform built with Next.js, showcasing premium tech products with a focus on user experience and performance.

## Features

- Responsive design for all device sizes
- Server-side rendering for optimal performance
- Product listing with filtering and search
- Detailed product pages with rich content
- SEO optimized with meta tags
- Docker support for easy deployment

## Tech Stack

- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for UI components
- Docker for containerization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/techgear-pro.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t techgear-pro .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 techgear-pro
   ```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── products/        # Product pages
├── components/          # Reusable components
├── lib/                 # Utility functions and types
├── public/             # Static assets
└── data/               # Mock data
```

## Development Decisions

1. **App Router**: Utilizing Next.js 13+ App Router for better performance and simpler routing.
2. **TypeScript**: Ensuring type safety and better developer experience.
3. **Tailwind CSS**: Rapid development with utility-first CSS.
4. **shadcn/ui**: High-quality, accessible components.
5. **Docker**: Easy deployment and consistent environments.

## Performance Optimizations

- Image optimization with Next.js Image component
- Server-side rendering for better SEO
- Lazy loading of components
- Responsive images for different screen sizes
- Proper caching strategies

## SEO Considerations

- Meta tags for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Optimized images with alt text

## Accessibility

- ARIA labels where needed
- Semantic HTML
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Future Improvements

- Add authentication
- Implement shopping cart functionality
- Add payment processing
- Include user reviews
- Add wishlist feature
- Implement real-time stock updates

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.