import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Array of blog objects (add all 10 blogs)
const blogs = [
  {
    publishDate: "2025-07-30T00:00:00Z",
    title: "How to Master Video Marketing for Your Business",
    slug: "how-to-master-video-marketing-for-your-business",
    excerpt: "Video marketing is a powerful tool for business growth. Learn how to create and optimize video content to engage your audience and boost your business.",
    image: "https://images.unsplash.com/photo-1584061511739-609228f94c5c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQzOXwwfDF8c2VhcmNofDkzfHxiYXNlZCBpbi12aWRlby1tYXJrZXRpbmd8ZW58MHx8fDE2NzYzNzYzODM&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Video Marketing",
    tags: ["video marketing", "content creation", "business growth", "marketing strategies"],
    canonical: "https://yourwebsite.com/blog/how-to-master-video-marketing-for-your-business",
    content: `## Mastering Video Marketing for Business

Video marketing is one of the most engaging ways to connect with your audience. With the right approach, it can drive significant business growth. Here’s how to master video marketing for your business:

### 1. **Create High-Quality Content**
Your videos should reflect your brand’s voice and values. Invest in good equipment, and create visually appealing and informative content that resonates with your audience.

### 2. **Optimize for SEO**
Just like with written content, SEO is essential for video. Use relevant keywords in your video title, description, and tags to improve discoverability on platforms like YouTube.

### 3. **Leverage Different Video Types**
Experiment with various types of videos such as tutorials, customer testimonials, product demos, and behind-the-scenes footage to keep your content fresh and engaging.

### Conclusion
Video marketing is an essential tool for businesses. By focusing on high-quality content, SEO, and experimenting with different formats, you can leverage video to drive growth and connect with your audience.`
  },
  {
    publishDate: "2025-07-29T00:00:00Z",
    title: "Why Every Business Needs an SEO Strategy",
    slug: "why-every-business-needs-an-seo-strategy",
    excerpt: "SEO is essential for improving visibility and driving traffic. Learn why having an SEO strategy is critical for the success of your business in 2025.",
    image: "https://images.unsplash.com/photo-1556742044-cc6e1ec6a1d3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQzOXwwfDF8c2VhcmNofDk2fHxiYXNlZCBpbi1zZWFyY2h8ZW58MHx8fDE2NzYzNzYzODk&ixlib=rb-1.2.1&q=80&w=1080",
    category: "SEO",
    tags: ["SEO strategy", "search engine optimization", "digital marketing", "website traffic"],
    canonical: "https://yourwebsite.com/blog/why-every-business-needs-an-seo-strategy",
    content: `## The Importance of SEO for Every Business

In 2025, SEO is a crucial part of any digital marketing strategy. Here’s why every business needs a solid SEO strategy:

### 1. **Increased Website Visibility**
SEO helps your website rank higher in search engine results, making it easier for potential customers to find your business online.

### 2. **Drive Organic Traffic**
Organic traffic from search engines is highly targeted. People searching for specific products or services are more likely to convert, making SEO a cost-effective strategy for long-term success.

### 3. **Build Trust and Credibility**
A well-optimized website not only improves visibility but also builds trust with your audience. Appearing at the top of search results signals authority and reliability.

### Conclusion
SEO is not optional—it's essential for business success in 2025. An effective SEO strategy can drive traffic, build credibility, and provide long-term value to your business.`
  },
  {
    publishDate: "2025-07-28T00:00:00Z",
    title: "How to Build an Effective Lead Generation Funnel",
    slug: "how-to-build-an-effective-lead-generation-funnel",
    excerpt: "A lead generation funnel helps you capture, nurture, and convert leads. Learn how to build a funnel that effectively generates quality leads for your business.",
    image: "https://images.unsplash.com/photo-1562059392-174a612f2e7b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQzOXwwfDF8c2VhcmNofDg4fHxiYXNlZCBpbi1sZWFkZXItZm9yLWJlYXV0eXxlbnwwfHx8fDE2NzYzNzYzODQ&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Lead Generation",
    tags: ["lead generation", "sales funnel", "business growth", "conversion optimization"],
    canonical: "https://yourwebsite.com/blog/how-to-build-an-effective-lead-generation-funnel",
    content: `## Building an Effective Lead Generation Funnel

A well-structured lead generation funnel guides prospects from awareness to conversion. Here’s how you can build a lead generation funnel that generates quality leads for your business:

### 1. **Attract Your Audience**
Create content that addresses your target audience’s pain points and interests. Utilize SEO, social media, and paid ads to drive traffic to your website.

### 2. **Capture Leads**
Use lead magnets like free eBooks, webinars, or discounts to entice visitors to provide their contact information.

### 3. **Nurture Your Leads**
Follow up with valuable content through email marketing or retargeting ads. Continue to provide useful information that helps build trust.

### 4. **Convert to Sales**
Once you’ve nurtured leads, move them closer to a sale by offering exclusive deals, consultations, or personalized recommendations.

### Conclusion
A lead generation funnel is crucial for converting visitors into customers. By attracting, capturing, nurturing, and converting leads, you can build a steady pipeline of sales opportunities.`
  },
  {
    publishDate: "2025-07-27T00:00:00Z",
    title: "The Power of User-Generated Content for Brand Growth",
    slug: "the-power-of-user-generated-content-for-brand-growth",
    excerpt: "User-generated content (UGC) can significantly boost brand awareness and trust. Learn how to encourage UGC and leverage it to grow your brand.",
    image: "https://images.unsplash.com/photo-1531482104332-c0b1f1c9cfc2?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQzOXwwfDF8c2VhcmNofDk2fHxiYXNlZCBpbi11c2VyLWdlbmVyYXRlZC1jb250ZW50fGVufDB8fHx8fDE2NzYzNzYzODI&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Branding",
    tags: ["user-generated content", "brand growth", "UGC", "marketing strategy"],
    canonical: "https://yourwebsite.com/blog/the-power-of-user-generated-content-for-brand-growth",
    content: `## How User-Generated Content Drives Brand Growth

User-generated content (UGC) is a powerful tool for building trust and expanding your brand’s reach. Here's how you can leverage UGC for growth:

### 1. **Build Trust with Authentic Content**
User-generated content provides social proof, showing that real people are using and enjoying your product. This builds trust with your audience, as consumers are more likely to believe their peers than traditional ads.

### 2. **Engage Your Audience**
Encouraging UGC fosters a sense of community and increases engagement. Run contests, ask for feedback, or encourage reviews to get your customers involved.

### 3. **Expand Your Reach**
When users share content related to your brand, it exposes your business to their followers, expanding your reach and attracting new customers.

### Conclusion
User-generated content is a cost-effective way to grow your brand. By encouraging content from your customers and showcasing it, you can build trust, increase engagement, and expand your reach.`
  },
  {
    publishDate: "2025-07-26T00:00:00Z",
    title: "How to Create a Viral Marketing Campaign",
    slug: "how-to-create-a-viral-marketing-campaign",
    excerpt: "Creating a viral marketing campaign can propel your business into the spotlight. Learn the strategies to make your marketing campaign go viral.",
    image: "https://images.unsplash.com/photo-1590972212419-1e9c9e215ff1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQzOXwwfDF8c2VhcmNofDk0fHxiYXNlZCBpbi1waW5nJTIwdmlrZWFsLXZpcnR1YWx8ZW58MHx8fDE2NzYzNzYzODI&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Marketing Strategy",
    tags: ["viral marketing", "marketing campaigns", "brand awareness", "digital marketing"],
    canonical: "https://yourwebsite.com/blog/how-to-create-a-viral-marketing-campaign",
    content: `## Creating a Viral Marketing Campaign

A viral marketing campaign can rapidly spread awareness about your business. Here’s how you can create one that captures attention and generates buzz:

### 1. **Identify the Right Message**
Your campaign should have a clear, relatable, and shareable message. Focus on emotions, humor, or novelty to create an impact.

### 2. **Use Social Media**
Leverage the power of social media platforms to spread your campaign. Encourage users to share your content with their networks and use hashtags to increase reach.

### 3. **Incorporate Influencers**
Partnering with influencers who align with your brand can help amplify your message and give your campaign credibility.

### Conclusion
Creating a viral marketing campaign takes creativity, timing, and strategy. By focusing on a compelling message and leveraging social media and influencers, you can increase your chances of going viral.`
  },
  {
    publishDate: "2025-07-25T00:00:00Z",
    title: "5 Mistakes to Avoid in Your Digital Marketing Campaigns",
    slug: "5-mistakes-to-avoid-in-your-digital-marketing-campaigns",
    excerpt: "Digital marketing campaigns can make or break your business. Avoid these common mistakes to ensure your campaigns are successful.",
    image: "https://images.unsplash.com/photo-1518620700717-dc0e5d58ec9b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjQzOXwwfDF8c2VhcmNofDk2fHxiYXNlZCBpbi1kaWdpdGFsLW1hcmtldGluZ3xlbnwwfHx8fDE2NzYzNzYzODI&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Digital Marketing",
    tags: ["digital marketing mistakes", "marketing strategy", "campaign optimization", "marketing pitfalls"],
    canonical: "https://yourwebsite.com/blog/5-mistakes-to-avoid-in-your-digital-marketing-campaigns",
    content: `## 5 Common Mistakes to Avoid in Your Digital Marketing Campaigns

While digital marketing offers endless opportunities, it’s easy to make mistakes that can undermine your efforts. Here are five common mistakes to avoid in your campaigns:

### 1. **Not Defining Clear Goals**
Without clear objectives, your campaigns may lack direction. Always define your goals, whether it's to increase brand awareness, drive traffic, or generate leads.

### 2. **Ignoring Audience Segmentation**
Failing to segment your audience means you're delivering generic content. Customize your campaigns based on demographics, interests, or behavior for better results.

### 3. **Overlooking Analytics**
Data is essential for improving your campaigns. Neglecting to analyze performance can result in missed opportunities to optimize your strategy.

### 4. **Neglecting Mobile Optimization**
Many users access content through mobile devices. Ensure your digital marketing campaigns are optimized for mobile for maximum engagement.

### 5. **Lack of Consistency**
Inconsistent messaging can confuse your audience and harm brand recognition. Maintain consistent branding and communication across all channels.

### Conclusion
Avoiding these digital marketing mistakes will improve your campaigns’ effectiveness. By setting clear goals, segmenting your audience, and optimizing performance, you’ll see better results.`
  }
];





// Path where you want to generate the files
const outputDir = "/Users/sanjayguwaju/Documents/side-projects/opus-digital/src/data/post/";

// Create directory if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate each blog file
blogs.forEach(blog => {
  const fileContent = `---
publishDate: ${blog.publishDate}
title: ${blog.title}
slug: ${blog.slug}
excerpt: ${blog.excerpt}
image: ${blog.image}
category: ${blog.category}
tags:
${blog.tags.map(tag => `  - ${tag}`).join('\n')}
metadata:
  canonical: ${blog.canonical}
---

${blog.content}
`;

  const filePath = path.join(outputDir, `${blog.slug}.md`);
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Generated: ${filePath}`);
});

console.log("All blog files generated successfully!");
