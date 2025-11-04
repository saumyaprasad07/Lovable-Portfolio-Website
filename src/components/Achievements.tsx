import { Award, FileText, Users, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
const Achievements = () => {
  const publications = [{
    title: "Brain Tumor MRI Image Segmentation using Deep Learning",
    journal: "International Journal of Innovative Research in Technology",
    date: "Apr 26, 2023",
    description: "Developed a segmentation model using CNN (ResNet50 Architecture) to detect and localize brain tumors in MRI images. The model classifies images and highlights tumor masks for comprehensive diagnostic support.",
    tags: ["Deep Learning", "CNN", "ResNet50", "Medical Imaging", "Computer Vision"],
    url: "https://ijirt.org/article?manuscript=159463"
  }];
  const volunteerExperiences = [{
    role: "Student Volunteer",
    organization: "Data Con LA",
    category: "Science and Technology",
    highlights: ["Supported event logistics for one of Southern California's largest data science conferences", "Gained exposure to emerging trends in data analytics and machine learning"],
    url: "https://www.linkedin.com/in/saumyaprasad07/add-edit/VOLUNTEER/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profileVolunteerExperience%3A%28ACoAADH6KWQBuqjeo84sLwSZIW5slODasZUSK_Q%2C1205948260%29&desktopBackground=PROFILE_DETAIL_SCREEN&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_volunteering_experience_details%3BTnrxRbkcQPSeD%2BPgvhDt6g%3D%3D"
  }, {
    role: "Student Volunteer",
    organization: "RE+ Events",
    category: "Science and Technology",
    highlights: ["Managed exhibitor and attendee registrations", "Networked with professionals in energy and sustainability sector"],
    url: "https://www.linkedin.com/in/saumyaprasad07/add-edit/VOLUNTEER/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profileVolunteerExperience%3A%28ACoAADH6KWQBuqjeo84sLwSZIW5slODasZUSK_Q%2C1814216042%29&desktopBackground=PROFILE_DETAIL_SCREEN&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_volunteering_experience_details%3B5s1%2FXGlYSQC3wso%2B3vHUhw%3D%3D"
  }, {
    role: "Student Volunteer",
    organization: "ISACA Los Angeles Chapter",
    category: "Science and Technology",
    highlights: ["Supported cybersecurity and governance conference execution", "Received CPE certification for active volunteer participation"],
    url: "https://www.linkedin.com/in/saumyaprasad07/add-edit/VOLUNTEER/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profileVolunteerExperience%3A%28ACoAADH6KWQBuqjeo84sLwSZIW5slODasZUSK_Q%2C833229866%29&desktopBackground=PROFILE_DETAIL_SCREEN&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_volunteering_experience_details%3B5s1%2FXGlYSQC3wso%2B3vHUhw%3D%3D"
  }];
  const organizations = [{
    role: "Treasurer & Social Media Coordinator",
    organization: "International Student Association",
    duration: "Oct 2024 - May 2025",
    affiliation: "California State University-Long Beach",
    highlights: ["Managed organizational finances and budget allocation", "Oversaw Instagram social media presence and content strategy"]
  }, {
    role: "Cultural Head",
    organization: "Group of IT Students",
    duration: "Aug 2021 - May 2023",
    affiliation: "Datta Meghe College of Engineering",
    highlights: ["Conducted Python workshops (Pandas, NumPy, Matplotlib) for 200+ students", "Organized 20+ events and managed Cultural Fest committee"]
  }];
  return <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Publications, volunteer work, and leadership contributions
          </p>
        </div>

        <div className="space-y-20">
          {/* Publications Section */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Publications</h3>
                
              </div>
            </div>
            
            <div className="space-y-6">
              {publications.map((pub, index) => <Card key={index} className="glass-card hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold mb-3">
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {pub.title}
                        </a>
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{pub.journal}</span>
                        <span>·</span>
                        <span>{pub.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {pub.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {pub.tags.map((tag, i) => <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Volunteer Work Section */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-accent/10 rounded-lg">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Volunteer Work</h3>
                
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {volunteerExperiences.map((exp, index) => <Card key={index} className="glass-card hover:shadow-2xl transition-all duration-300 flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold mb-2">{exp.role}</h4>
                      <p className="font-semibold text-lg mb-2">
                        {exp.url ? <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            {exp.organization}
                          </a> : exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground font-medium">
                        {exp.category}
                      </p>
                    </div>
                    
                    <ul className="space-y-3 flex-1">
                      {exp.highlights.map((highlight, idx) => <li key={idx} className="flex gap-3 text-muted-foreground">
                          <span className="text-accent mt-1">■</span>
                          <span>{highlight}</span>
                        </li>)}
                    </ul>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Leadership & Organizations Section */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Leadership & Organizations</h3>
                
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {organizations.map((org, index) => <Card key={index} className="glass-card hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold mb-3">{org.role}</h4>
                      <p className="text-xl font-semibold mb-2">{org.organization}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{org.duration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        {org.affiliation}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {org.highlights.map((highlight, idx) => <li key={idx} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1">■</span>
                          <span>{highlight}</span>
                        </li>)}
                    </ul>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Achievements;