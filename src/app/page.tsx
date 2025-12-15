"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import FeatureCardFifteen from '@/components/sections/feature/FeatureCardFifteen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, Zap, Star, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="noiseDiagonalGradient"
      cardStyle="noise"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="webild"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Get Started",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Build stunning websites in minutes, not weeks"
          description="webild is the AI-powered platform that generates complete, production-ready websites from simple descriptions. No coding required. No design experience needed. Just describe your vision."
          tag="AI Website Generator"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806577921-dfhja229.jpg"
          imageAlt="webild dashboard interface showing AI website generation"
          frameStyle="browser"
          metricsLabel="Trusted by startups, agencies, and enterprises worldwide"
          metrics={[
            { id: "1", value: "10,000+", label: "Websites Generated" },
            { id: "2", value: "2,500+", label: "Active Users" },
            { id: "3", value: "99.9%", label: "Uptime Guarantee" }
          ]}
          buttons={[
            { text: "Start Building Free", href: "#contact" },
            { text: "Watch Demo", href: "#" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="Why Choose webild?"
          description="We're revolutionizing web development by combining advanced AI with intuitive design. Webild empowers anyone to create professional websites instantly."
          textboxLayout="default"
          contentTag="OUR MISSION"
          contentTagIcon={Zap}
          contentTitle="Democratizing web creation for everyone"
          contentDescription="Whether you're a startup founder, freelancer, or enterprise, webild gives you the power to create beautiful, functional websites without technical barriers. Our AI understands your vision and brings it to life with pixel-perfect results."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806583793-lqlwth00.jpg"
          imageAlt="webild team collaborating on web design"
          imagePosition="right"
          useInvertedBackground="noInvert"
          contentButtons={[
            { text: "Learn Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFifteen
          title="Powerful Features for Modern Web Creation"
          description="Everything you need to build, customize, and launch professional websites at lightning speed"
          textboxLayout="default"
          tag="Features"
          tagIcon={Star}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "AI-Powered Generation",
              description: "Describe your site. Our AI creates complete designs, layouts, and content instantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806578727-ahgpl97z.jpg",
              imageAlt: "AI technology visualization"
            },
            {
              id: "2",
              title: "Responsive Design",
              description: "Every site works perfectly on mobile, tablet, and desktop automatically.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806579513-bcaqhxzy.jpg",
              imageAlt: "Multi-device responsive design"
            },
            {
              id: "3",
              title: "Full Customization",
              description: "Edit colors, fonts, layouts, and content with our intuitive visual editor.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806580318-mmvznilj.jpg",
              imageAlt: "Code editor interface"
            },
            {
              id: "4",
              title: "Cloud Hosting Included",
              description: "Deploy instantly with our reliable, secure cloud infrastructure.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806581214-zhcpgyb6.jpg",
              imageAlt: "Cloud computing technology"
            },
            {
              id: "5",
              title: "SEO Optimized",
              description: "Built-in SEO best practices help your site rank higher in search results.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806582104-pgersnqd.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              id: "6",
              title: "Pre-built Templates",
              description: "Choose from professional templates for any industry or use case.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806582911-53x7kk8v.jpg",
              imageAlt: "Template design components"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your needs. Upgrade or downgrade anytime."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          plans={[
            {
              id: "starter",
              price: "Free",
              name: "Starter",
              buttons: [
                { text: "Get Started", href: "#contact" }
              ],
              features: [
                "1 website",
                "Basic AI generation",
                "Community support",
                "webild branding"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$29/month",
              name: "Professional",
              buttons: [
                { text: "Start Free Trial", href: "#contact" }
              ],
              features: [
                "10 websites",
                "Advanced AI generation",
                "Custom domain",
                "Priority support",
                "Analytics dashboard",
                "Remove webild branding"
              ]
            },
            {
              id: "enterprise",
              price: "Custom",
              name: "Enterprise",
              buttons: [
                { text: "Contact Sales", href: "#contact" }
              ],
              features: [
                "Unlimited websites",
                "Advanced customization",
                "Dedicated support",
                "Team collaboration",
                "API access",
                "Advanced security"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Creators Worldwide"
          description="See what our users have to say about their webild experience"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Startup Founder",
              testimonial: "webild saved us months of development time. We launched our entire digital presence in less than a week. The AI understood our vision perfectly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806584658-8yxr9xgp.png",
              imageAlt: "Sarah Chen, Startup Founder"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Digital Agency Owner",
              testimonial: "Our team uses webild for rapid prototyping and client presentations. The quality is exceptional, and our clients are always impressed.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806585708-k4538jxd.jpg",
              imageAlt: "Marcus Rodriguez, Agency Owner"
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "Freelance Designer",
              testimonial: "As a designer, I was skeptical. But webild's AI-generated designs are clean, modern, and actually save me tons of repetitive work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806586569-p8suk44h.jpg",
              imageAlt: "Emily Watson, Freelance Designer"
            },
            {
              id: "4",
              name: "David Park",
              role: "E-commerce Entrepreneur",
              testimonial: "I built my online store with webild in one day. Zero coding knowledge needed. The results exceeded my expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806587305-hsohjuk4.jpg",
              imageAlt: "David Park, E-commerce Entrepreneur"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              role: "Marketing Manager",
              testimonial: "webild transformed how we create landing pages. We go from concept to live in hours instead of weeks.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806587895-wxyk2hem.jpg",
              imageAlt: "Jessica Martinez, Marketing Manager"
            },
            {
              id: "6",
              name: "Alex Thompson",
              role: "Product Manager",
              testimonial: "The platform is intuitive, powerful, and constantly improving. Our entire team loves it.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806588676-nj8goqom.jpg",
              imageAlt: "Alex Thompson, Product Manager"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies using webild to build their web presence"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806589927-26tkeq1l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806590583-foamamln.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806591419-e3weynwv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806592127-5myhdiju.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806592984-d2em4o5j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806593991-86y6l5qx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806595310-05copuxh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1765806596197-gm7s8jl1.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about webild"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need coding experience to use webild?",
              content: "No. webild is designed for everyone. Simply describe your website idea, and our AI generates the entire site. You can customize it further using our visual editor without any coding knowledge."
            },
            {
              id: "2",
              title: "Can I customize the AI-generated websites?",
              content: "Absolutely. After generation, you have full control over colors, fonts, layouts, content, and more. Our visual editor makes customization intuitive and hassle-free."
            },
            {
              id: "3",
              title: "What about hosting and domain?",
              content: "Hosting is included with all paid plans. You can use your own domain or register one through us. Everything is managed from your webild dashboard."
            },
            {
              id: "4",
              title: "Is my website mobile-responsive?",
              content: "Yes. Every website generated by webild is automatically responsive and optimized for all devices - mobile, tablet, and desktop."
            },
            {
              id: "5",
              title: "Can I export my website?",
              content: "Professional and Enterprise plans include the ability to export your website code. You can host it anywhere you want."
            },
            {
              id: "6",
              title: "What kind of support do you offer?",
              content: "We offer email support for all plans. Professional and Enterprise users get priority support via chat. Enterprise customers also get dedicated account management."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to build your next website?"
          description="Join thousands of creators who have already transformed their web presence with webild. Start free today, no credit card required."
          useInvertedBackground="noInvert"
          inputPlaceholder="your@email.com"
          buttonText="Start Free"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="webild"
          copyrightText="© 2025 webild. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Templates", href: "#" },
                { label: "API", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "Community", href: "#" },
                { label: "Status", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Security", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
