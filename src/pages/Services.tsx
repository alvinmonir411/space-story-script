import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Building2, Wrench, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Interior Design",
      description: "We specialize in creating elegant, livable homes that reflect your unique style and enhance your everyday life. Whether it's a single room or a full home makeover, we're here to help.",
      features: [
        "Space planning",
        "Furniture & decor selection",
        "Lighting design",
        "Color consultation",
        "Custom cabinetry & finishes"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Interior Design",
      description: "First impressions matter. We design functional, on-brand spaces that impress clients and energize teams.",
      features: [
        "Offices",
        "Retail spaces",
        "Cafés & restaurants",
        "Salons and studios",
        "Brand-aligned design"
      ]
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Give your space a fresh start. We manage renovations from concept to completion, ensuring a smooth process and stunning results.",
      features: [
        "Full project management",
        "Structural modifications",
        "Systems upgrades",
        "Timeline coordination",
        "Quality assurance"
      ]
    },
    {
      icon: Monitor,
      title: "Virtual Design Services",
      description: "Not local? No problem. We offer online design packages that include custom mood boards, layout plans, and shopping lists delivered straight to your inbox.",
      features: [
        "Custom mood boards",
        "Floor plan layouts",
        "Shopping lists",
        "Video consultations",
        "Implementation guides"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-heading">
              Our Interior Design Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From residential retreats to commercial masterpieces, we offer comprehensive design solutions tailored to your unique vision and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-luxury/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-luxury" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 text-heading">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 text-heading">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-luxury flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process that ensures your project runs smoothly from initial concept to final installation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We start with understanding your vision, lifestyle, and project goals." },
              { step: "02", title: "Design", description: "Our team creates detailed plans, mood boards, and 3D visualizations." },
              { step: "03", title: "Development", description: "We source materials, coordinate contractors, and manage the timeline." },
              { step: "04", title: "Delivery", description: "Final installation and styling to bring your dream space to life." }
            ].map((phase, index) => (
              <Card key={index} className="shadow-soft text-center border-0">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-luxury mb-4 text-heading">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-heading">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-elegant-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-elegant-dark-foreground mb-6 text-heading">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-elegant-dark-foreground/90 mb-8 max-w-3xl mx-auto">
            Book a free discovery call and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book a Free Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="warm" size="xl" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;