import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Building2, Wrench, Award, Users, Lightbulb, CheckCircle, Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-interior.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .stagger-children');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView && !el.classList.contains('animate')) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "From single rooms to entire homes, we create living spaces you'll love coming home to."
    },
    {
      icon: Building2,
      title: "Commercial Interiors",
      description: "Make your business space speak your brand — stylish, professional, and welcoming."
    },
    {
      icon: Wrench,
      title: "Renovations & Styling",
      description: "Breathe new life into old spaces with expert renovations and curated decor."
    }
  ];

  const portfolioItems = [
    { image: portfolio1, title: "Modern Boho Apartment", location: "Brooklyn, NY" },
    { image: portfolio2, title: "Luxury Bedroom Suite", location: "Manhattan, NY" },
    { image: portfolio3, title: "Contemporary Office", location: "San Francisco, CA" }
  ];

  const process = [
    { icon: Lightbulb, title: "Discovery", description: "We listen to your vision, understand your lifestyle, and assess your space to create the perfect design strategy." },
    { icon: Building2, title: "Design", description: "Our team crafts detailed plans, mood boards, and 3D visualizations to bring your dream space to life." },
    { icon: CheckCircle, title: "Execute", description: "We manage every detail of the implementation, ensuring flawless execution and your complete satisfaction." }
  ];

  const awards = [
    { title: "Best Interior Design Studio", year: "2024", organization: "Design Excellence Awards" },
    { title: "Residential Design of the Year", year: "2023", organization: "Home & Living Magazine" },
    { title: "Innovation in Sustainable Design", year: "2023", organization: "Green Design Council" }
  ];

  const testimonials = [
    {
      quote: "Working with Elegant Interiors was a dream! They understood my vision and delivered beyond expectations.",
      author: "Emily R.",
      role: "Homeowner",
      rating: 5
    },
    {
      quote: "They took the stress out of designing our new office. The space is not only beautiful but also boosts our team's productivity.",
      author: "Alex W.",
      role: "Startup Founder", 
      rating: 5
    },
    {
      quote: "Professional, creative, and incredibly attentive to detail. Our home renovation exceeded all our expectations.",
      author: "Sarah M.",
      role: "Family Home",
      rating: 5
    }
  ];

  const team = [
    { name: "Sarah Chen", role: "Creative Director", experience: "12+ years" },
    { name: "Michael Torres", role: "Senior Designer", experience: "8+ years" },
    { name: "Emma Johnson", role: "Project Manager", experience: "6+ years" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-elegant-dark/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-elegant-dark-foreground mb-6 text-heading">
            Transforming Spaces,{" "}
            <span className="text-luxury">Elevating Lifestyles</span>
          </h1>
          <p className="text-xl md:text-2xl text-elegant-dark-foreground/90 mb-8 max-w-3xl mx-auto">
            Beautiful, functional, and timeless interior design tailored to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/portfolio">Explore Our Work</Link>
            </Button>
            <Button variant="warm" size="xl" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="section-padding bg-warm-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-heading">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a passionate interior design studio dedicated to creating unique, harmonious spaces that reflect your lifestyle and personality. With over a decade of experience, our team blends creativity with functionality to deliver exceptional interiors — from cozy homes to inspiring workplaces.
              </p>
              <Button variant="elegant" className="hover-lift" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-in-right">
              <div className="text-center hover-lift p-6 bg-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-luxury mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center hover-lift p-6 bg-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-luxury mb-2">200+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center hover-lift p-6 bg-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-luxury mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center hover-lift p-6 bg-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-luxury mb-2">15</div>
                <div className="text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to final reveal, we guide you through every step of your design journey with expertise and care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury/20 transition-elegant hover-lift">
                  <step.icon className="h-10 w-10 text-luxury" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-heading">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                <div className="w-8 h-0.5 bg-luxury mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-elegant"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From residential retreats to commercial masterpieces, we bring your vision to life with expert design and meticulous attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant border-0 bg-card hover-lift group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-luxury/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury/20 group-hover:scale-110 transition-bounce">
                    <service.icon className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-heading">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 fade-in-up">
            <Button variant="elegant" size="lg" className="hover-lift" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Our Work Speaks for Itself
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how we've transformed interiors with our creative vision and attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-soft group-hover:shadow-elegant transition-elegant hover-lift">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-elegant"
                  />
                  <div className="absolute inset-0 bg-elegant-dark/0 group-hover:bg-elegant-dark/30 transition-elegant flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-elegant">
                      <Button variant="hero" size="sm">View Project</Button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-foreground text-heading group-hover:text-luxury transition-elegant">{item.title}</h3>
                  <p className="text-muted-foreground">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-in-up">
            <Button variant="hero" size="lg" className="hover-lift" asChild>
              <Link to="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and publications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {awards.map((award, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-luxury transition-elegant border-0 bg-card hover-lift group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury/20 group-hover:scale-110 transition-bounce">
                    <Award className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-heading">
                    {award.title}
                  </h3>
                  <p className="text-luxury font-medium">{award.year}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {award.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="section-padding bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant border-0 bg-card hover-lift group">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-luxury fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-luxury mb-4 group-hover:scale-110 transition-bounce" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our passionate designers bring decades of combined experience to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-luxury/10 rounded-full mx-auto flex items-center justify-center group-hover:bg-luxury/20 transition-elegant hover-lift">
                    <Users className="h-16 w-16 text-luxury" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-heading">
                  {member.name}
                </h3>
                <p className="text-luxury font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-in-up">
            <Button variant="elegant" size="lg" className="hover-lift" asChild>
              <Link to="/about">
                Meet the Full Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-elegant-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-elegant-dark-foreground mb-6 text-heading">
              Let's Design Your Dream Space
            </h2>
            <p className="text-xl text-elegant-dark-foreground/90 mb-8 max-w-3xl mx-auto">
              Book a free consultation and start your interior transformation today. 
              <span className="block mt-2 text-luxury">No obligation. No pressure. Just pure inspiration.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="hover-lift shadow-luxury" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="warm" size="xl" className="hover-lift" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-luxury/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-luxury/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default HomePage;