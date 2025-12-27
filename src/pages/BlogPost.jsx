import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaCalendar, FaTag } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { getBlogPostBySlug, getRelatedPosts } from '../lib/sanity';
import PortableTextRenderer from '../components/PortableTextRenderer';

// Fallback blog posts data (used if Sanity is not configured)
const fallbackBlogPosts = [
  {
    id: 1,
    title: 'Why PPC is the fastest way to drive conversions for your Business',
    excerpt:
      'Most entrepreneurs and marketers agree on one fact when dealing with the topic of business growth speed online: time is money. Pay-Per-Click advertising (PPC) is one of the most outstanding digital marketing strategies...',
    category: 'PPC Marketing',
    readTime: '8 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    content: `
      <h2>Introduction</h2>
      <p>Most entrepreneurs and marketers agree on one fact when dealing with the topic of business growth speed online: time is money. Pay-Per-Click advertising (PPC) is one of the most outstanding digital marketing strategies that can deliver immediate results and measurable ROI.</p>
      
      <h2>What Makes PPC So Effective?</h2>
      <p>Unlike organic marketing strategies that take months to show results, PPC campaigns can start driving traffic and conversions from day one. This immediate impact makes it an invaluable tool for businesses looking to scale quickly.</p>
      
      <h2>Key Benefits of PPC Advertising</h2>
      <ul>
        <li><strong>Instant Visibility:</strong> Your ads appear at the top of search results immediately</li>
        <li><strong>Targeted Reach:</strong> Reach your ideal customers based on demographics, interests, and search intent</li>
        <li><strong>Measurable Results:</strong> Track every click, conversion, and dollar spent</li>
        <li><strong>Budget Control:</strong> Set daily limits and adjust spending based on performance</li>
        <li><strong>Competitive Advantage:</strong> Outrank competitors even if they have better SEO</li>
      </ul>
      
      <h2>How PPC Drives Conversions</h2>
      <p>PPC works by placing your business in front of people actively searching for your products or services. This high intent traffic is more likely to convert because they're already looking for what you offer.</p>
      
      <h2>Best Practices for PPC Success</h2>
      <p>To maximize your PPC ROI, focus on:</p>
      <ul>
        <li>Thorough keyword research and selection</li>
        <li>Compelling ad copy that speaks to your audience</li>
        <li>Optimized landing pages that match ad intent</li>
        <li>Continuous testing and optimization</li>
        <li>Strategic bid management</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>PPC advertising remains one of the fastest and most reliable ways to drive conversions for your business. With proper strategy and execution, it can deliver exceptional results and help you achieve your business goals quickly.</p>
    `,
  },
  {
    id: 2,
    title: 'How Contentdora Media Helps Brands Scale with Smart PPC Advertising',
    excerpt:
      "In today's digital market, which is extremely competitive, businesses have to always find ways that are not only efficient but also can be measured and that increase their visibility, leads, and sales...",
    category: 'PPC Marketing',
    readTime: '7 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    content: `
      <h2>The Challenge of Modern Digital Marketing</h2>
      <p>In today's digital market, which is extremely competitive, businesses have to always find ways that are not only efficient but also can be measured and that increase their visibility, leads, and sales. This is where Contentdora Media excels.</p>
      
      <h2>Our Strategic Approach</h2>
      <p>At Contentdora Media, we don't just run PPC campaigns - we create comprehensive strategies that align with your business goals and deliver measurable results.</p>
      
      <h2>What Sets Us Apart</h2>
      <ul>
        <li><strong>Data-Driven Decisions:</strong> Every campaign decision is backed by analytics and insights</li>
        <li><strong>Custom Strategies:</strong> We tailor our approach to your specific industry and goals</li>
        <li><strong>Transparent Reporting:</strong> You always know exactly how your campaigns are performing</li>
        <li><strong>Continuous Optimization:</strong> We constantly refine campaigns for better performance</li>
        <li><strong>Expert Team:</strong> Our certified PPC specialists bring years of experience</li>
      </ul>
      
      <h2>Our Process</h2>
      <ol>
        <li><strong>Discovery:</strong> We learn about your business, goals, and target audience</li>
        <li><strong>Strategy:</strong> We develop a custom PPC strategy tailored to your needs</li>
        <li><strong>Implementation:</strong> We launch and manage your campaigns across platforms</li>
        <li><strong>Optimization:</strong> We continuously test and improve campaign performance</li>
        <li><strong>Reporting:</strong> We provide detailed insights and recommendations</li>
      </ol>
      
      <h2>Results That Matter</h2>
      <p>Our clients consistently see improvements in key metrics including lower cost per acquisition, higher conversion rates, and better return on ad spend.</p>
      
      <h2>Ready to Scale?</h2>
      <p>If you're ready to take your business to the next level with smart PPC advertising, Contentdora Media is here to help. Let's discuss how we can drive growth for your brand.</p>
    `,
  },
  {
    id: 3,
    title: 'The Secret to Lower CPC and Higher ROI in PPC Campaigns',
    excerpt:
      'Lower CPC (Cost Per Click) and higher ROI (Return on Investment) from PPC campaigns are basically the results that can be made possible through effective click-through and strategic budget optimization...',
    category: 'PPC Marketing',
    readTime: '6 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
    content: `
      <h2>Understanding CPC and ROI</h2>
      <p>Lower CPC (Cost Per Click) and higher ROI (Return on Investment) from PPC campaigns are basically the results that can be made possible through effective click-through and strategic budget optimization. Let's explore how to achieve both.</p>
      
      <h2>The Quality Score Factor</h2>
      <p>Google's Quality Score is crucial for lowering your CPC. A higher Quality Score means:</p>
      <ul>
        <li>Lower cost per click</li>
        <li>Better ad positions</li>
        <li>More impressions for the same budget</li>
      </ul>
      
      <h2>Strategies to Lower CPC</h2>
      <ol>
        <li><strong>Improve Ad Relevance:</strong> Ensure your ads closely match user search intent</li>
        <li><strong>Optimize Landing Pages:</strong> Create landing pages that deliver on ad promises</li>
        <li><strong>Use Negative Keywords:</strong> Prevent wasted spend on irrelevant searches</li>
        <li><strong>Refine Targeting:</strong> Focus on audiences most likely to convert</li>
        <li><strong>Test Ad Copy:</strong> Continuously A/B test to improve click-through rates</li>
      </ol>
      
      <h2>Maximizing ROI</h2>
      <p>Higher ROI comes from not just lowering costs, but also increasing conversion value:</p>
      <ul>
        <li>Focus on high-value keywords</li>
        <li>Optimize conversion paths</li>
        <li>Implement remarketing strategies</li>
        <li>Use audience segmentation</li>
        <li>Track and optimize for lifetime value</li>
      </ul>
      
      <h2>The Power of Testing</h2>
      <p>Continuous testing is essential. Test different ad variations, landing pages, bidding strategies, and targeting options to find what works best for your business.</p>
      
      <h2>Conclusion</h2>
      <p>Achieving lower CPC and higher ROI requires a strategic, data-driven approach. By focusing on quality, relevance, and continuous optimization, you can significantly improve your PPC campaign performance.</p>
    `,
  },
  {
    id: 4,
    title:
      "From Draft to Perfection: The Ultimate Guide to Contentora Media's Proofreading Expertise",
    excerpt:
      'Every brand story is initially a draft - an idea conceptualized in words. However, what really differentiates good content from great content is its refinement...',
    category: 'Content Writing',
    readTime: '7 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    content: `
      <h2>The Importance of Proofreading</h2>
      <p>Every brand story is initially a draft - an idea conceptualized in words. However, what really differentiates good content from great content is its refinement through professional proofreading.</p>
      
      <h2>What We Look For</h2>
      <p>Our proofreading process is comprehensive and meticulous:</p>
      <ul>
        <li><strong>Grammar and Syntax:</strong> Ensuring proper sentence structure and grammar</li>
        <li><strong>Spelling and Punctuation:</strong> Catching every typo and punctuation error</li>
        <li><strong>Consistency:</strong> Maintaining consistent style and tone throughout</li>
        <li><strong>Clarity:</strong> Ensuring your message is clear and easy to understand</li>
        <li><strong>Flow:</strong> Making sure content reads smoothly and naturally</li>
      </ul>
      
      <h2>Our Proofreading Process</h2>
      <ol>
        <li><strong>Initial Review:</strong> We read through your content to understand context</li>
        <li><strong>Detailed Edit:</strong> We carefully review every word, sentence, and paragraph</li>
        <li><strong>Style Check:</strong> We ensure consistency with your brand voice</li>
        <li><strong>Final Polish:</strong> We give it one last review for perfection</li>
        <li><strong>Quality Assurance:</strong> A second pair of eyes reviews the work</li>
      </ol>
      
      <h2>Why Professional Proofreading Matters</h2>
      <p>Professional proofreading can make the difference between content that converts and content that confuses. It shows attention to detail and professionalism that builds trust with your audience.</p>
      
      <h2>Common Mistakes We Catch</h2>
      <ul>
        <li>Inconsistent terminology</li>
        <li>Unclear messaging</li>
        <li>Formatting issues</li>
        <li>Factual inconsistencies</li>
        <li>Tone mismatches</li>
      </ul>
      
      <h2>The Contentora Media Difference</h2>
      <p>Our team of experienced proofreaders brings expertise across industries and content types. We don't just fix errors - we enhance your content to make it shine.</p>
    `,
  },
  {
    id: 5,
    title: 'Why Your Business Needs a Social Media Strategy Today',
    excerpt:
      "Establishing an online presence across various social media platforms is essential for effective outreach and brand visibility. A robust social media presence ensures that you're connected with your audience...",
    category: 'Social Media Marketing',
    readTime: '9 min read',
    date: 'Dec 12, 2025',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    content: `
      <h2>The Social Media Imperative</h2>
      <p>Establishing an online presence across various social media platforms is essential for effective outreach and brand visibility. A robust social media presence ensures that you're connected with your audience where they spend most of their time.</p>
      
      <h2>Why Social Media Matters</h2>
      <ul>
        <li><strong>Massive Reach:</strong> Billions of users across platforms</li>
        <li><strong>Direct Engagement:</strong> Connect directly with your audience</li>
        <li><strong>Brand Building:</strong> Establish and reinforce your brand identity</li>
        <li><strong>Customer Insights:</strong> Learn what your audience wants</li>
        <li><strong>Cost-Effective Marketing:</strong> Reach thousands for less than traditional advertising</li>
      </ul>
      
      <h2>Components of a Strong Social Media Strategy</h2>
      <ol>
        <li><strong>Clear Goals:</strong> Define what you want to achieve</li>
        <li><strong>Target Audience:</strong> Understand who you're trying to reach</li>
        <li><strong>Platform Selection:</strong> Choose the right platforms for your business</li>
        <li><strong>Content Calendar:</strong> Plan and schedule consistent content</li>
        <li><strong>Engagement Plan:</strong> How you'll interact with your audience</li>
        <li><strong>Metrics and Analytics:</strong> Track what's working and what's not</li>
      </ol>
      
      <h2>Common Social Media Mistakes to Avoid</h2>
      <ul>
        <li>Inconsistent posting</li>
        <li>Ignoring comments and messages</li>
        <li>Being too promotional</li>
        <li>Not tracking results</li>
        <li>Copying competitors instead of being authentic</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Start by auditing your current social media presence, setting clear goals, and developing a content strategy that aligns with your business objectives.</p>
      
      <h2>Conclusion</h2>
      <p>A well-executed social media strategy is no longer optional - it's essential for business success in the digital age. Start building yours today.</p>
    `,
  },
  {
    id: 6,
    title: 'Top Social Media Marketing Trends Every Brand Should Follow',
    excerpt:
      'The discourse regarding online brand presence is louder than ever. Large companies, start-ups, B2B or B2C brands are looking towards social media marketing to amplify their lead targeting and conversions...',
    category: 'Social Media Marketing',
    readTime: '10 min read',
    date: 'Dec 12, 2025',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
    content: `
      <h2>The Evolution of Social Media Marketing</h2>
      <p>The discourse regarding online brand presence is louder than ever. Large companies, start-ups, B2B or B2C brands are looking towards social media marketing to amplify their lead targeting and conversions. Here are the trends you need to know.</p>
      
      <h2>1. Short-Form Video Content</h2>
      <p>Platforms like TikTok, Instagram Reels, and YouTube Shorts have made short-form video the dominant content type. Brands that master this format see significantly higher engagement.</p>
      
      <h2>2. Social Commerce</h2>
      <p>Shopping directly through social media platforms is growing rapidly. Features like Instagram Shopping and Facebook Marketplace are changing how consumers discover and purchase products.</p>
      
      <h2>3. Authentic Influencer Partnerships</h2>
      <p>Micro and nano-influencers with engaged, niche audiences are becoming more valuable than mega-influencers. Authenticity trumps reach.</p>
      
      <h2>4. AI-Powered Personalization</h2>
      <p>AI tools are helping brands deliver more personalized content and experiences to their audiences at scale.</p>
      
      <h2>5. Community Building</h2>
      <p>Brands are focusing on building engaged communities rather than just accumulating followers. Private groups and exclusive content are key strategies.</p>
      
      <h2>6. User-Generated Content</h2>
      <p>Encouraging and showcasing content created by customers builds trust and provides authentic social proof.</p>
      
      <h2>7. Social Listening</h2>
      <p>Monitoring conversations about your brand and industry helps you stay relevant and responsive to customer needs.</p>
      
      <h2>8. Sustainability and Social Responsibility</h2>
      <p>Consumers expect brands to take stands on important issues and demonstrate genuine commitment to social and environmental causes.</p>
      
      <h2>Implementing These Trends</h2>
      <p>Don't try to jump on every trend. Choose the ones that align with your brand values and audience preferences, then execute them well.</p>
    `,
  },
  {
    id: 7,
    title: 'How Contentdora Media Creates SEO-Friendly Content That Converts',
    excerpt:
      'In the online marketplace, the success of ad campaigns is measured by the number of visiting clients who are convinced to convert. At Contentora Media, we create content that is highly user-friendly as well as SEO-friendly...',
    category: 'SEO & Content Writing',
    readTime: '11 min read',
    date: 'Dec 12, 2025',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop',
    content: `
      <h2>The Dual Challenge</h2>
      <p>In the online marketplace, the success of ad campaigns is measured by the number of visiting clients who are convinced to convert. At Contentora Media, we create content that is highly user-friendly as well as SEO-friendly - achieving both goals simultaneously.</p>
      
      <h2>Our SEO Content Strategy</h2>
      <p>We don't just stuff keywords into content. We create comprehensive strategies that include:</p>
      <ul>
        <li><strong>Keyword Research:</strong> Finding the right keywords with high intent and reasonable competition</li>
        <li><strong>Search Intent Analysis:</strong> Understanding what users really want when they search</li>
        <li><strong>Content Structure:</strong> Organizing content for both users and search engines</li>
        <li><strong>Technical Optimization:</strong> Ensuring proper meta tags, headers, and schema markup</li>
        <li><strong>Link Building:</strong> Creating content worthy of natural backlinks</li>
      </ul>
      
      <h2>Writing for Humans First</h2>
      <p>The best SEO content is written for humans first, search engines second. We focus on:</p>
      <ul>
        <li>Clear, engaging writing</li>
        <li>Valuable, actionable information</li>
        <li>Proper formatting for readability</li>
        <li>Compelling calls-to-action</li>
        <li>Trust-building elements</li>
      </ul>
      
      <h2>Conversion Optimization</h2>
      <p>Getting traffic is only half the battle. We optimize content for conversions through:</p>
      <ol>
        <li>Strategic CTA placement</li>
        <li>Addressing objections and concerns</li>
        <li>Building credibility and trust</li>
        <li>Creating urgency when appropriate</li>
        <li>Simplifying the conversion path</li>
      </ol>
      
      <h2>Measuring Success</h2>
      <p>We track both SEO metrics (rankings, traffic, backlinks) and conversion metrics (leads, sales, engagement) to ensure content delivers real business results.</p>
      
      <h2>The Contentora Media Advantage</h2>
      <p>Our team combines SEO expertise with exceptional writing skills to create content that ranks well AND converts visitors into customers.</p>
    `,
  },
  {
    id: 8,
    title: 'Proofreading Done Right: How Contentora Media Helps You Avoid Common Writing Pitfalls',
    excerpt:
      'Written content is still the foundation of every type of marketing. Typos, formatting and grammatical errors can lead to a bad first impression or worse, confuse your intended message and make your brand appear unprofessional...',
    category: 'Content Writing',
    readTime: '10 min read',
    date: 'Dec 12, 2025',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    content: `
      <h2>The Cost of Poor Proofreading</h2>
      <p>Written content is still the foundation of every type of marketing. Typos, formatting and grammatical errors can lead to a bad first impression or worse, confuse your intended message and make your brand appear unprofessional.</p>
      
      <h2>Common Writing Pitfalls We Prevent</h2>
      <h3>1. Grammar and Syntax Errors</h3>
      <ul>
        <li>Subject-verb agreement issues</li>
        <li>Incorrect tense usage</li>
        <li>Misplaced modifiers</li>
        <li>Run-on sentences</li>
      </ul>
      
      <h3>2. Spelling and Typos</h3>
      <ul>
        <li>Commonly confused words (their/there/they're)</li>
        <li>Industry-specific terminology</li>
        <li>Proper nouns and brand names</li>
        <li>Autocorrect mistakes</li>
      </ul>
      
      <h3>3. Consistency Issues</h3>
      <ul>
        <li>Inconsistent terminology</li>
        <li>Varying style choices</li>
        <li>Formatting inconsistencies</li>
        <li>Tone shifts</li>
      </ul>
      
      <h3>4. Clarity Problems</h3>
      <ul>
        <li>Ambiguous statements</li>
        <li>Overly complex sentences</li>
        <li>Jargon overuse</li>
        <li>Unclear references</li>
      </ul>
      
      <h2>Our Proofreading Methodology</h2>
      <ol>
        <li><strong>Multiple Passes:</strong> We review content several times, focusing on different aspects each time</li>
        <li><strong>Style Guide Adherence:</strong> We ensure consistency with your brand guidelines</li>
        <li><strong>Fact Checking:</strong> We verify claims and statistics</li>
        <li><strong>Readability Analysis:</strong> We ensure content is appropriate for your target audience</li>
        <li><strong>Final Review:</strong> A fresh pair of eyes does one last check</li>
      </ol>
      
      <h2>Tools and Expertise</h2>
      <p>We combine professional proofreading tools with human expertise to catch errors that automated systems miss.</p>
      
      <h2>The Impact of Professional Proofreading</h2>
      <p>Professional proofreading doesn't just fix errors - it enhances your content's effectiveness, builds credibility, and ensures your message comes across clearly.</p>
    `,
  },
  {
    id: 9,
    title: 'Why Paid Guest Posting is the Key to Building Credibility and Driving Traffic',
    excerpt:
      'Paid guest posting is a content marketing strategy where a fee is paid to publish an article on another website. Guest posting directly on credible, high-quality, niche-specific domains is a guaranteed tool for building credibility...',
    category: 'Content Marketing',
    readTime: '12 min read',
    date: 'Dec 12, 2025',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    content: `
      <h2>Understanding Paid Guest Posting</h2>
      <p>Paid guest posting is a content marketing strategy where a fee is paid to publish an article on another website. Guest posting directly on credible, high-quality, niche-specific domains is a guaranteed tool for building credibility and driving targeted traffic.</p>
      
      <h2>Benefits of Paid Guest Posting</h2>
      <ul>
        <li><strong>Quality Backlinks:</strong> Earn valuable links from authoritative sites</li>
        <li><strong>Brand Exposure:</strong> Reach new, relevant audiences</li>
        <li><strong>Credibility Building:</strong> Association with respected publications</li>
        <li><strong>Referral Traffic:</strong> Drive qualified visitors to your site</li>
        <li><strong>SEO Benefits:</strong> Improve domain authority and rankings</li>
        <li><strong>Thought Leadership:</strong> Establish expertise in your field</li>
      </ul>
      
      <h2>How to Choose the Right Sites</h2>
      <p>Not all guest posting opportunities are created equal. Look for:</p>
      <ol>
        <li><strong>Relevance:</strong> Sites in your industry or niche</li>
        <li><strong>Authority:</strong> High domain authority and quality content</li>
        <li><strong>Audience:</strong> Engaged readers who match your target market</li>
        <li><strong>Editorial Standards:</strong> Sites that maintain quality standards</li>
        <li><strong>Traffic:</strong> Sites with real, organic traffic</li>
      </ol>
      
      <h2>Creating Effective Guest Posts</h2>
      <p>To maximize the value of your guest posts:</p>
      <ul>
        <li>Provide genuine value to readers</li>
        <li>Follow the site's guidelines and style</li>
        <li>Include natural, relevant links</li>
        <li>Use compelling headlines</li>
        <li>Add a strong author bio</li>
      </ul>
      
      <h2>Measuring ROI</h2>
      <p>Track metrics like:</p>
      <ul>
        <li>Referral traffic from guest posts</li>
        <li>Backlink quality and quantity</li>
        <li>Domain authority improvements</li>
        <li>Brand mention increases</li>
        <li>Lead generation from guest posts</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Choosing low-quality sites for cheap prices</li>
        <li>Over-optimizing anchor text</li>
        <li>Writing overly promotional content</li>
        <li>Ignoring the site's audience</li>
        <li>Not following up on opportunities</li>
      </ul>
      
      <h2>The Contentora Media Approach</h2>
      <p>We help clients identify the best guest posting opportunities, create high-quality content, and manage the entire process for maximum ROI.</p>
    `,
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingSanity, setUsingSanity] = useState(false);

  // Fetch blog post from Sanity or use fallback
  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        
        // Try to fetch from Sanity
        const sanityPost = await getBlogPostBySlug(slug);
        
        if (sanityPost) {
          // Transform Sanity post to match component structure
          const transformedPost = {
            id: sanityPost._id,
            title: sanityPost.title,
            excerpt: sanityPost.excerpt,
            category: sanityPost.category,
            readTime: sanityPost.readTime,
            date: new Date(sanityPost.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }),
            image: sanityPost.mainImage,
            body: sanityPost.body, // Portable Text content
            slug: sanityPost.slug.current,
            authorName: sanityPost.authorName,
            authorImage: sanityPost.authorImage,
            authorTitle: sanityPost.authorTitle,
          };
          
          setPost(transformedPost);
          setUsingSanity(true);
          
          // Fetch related posts
          const related = await getRelatedPosts(sanityPost.category, sanityPost._id);
          setRelatedPosts(related.map(p => ({
            id: p._id,
            title: p.title,
            excerpt: p.excerpt,
            category: p.category,
            readTime: p.readTime,
            date: new Date(p.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }),
            image: p.mainImage,
            slug: p.slug.current,
          })));
        } else {
          // Fallback to hardcoded posts
          useFallbackPost();
        }
        
        setLoading(false);
      } catch (err) {
        console.warn('Sanity not configured, using fallback posts:', err.message);
        useFallbackPost();
        setLoading(false);
      }
    }

    function useFallbackPost() {
      // Find post from fallback data
      const fallbackPost = fallbackBlogPosts.find((p) => {
        const postSlug = p.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
        return postSlug === slug;
      });
      
      setPost(fallbackPost);
      setUsingSanity(false);
      
      // Get related posts from fallback
      if (fallbackPost) {
        const related = fallbackBlogPosts
          .filter((p) => p.id !== fallbackPost.id && p.category === fallbackPost.category)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }

    fetchPost();
  }, [slug]);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading... | Contentora Media Blog</title>
        </Helmet>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
            <p className="text-xl text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </>
    );
  }

  // If post not found, show 404
  if (!post) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | Contentora Media</title>
        </Helmet>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaArrowLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Contentora Media Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] bg-gradient-to-br from-lightBlue to-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${post.image})` }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center">
            <div className="max-w-4xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6"
              >
                <FaArrowLeft /> Back to Blog
              </Link>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-secondary" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock className="text-secondary" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <FaTag className="text-secondary" />
                  {post.category}
                </span>
              </div>
              
              {/* Author Information */}
              {(post.authorName || post.authorImage) && (
                <div className="flex items-center gap-3 mt-4">
                  {post.authorImage && (
                    <img
                      src={post.authorImage}
                      alt={post.authorName || 'Author'}
                      className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                    />
                  )}
                  <div>
                    <p className="text-sm text-gray-600">Written by</p>
                    <p className="font-semibold text-secondary">
                      {post.authorName || 'Anonymous'}
                    </p>
                    {post.authorTitle && (
                      <p className="text-xs text-gray-500">{post.authorTitle}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 px-4 sm:px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {usingSanity && post.body ? (
                <PortableTextRenderer content={post.body} />
              ) : (
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">Share this article</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FaArrowLeft /> Back to All Posts
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <section className="py-12 px-4 sm:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-8">
              Related <span className="text-secondary">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((relatedPost) => {
                  const relatedSlug = relatedPost.slug || relatedPost.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedSlug}`}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <span className="text-sm text-secondary font-medium">
                          Read More →
                        </span>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <p className="col-span-3 text-center text-gray-600">No related articles found.</p>
              )}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1a365d;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2d3748;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.75;
          color: #4a5568;
        }
        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
          color: #4a5568;
        }
        .blog-content strong {
          color: #2d3748;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
