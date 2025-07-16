import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  FaCalendar, FaClock, FaEye, FaArrowRight, FaCode, FaRocket, FaBrain, 
  FaSearch, FaFilter, FaHeart, FaComment, FaShare, FaBookmark,
  FaArrowLeft, FaTags, FaUser, FaThumbsUp, FaThumbsDown
} from 'react-icons/fa';

// Mock blog data with enhanced features
const allBlogs = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt: "Learn how to architect and deploy microservices that can handle millions of requests with minimal latency.",
    content: `# Building Scalable Microservices with Node.js and Docker

## Introduction

Microservices architecture has revolutionized how we build and deploy applications. In this comprehensive guide, we'll explore how to create scalable microservices using Node.js and Docker.

## Table of Contents
1. [Understanding Microservices](#understanding)
2. [Setting up Node.js Services](#nodejs)
3. [Containerization with Docker](#docker)
4. [Service Communication](#communication)
5. [Deployment Strategies](#deployment)

## Understanding Microservices

Microservices break down applications into smaller, manageable services that can be developed, deployed, and scaled independently...

## Setting up Node.js Services

\`\`\`javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(\`Service running on port \${PORT}\`);
});
\`\`\`

## Docker Configuration

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

This approach ensures optimal performance and scalability for modern applications.`,
    author: "Ashish Jaiswal",
    date: "2024-12-15",
    readTime: "8 min read",
    views: 1247,
    likes: 89,
    comments: 12,
    tags: ["Node.js", "Docker", "Microservices", "Architecture", "Backend", "DevOps"],
    featured: true,
    image: "/api/placeholder/800/400",
    category: "Backend Development",
    published: true,
    seoTitle: "Scalable Microservices with Node.js and Docker - Complete Guide",
    seoDescription: "Learn to build and deploy scalable microservices using Node.js and Docker. Complete tutorial with code examples.",
    keywords: ["microservices", "nodejs", "docker", "scalability"]
  },
  {
    id: 2,
    title: "AI-Powered Code Generation: The Future of Software Development",
    excerpt: "Exploring how AI tools like GitHub Copilot and ChatGPT are revolutionizing the way we write code.",
    content: `# AI-Powered Code Generation: The Future of Software Development

Artificial Intelligence is transforming software development in unprecedented ways. This article explores the current state and future potential of AI-powered code generation tools.

## Current AI Tools
- GitHub Copilot
- OpenAI Codex  
- Tabnine
- Replit Ghostwriter

## Benefits and Challenges
AI code generation offers increased productivity but requires careful consideration of code quality and security implications.

## Future Outlook
The integration of AI in development workflows will continue to evolve, making developers more efficient while requiring new skills in AI collaboration.`,
    author: "Ashish Jaiswal",
    date: "2024-12-10",
    readTime: "6 min read",
    views: 892,
    likes: 76,
    comments: 8,
    tags: ["AI", "Machine Learning", "Development Tools", "Future Tech", "Automation"],
    featured: true,
    image: "/api/placeholder/800/400",
    category: "Artificial Intelligence",
    published: true,
    seoTitle: "AI Code Generation Tools - Future of Software Development",
    seoDescription: "Explore how AI tools like GitHub Copilot are changing software development.",
    keywords: ["ai", "code generation", "github copilot", "automation"]
  },
  {
    id: 3,
    title: "React Performance Optimization: From 0 to Production",
    excerpt: "Best practices and advanced techniques to make your React applications lightning fast.",
    content: `# React Performance Optimization: From 0 to Production

Performance is crucial for user experience. Learn how to optimize your React applications for production.

## Key Optimization Techniques
1. Code Splitting
2. Lazy Loading
3. Memoization
4. Virtual Scrolling
5. Bundle Analysis

## Implementation Examples
\`\`\`jsx
import { memo, useMemo, useCallback } from 'react';

const OptimizedComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: expensiveCalculation(item)
    }));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => 
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      )}
    </div>
  );
});
\`\`\`

These techniques can dramatically improve your app's performance.`,
    author: "Ashish Jaiswal",
    date: "2024-12-05",
    readTime: "10 min read",
    views: 2156,
    likes: 134,
    comments: 18,
    tags: ["React", "Performance", "Optimization", "Frontend", "JavaScript"],
    featured: true,
    image: "/api/placeholder/800/400",
    category: "Frontend Development",
    published: true,
    seoTitle: "React Performance Optimization Guide - Complete Tutorial",
    seoDescription: "Master React performance optimization with practical examples and best practices.",
    keywords: ["react", "performance", "optimization", "frontend"]
  },
  {
    id: 4,
    title: "Database Design Patterns for Modern Applications",
    excerpt: "Understanding when to use SQL vs NoSQL and optimizing database performance.",
    content: `# Database Design Patterns for Modern Applications

Choosing the right database design pattern is crucial for application success. This guide covers modern approaches to database architecture.

## SQL vs NoSQL Decision Matrix
- **SQL**: ACID compliance, complex relationships, consistent data
- **NoSQL**: Scalability, flexible schema, high performance

## Design Patterns
1. Repository Pattern
2. Unit of Work
3. Data Mapper
4. Active Record

## Performance Optimization
- Indexing strategies
- Query optimization
- Connection pooling
- Caching layers

Modern applications require thoughtful database design to handle scale and complexity.`,
    author: "Ashish Jaiswal",
    date: "2024-11-28",
    readTime: "12 min read",
    views: 743,
    likes: 45,
    comments: 6,
    tags: ["Database", "PostgreSQL", "MongoDB", "Design Patterns", "SQL", "NoSQL"],
    featured: false,
    image: "/api/placeholder/800/400",
    category: "Database",
    published: true,
    seoTitle: "Database Design Patterns - SQL vs NoSQL Guide",
    seoDescription: "Learn when to use SQL vs NoSQL and master database design patterns.",
    keywords: ["database", "sql", "nosql", "design patterns"]
  },
  {
    id: 5,
    title: "DevOps Best Practices: CI/CD with GitHub Actions",
    excerpt: "Setting up automated deployments and testing pipelines for maximum efficiency.",
    content: `# DevOps Best Practices: CI/CD with GitHub Actions

Continuous Integration and Continuous Deployment are essential for modern software development. Learn how to implement robust CI/CD pipelines with GitHub Actions.

## GitHub Actions Workflow Example
\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
    - run: npm run build
\`\`\`

## Best Practices
- Automated testing
- Code quality checks
- Security scanning
- Deployment automation

Implementing these practices ensures reliable and efficient software delivery.`,
    author: "Ashish Jaiswal",
    date: "2024-11-20",
    readTime: "7 min read",
    views: 567,
    likes: 34,
    comments: 4,
    tags: ["DevOps", "CI/CD", "GitHub Actions", "Automation", "Testing"],
    featured: false,
    image: "/api/placeholder/800/400",
    category: "DevOps",
    published: true,
    seoTitle: "CI/CD with GitHub Actions - DevOps Best Practices",
    seoDescription: "Master CI/CD with GitHub Actions. Complete guide to automated deployments.",
    keywords: ["devops", "cicd", "github actions", "automation"]
  },
  {
    id: 6,
    title: "The Art of Clean Code: Writing Maintainable Software",
    excerpt: "Principles and practices that every developer should follow for better code quality.",
    content: `# The Art of Clean Code: Writing Maintainable Software

Clean code is not just about making code work – it's about making it readable, maintainable, and elegant. This guide explores the principles that make code truly clean.

## Core Principles
1. **Meaningful Names**: Choose descriptive, searchable names
2. **Small Functions**: Each function should do one thing well
3. **Clear Comments**: Explain why, not what
4. **Consistent Formatting**: Follow established conventions

## Code Examples
\`\`\`javascript
// Bad
function calc(x, y) {
  return x * 0.1 + y;
}

// Good  
function calculateTotalWithTax(basePrice, tax) {
  const TAX_RATE = 0.1;
  return basePrice * TAX_RATE + tax;
}
\`\`\`

## SOLID Principles
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

Writing clean code is an investment in your future self and your team.`,
    author: "Ashish Jaiswal",
    date: "2024-11-15",
    readTime: "9 min read",
    views: 1089,
    likes: 67,
    comments: 9,
    tags: ["Clean Code", "Best Practices", "Software Engineering", "Code Quality"],
    featured: false,
    image: "/api/placeholder/800/400",
    category: "Software Engineering",
    published: true,
    seoTitle: "Clean Code Principles - Writing Maintainable Software",
    seoDescription: "Learn clean code principles and best practices for maintainable software.",
    keywords: ["clean code", "software engineering", "best practices"]
  }
];

const POSTS_PER_PAGE = 6;

const BlogList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();

  // State management
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'newest');
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1'));
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allBlogs.map(blog => blog.category)))];

  // Filter and sort blogs
  const filteredAndSortedBlogs = useMemo(() => {
    let filtered = allBlogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCategory && blog.published;
    });

    // Sort blogs
    switch (sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'liked':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      default: // newest
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredAndSortedBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory !== 'All') params.set('category', selectedCategory);
    if (sortBy !== 'newest') params.set('sort', sortBy);
    if (currentPage !== 1) params.set('page', currentPage.toString());
    setSearchParams(params);
  }, [searchTerm, selectedCategory, sortBy, currentPage, setSearchParams]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend Development':
      case 'Database':
      case 'DevOps':
        return FaCode;
      case 'Artificial Intelligence':
        return FaBrain;
      case 'Frontend Development':
        return FaRocket;
      default:
        return FaCode;
    }
  };

  const handleLike = (blogId: number) => {
    setLikedPosts(prev => 
      prev.includes(blogId) 
        ? prev.filter(id => id !== blogId)
        : [...prev, blogId]
    );
    toast({
      title: likedPosts.includes(blogId) ? "Like removed" : "Post liked!",
      description: likedPosts.includes(blogId) ? "Removed from liked posts" : "Added to your liked posts",
    });
  };

  const handleBookmark = (blogId: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(blogId) 
        ? prev.filter(id => id !== blogId)
        : [...prev, blogId]
    );
    toast({
      title: bookmarkedPosts.includes(blogId) ? "Bookmark removed" : "Post bookmarked!",
      description: bookmarkedPosts.includes(blogId) ? "Removed from bookmarks" : "Added to your bookmarks",
    });
  };

  const handleShare = (blog: typeof allBlogs[0]) => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: `/blog/${blog.id}`,
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/blog/${blog.id}`);
      toast({
        title: "Link copied!",
        description: "Blog link copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 cyber-grid">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 cyber-button"
            >
              <FaArrowLeft className="mr-2" />
              Back to Portfolio
            </Button>
            
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient-cyber mb-4">
              TECH BLOG
            </h1>
            <div className="w-32 h-1 bg-gradient-cyber mx-auto mb-6 animate-neon-pulse"></div>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Deep dives into software engineering, cutting-edge technologies, and industry insights
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="cyber-border p-6 bg-background/30 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                  <Input
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 cyber-input"
                  />
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="cyber-input">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort By */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="cyber-input">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="liked">Most Liked</SelectItem>
                  </SelectContent>
                </Select>

                {/* Results Count */}
                <div className="flex items-center justify-center text-foreground/70">
                  <FaFilter className="mr-2" />
                  {filteredAndSortedBlogs.length} posts found
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Blog Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${searchTerm}-${selectedCategory}-${sortBy}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {paginatedBlogs.map((blog, index) => {
                const CategoryIcon = getCategoryIcon(blog.category);
                const isLiked = likedPosts.includes(blog.id);
                const isBookmarked = bookmarkedPosts.includes(blog.id);
                
                return (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="cyber-border h-full bg-background/30 backdrop-blur-sm hover:shadow-glow-cyan transition-all duration-300 overflow-hidden">
                      {/* Blog Image */}
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CategoryIcon className="text-6xl text-primary/30" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="cyber-button">
                            {blog.category}
                          </Badge>
                        </div>
                        {blog.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-accent text-accent-foreground">
                              Featured
                            </Badge>
                          </div>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault();
                              handleBookmark(blog.id);
                            }}
                            className={`cyber-button ${isBookmarked ? 'bg-accent' : ''}`}
                          >
                            <FaBookmark className={isBookmarked ? 'text-accent-foreground' : ''} />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.preventDefault();
                              handleShare(blog);
                            }}
                            className="cyber-button"
                          >
                            <FaShare />
                          </Button>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Meta Info */}
                        <div className="flex items-center text-sm text-foreground/60 mb-3 space-x-4">
                          <div className="flex items-center space-x-1">
                            <FaUser className="text-xs" />
                            <span>{blog.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCalendar className="text-xs" />
                            <span>{new Date(blog.date).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center text-sm text-foreground/60 mb-3 space-x-4">
                          <div className="flex items-center space-x-1">
                            <FaClock className="text-xs" />
                            <span>{blog.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaEye className="text-xs" />
                            <span>{blog.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaHeart className="text-xs" />
                            <span>{blog.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaComment className="text-xs" />
                            <span>{blog.comments}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-foreground/70 mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="outline" 
                              className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
                              onClick={() => setSearchTerm(tag)}
                            >
                              <FaTags className="mr-1" />
                              {tag}
                            </Badge>
                          ))}
                          {blog.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{blog.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <Button
                            variant="ghost"
                            onClick={(e) => {
                              e.preventDefault();
                              handleLike(blog.id);
                            }}
                            className={`cyber-button ${isLiked ? 'text-red-500' : ''}`}
                          >
                            <FaHeart className={`mr-2 ${isLiked ? 'fill-current' : ''}`} />
                            {blog.likes + (isLiked ? 1 : 0)}
                          </Button>

                          <Link to={`/blog/${blog.id}`}>
                            <Button 
                              variant="default" 
                              className="cyber-button bg-gradient-cyber group-hover:shadow-glow-cyan transition-all duration-300"
                            >
                              <span>Read More</span>
                              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredAndSortedBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Card className="cyber-border p-12 bg-background/20 backdrop-blur-sm max-w-2xl mx-auto">
                <FaSearch className="text-6xl text-primary/30 mx-auto mb-6" />
                <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
                  No blogs found
                </h3>
                <p className="text-foreground/70 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSortBy('newest');
                  }}
                  className="cyber-button bg-gradient-cyber"
                >
                  Clear Filters
                </Button>
              </Card>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className="cyber-button"
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cyber-button"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className="cyber-button"
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;