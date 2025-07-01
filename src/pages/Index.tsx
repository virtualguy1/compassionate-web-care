
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, Users, Hospital } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'specialties', 'specialists', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialties = [
    {
      title: "Cardiology",
      description: "Comprehensive heart care with state-of-the-art technology and experienced cardiologists.",
      icon: "❤️"
    },
    {
      title: "Neurology",
      description: "Advanced neurological treatments for brain and nervous system conditions.",
      icon: "🧠"
    },
    {
      title: "Orthopedics",
      description: "Expert care for bone, joint, and muscle conditions with minimally invasive techniques.",
      icon: "🦴"
    },
    {
      title: "Pediatrics",
      description: "Specialized healthcare for children with compassionate and expert medical care.",
      icon: "👶"
    },
    {
      title: "Emergency Medicine",
      description: "24/7 emergency care with rapid response and critical care capabilities.",
      icon: "🚑"
    },
    {
      title: "Oncology",
      description: "Comprehensive cancer care with the latest treatments and supportive care.",
      icon: "🎗️"
    }
  ];

  const specialists = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Chief of Cardiology",
      experience: "15+ years",
      education: "MD from Johns Hopkins",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurosurgeon",
      experience: "12+ years",
      education: "MD from Harvard Medical",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Specialist",
      experience: "10+ years",
      education: "MD from Stanford University",
      image: "https://images.unsplash.com/photo-1594824388853-d95fcdd9ec7e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years",
      education: "MD from Mayo Clinic",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFEEEA' }}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Hospital className="h-8 w-8" style={{ color: '#FE7743' }} />
              <span className="text-xl font-bold" style={{ color: '#273F4F' }}>MediCare Hospital</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'specialties', label: 'Specialties' },
                { id: 'specialists', label: 'Specialists' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'border-b-2'
                      : 'hover:opacity-80'
                  }`}
                  style={{
                    color: activeSection === item.id ? '#FE7743' : '#273F4F',
                    borderColor: activeSection === item.id ? '#FE7743' : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#FE7743', borderColor: '#FE7743' }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16" style={{ backgroundColor: '#EFEEEA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#273F4F' }}>
                Your Health is Our
                <span style={{ color: '#FE7743' }}> Priority</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: '#273F4F' }}>
                Providing exceptional healthcare services with compassionate care, 
                advanced technology, and a team of dedicated medical professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="text-lg px-8 py-3 text-white hover:opacity-90"
                  style={{ backgroundColor: '#FE7743', borderColor: '#FE7743' }}
                >
                  Schedule Appointment
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('specialties')}
                  className="text-lg px-8 py-3 bg-white hover:bg-gray-50"
                  style={{ borderColor: '#273F4F', color: '#273F4F' }}
                >
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=600&fit=crop"
                alt="Modern hospital building"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#FE7743' }}>
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#273F4F' }}>10,000+</p>
                    <p style={{ color: '#273F4F' }}>Patients Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#273F4F' }}>
              Our Medical Specialties
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#273F4F' }}>
              We offer comprehensive healthcare services across multiple specialties 
              with state-of-the-art facilities and expert medical professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{specialty.icon}</div>
                  <CardTitle className="text-xl" style={{ color: '#273F4F' }}>{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed" style={{ color: '#273F4F' }}>
                    {specialty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20" style={{ backgroundColor: '#EFEEEA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#273F4F' }}>
              Meet Our Specialists
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#273F4F' }}>
              Our team of experienced doctors and medical professionals are dedicated 
              to providing you with the highest quality of care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
                <CardHeader>
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg" style={{ color: '#273F4F' }}>{doctor.name}</CardTitle>
                  <CardDescription className="font-medium" style={{ color: '#FE7743' }}>
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm" style={{ color: '#273F4F' }}>
                    <strong>Experience:</strong> {doctor.experience}
                  </p>
                  <p className="text-sm" style={{ color: '#273F4F' }}>
                    <strong>Education:</strong> {doctor.education}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#273F4F' }}>
              Get in Touch
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#273F4F' }}>
              Ready to schedule an appointment or have questions? 
              Contact us today and we'll be happy to help.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#FE7743' }}>
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#273F4F' }}>Phone</h3>
                  <p style={{ color: '#273F4F' }}>Emergency: (555) 123-4567</p>
                  <p style={{ color: '#273F4F' }}>Appointments: (555) 123-4568</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#FE7743' }}>
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#273F4F' }}>Email</h3>
                  <p style={{ color: '#273F4F' }}>info@medicarehospital.com</p>
                  <p style={{ color: '#273F4F' }}>appointments@medicarehospital.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#FE7743' }}>
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#273F4F' }}>Address</h3>
                  <p style={{ color: '#273F4F' }}>123 Healthcare Drive</p>
                  <p style={{ color: '#273F4F' }}>Medical City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#FE7743' }}>
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#273F4F' }}>Hours</h3>
                  <p style={{ color: '#273F4F' }}>Emergency: 24/7</p>
                  <p style={{ color: '#273F4F' }}>Appointments: Mon-Fri 8AM-6PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#273F4F' }}>Send us a Message</CardTitle>
                <CardDescription style={{ color: '#273F4F' }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" style={{ color: '#273F4F' }}>First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" style={{ color: '#273F4F' }}>Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: '#273F4F' }}>Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" style={{ color: '#273F4F' }}>Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" style={{ color: '#273F4F' }}>Service Needed</Label>
                  <select 
                    id="service" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    style={{ color: '#273F4F' }}
                  >
                    <option>General Consultation</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>Emergency</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" style={{ color: '#273F4F' }}>Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your needs or questions..."
                    rows={4}
                  />
                </div>
                <Button 
                  className="w-full text-lg py-3 text-white hover:opacity-90"
                  style={{ backgroundColor: '#FE7743', borderColor: '#FE7743' }}
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#273F4F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Hospital className="h-8 w-8" style={{ color: '#FE7743' }} />
                <span className="text-xl font-bold">MediCare Hospital</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Dedicated to providing exceptional healthcare services with compassion, 
                innovation, and excellence. Your health and well-being are our top priorities.
              </p>
              <div className="flex space-x-4">
                <div className="p-2 rounded" style={{ backgroundColor: '#FE7743' }}>
                  <Phone className="h-4 w-4" />
                </div>
                <div className="p-2 rounded" style={{ backgroundColor: '#FE7743' }}>
                  <Mail className="h-4 w-4" />
                </div>
                <div className="p-2 rounded" style={{ backgroundColor: '#FE7743' }}>
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('home')} className="hover:opacity-80" style={{ color: '#FE7743' }}>Home</button></li>
                <li><button onClick={() => scrollToSection('specialties')} className="hover:opacity-80" style={{ color: '#FE7743' }}>Specialties</button></li>
                <li><button onClick={() => scrollToSection('specialists')} className="hover:opacity-80" style={{ color: '#FE7743' }}>Specialists</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:opacity-80" style={{ color: '#FE7743' }}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Emergency Care</li>
                <li>Surgery</li>
                <li>Diagnostics</li>
                <li>Rehabilitation</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 MediCare Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:opacity-80" style={{ color: '#FE7743' }}>Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:opacity-80" style={{ color: '#FE7743' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
