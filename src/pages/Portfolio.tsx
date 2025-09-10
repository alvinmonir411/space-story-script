import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Home, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Boho Apartment",
      location: "Brooklyn, NY",
      scope: "Full Home Design",
      description: "A light-filled apartment with earthy tones, layered textures, and handcrafted details.",
      image: portfolio1,
      type: "residential",
      year: "2024"
    },
    {
      id: 2,
      title: "Luxury Bedroom Suite",
      location: "Manhattan, NY",
      scope: "Master Suite Renovation",
      description: "Sophisticated bedroom with luxurious textiles, ambient lighting, and contemporary furniture.",
      image: portfolio2,
      type: "residential",
      year: "2023"
    },
    {
      id: 3,
      title: "Contemporary Office",
      location: "San Francisco, CA",
      scope: "Commercial Interior",
      description: "Modern office interior with clean lines, professional furniture, and natural light.",
      image: portfolio3,
      type: "commercial",
      year: "2024"
    },
    {
      id: 4,
      title: "Coastal Living Room",
      location: "Malibu, CA",
      scope: "Living Space Redesign",
      description: "Relaxed coastal elegance with ocean views, natural materials, and serene color palette.",
      image: portfolio1,
      type: "residential",
      year: "2023"
    },
    {
      id: 5,
      title: "Urban Loft Renovation",
      location: "Chicago, IL",
      scope: "Full Renovation",
      description: "Industrial loft transformation with exposed brick, modern fixtures, and open concept living.",
      image: portfolio2,
      type: "residential",
      year: "2024"
    },
    {
      id: 6,
      title: "Boutique Hotel Lobby",
      location: "Austin, TX",
      scope: "Commercial Design",
      description: "Welcoming hotel lobby with local artisan elements and contemporary hospitality design.",
      image: portfolio3,
      type: "commercial",
      year: "2023"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-heading">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore some of our favorite projects — from chic city apartments to elegant country homes and contemporary commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="shadow-elegant border-0 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-elegant"
                  />
                  <div className="absolute inset-0 bg-elegant-dark/0 group-hover:bg-elegant-dark/20 transition-elegant"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-luxury text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </div>
                    <div className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      {project.type === 'residential' ? <Home className="h-3 w-3" /> : <Building2 className="h-3 w-3" />}
                      {project.type}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 text-heading">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="text-luxury font-medium">
                        {project.scope}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <Button variant="elegant" className="w-full" asChild>
                    <Link to="/contact">View Project Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Over the years, we've had the privilege of transforming hundreds of spaces and building lasting relationships with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15", label: "Industry Awards" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <Card key={index} className="shadow-soft text-center border-0">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-luxury mb-3 text-heading">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-warm-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-heading">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss your project and explore how we can bring your vision to life with our expertise and passion for exceptional design.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;