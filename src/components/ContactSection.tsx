import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendEmail = async () => {
    const name = nameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const subject = subjectRef.current?.value || '';
    const message = messageRef.current?.value || '';

    // Vérifier que les champs requis sont remplis
    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs requis (nom, email et message).');
      return;
    }

    setIsLoading(true);

    try {
      // Configuration EmailJS - Remplacez par vos vraies clés
      const serviceId = 'service_p87vprj'; // Votre Service ID depuis EmailJS
      const templateId = 'template_qj2r6gm'; // Votre Template ID depuis EmailJS
      const publicKey = 'JfjtXJi9oYFrQrvEI'; // Votre Public Key depuis EmailJS

      // Paramètres du template
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject || 'Contact depuis le portfolio',
        message: message
      };

      // Envoyer l'email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSent(true);
      alert('✅ Email envoyé avec succès ! Je vous répondrai bientôt.');
      
      // Réinitialiser le formulaire
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (subjectRef.current) subjectRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      console.error('Détails de l\'erreur:', {
        status: error.status,
        text: error.text,
        serviceId: 'service_ja4rr2x',
        templateId: 'template_qj2r6gm',
        publicKey: 'JfjtXJi9oYFrQrvEI'
      });
      alert(`❌ Erreur lors de l'envoi de l'email: ${error.text || error.message}. Vérifiez la console pour plus de détails.`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-border/50 text-sm px-4 py-2">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm actively seeking internship opportunities where I can contribute my game development skills 
            and learn from experienced teams. Let's discuss how we can build amazing games together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border/30 card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Interested in my work? Drop me a message and let's start a conversation about game development!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input ref={nameRef} placeholder="Your Name" className="bg-input/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input ref={emailRef} type="email" placeholder="your.email@company.com" className="bg-input/50 border-border/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input ref={subjectRef} placeholder="Internship Opportunity / Project Collaboration" className="bg-input/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  ref={messageRef}
                  placeholder="Tell me about the opportunity or project you have in mind..."
                  rows={5}
                  className="bg-input/50 border-border/50"
                />
              </div>
              <Button 
                onClick={handleSendEmail}
                disabled={isLoading}
                className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 neon-glow disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </>
                ) : isSent ? (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-gradient border-border/30 card-shadow p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">mathieubonnieu07@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+33 7 82 87 44 73</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Available for Remote/Hybrid, Marseille and sourroundings</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card-gradient border-border/30 card-shadow p-6">
              <h3 className="text-xl font-semibold mb-6">Connect & Download</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button asChild variant="outline" className="flex-1 border-border/50 hover:bg-secondary/50">
                    <a href="https://github.com/mathieubonnieu" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border-border/50 hover:bg-secondary/50">
                    <a href="https://www.linkedin.com/in/mathieu-bonnieu" target="_blank" rel="noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </Card>

            <Card className="card-gradient border-border/30 card-shadow p-6">
              <h3 className="text-xl font-semibold mb-4">What I'm Looking For</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Game development internships</li>
                <li>• Junior developer positions</li>
                <li>• Collaborative project opportunities</li>
                <li>• Mentorship and learning experiences</li>
                <li>• Remote or hybrid work arrangements</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;