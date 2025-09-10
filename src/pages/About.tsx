import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Lightbulb, Users, Award, Leaf, Eye } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Creativity & Innovation",
      description: "We push boundaries and explore new design possibilities to create truly unique spaces."
    },
    {
      icon: Users,
      title: "Client-Centered Design",
      description: "Every project starts with understanding your lifestyle, needs, and personal style."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "We prioritize eco-friendly materials and sustainable design solutions."
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "From concept to completion, we ensure every element is perfectly executed."
    },
    {
      icon: Award,
      title: "Timeless Elegance",
      description: "We create designs that stand the test of time while reflecting current sensibilities."
    },
    {
      icon: Lightbulb,
      title: "Functional Beauty",
      description: "Our designs are as practical as they are beautiful, enhancing daily life."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-heading">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Elegant Interiors was founded with one simple mission: to turn ordinary spaces into extraordinary experiences. Our team of designers, project managers, and decorators collaborate closely with clients to ensure every detail reflects their vision, lifestyle, and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-heading">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe good design is about balance — between beauty and functionality, trends and timelessness, vision and reality. Every space tells a story, and we're here to help you tell yours in the most beautiful way possible.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience in residential and commercial design, we've learned that the best interiors aren't just about following trends — they're about creating spaces that enhance your life and reflect who you are.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury mb-2">2013</div>
                  <div className="text-muted-foreground">Founded</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury mb-2">250+</div>
                  <div className="text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury mb-2">15</div>
                  <div className="text-muted-foreground">Team Members</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury mb-2">12</div>
                  <div className="text-muted-foreground">Awards</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-heading">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every project we undertake and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-luxury/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-luxury" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-heading">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-warm-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-heading">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our diverse team of designers, architects, and project managers brings together decades of experience and a shared passion for creating extraordinary spaces.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-luxury/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-luxury" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-heading">Sarah Chen</h3>
                <p className="text-muted-foreground mb-2">Founder & Lead Designer</p>
                <p className="text-sm text-muted-foreground">15+ years of luxury residential design</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-luxury/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-luxury" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-heading">Marcus Rodriguez</h3>
                <p className="text-muted-foreground mb-2">Commercial Design Director</p>
                <p className="text-sm text-muted-foreground">Specialist in hospitality & retail spaces</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-luxury/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-luxury" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-heading">Emma Thompson</h3>
                <p className="text-muted-foreground mb-2">Senior Interior Designer</p>
                <p className="text-sm text-muted-foreground">Expert in sustainable design solutions</p>
              </CardContent>
            </Card>
          </div>
          <Button variant="elegant" size="lg" asChild>
            <Link to="/contact">Let's Collaborate</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;