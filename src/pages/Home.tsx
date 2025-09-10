import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Building2, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const HomePage = () => {
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
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-heading">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a passionate interior design studio dedicated to creating unique, harmonious spaces that reflect your lifestyle and personality. With over a decade of experience, our team blends creativity with functionality to deliver exceptional interiors — from cozy homes to inspiring workplaces.
              </p>
              <Button variant="elegant" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury mb-2">200+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury mb-2">15</div>
                <div className="text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From residential retreats to commercial masterpieces, we bring your vision to life with expert design and meticulous attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-luxury/10 rounded-lg flex items-center justify-center mx-auto mb-6">
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
          <div className="text-center mt-12">
            <Button variant="elegant" size="lg" asChild>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Our Work Speaks for Itself
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how we've transformed interiors with our creative vision and attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-soft group-hover:shadow-elegant transition-elegant">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-elegant"
                  />
                  <div className="absolute inset-0 bg-elegant-dark/0 group-hover:bg-elegant-dark/20 transition-elegant"></div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-foreground text-heading">{item.title}</h3>
                  <p className="text-muted-foreground">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              What Our Clients Say
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl text-muted-foreground italic mb-8 text-heading">
                "Working with Elegant Interiors was a dream! They understood my vision and delivered beyond expectations. Every room feels fresh, functional, and perfectly 'us'."
              </p>
              <footer className="text-lg text-foreground">
                — Emily R., Homeowner
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-elegant-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-elegant-dark-foreground mb-6 text-heading">
            Let's Design Your Dream Space
          </h2>
          <p className="text-xl text-elegant-dark-foreground/90 mb-8 max-w-3xl mx-auto">
            Book a free consultation and start your interior transformation today.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;