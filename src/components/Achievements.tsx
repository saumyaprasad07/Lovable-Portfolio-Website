import { Award, FileText, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Achievements = () => {
  const publications = [
    {
      title: "Brain Tumor MRI Image Segmentation using Deep Learning",
      journal: "International Journal of Innovative Research in Technology",
      date: "Apr 26, 2023",
      description: "Developed a segmentation model using CNN (ResNet50 Architecture) to detect and localize brain tumors in MRI images. The model classifies images and highlights tumor masks for comprehensive diagnostic support.",
      tags: ["Deep Learning", "CNN", "ResNet50", "Medical Imaging", "Computer Vision"],
      url: "https://ijirt.org/article?manuscript=159463"
    }
  ];

  const volunteerExperiences = [
    {
      role: "Student Volunteer",
      organization: "Data Con LA",
      category: "Science and Technology",
      highlights: [
        "Supported event logistics for one of Southern California's largest data science conferences",
        "Gained exposure to emerging trends in data analytics and machine learning"
      ],
      url: "https://www.linkedin.com/in/saumyaprasad07/add-edit/VOLUNTEER/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profileVolunteerExperience%3A%28ACoAADH6KWQBuqjeo84sLwSZIW5slODasZUSK_Q%2C1205948260%29&desktopBackground=PROFILE_DETAIL_SCREEN&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_volunteering_experience_details%3BTnrxRbkcQPSeD%2BPgvhDt6g%3D%3D"
    },
    {
      role: "Student Volunteer",
      organization: "RE+ Events",
      category: "Science and Technology",
      highlights: [
        "Managed exhibitor and attendee registrations",
        "Networked with professionals in energy and sustainability sector"
      ],
      url: "https://www.linkedin.com/in/saumyaprasad07/add-edit/VOLUNTEER/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profileVolunteerExperience%3A%28ACoAADH6KWQBuqjeo84sLwSZIW5slODasZUSK_Q%2C1814216042%29&desktopBackground=PROFILE_DETAIL_SCREEN&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_volunteering_experience_details%3B5s1%2FXGlYSQC3wso%2B3vHUhw%3D%3D"
    },
    {
      role: "Student Volunteer",
      organization: "ISACA Los Angeles Chapter",
      category: "Science and Technology",
      highlights: [
        "Supported cybersecurity and governance conference execution",
        "Received CPE certification for active volunteer participation"
      ],
      url: "https://www.linkedin.com/in/saumyaprasad07/add-edit/VOLUNTEER/?profileFormEntryPoint=PROFILE_SECTION&entityUrn=urn%3Ali%3Afsd_profileVolunteerExperience%3A%28ACoAADH6KWQBuqjeo84sLwSZIW5slODasZUSK_Q%2C833229866%29&desktopBackground=PROFILE_DETAIL_SCREEN&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_volunteering_experience_details%3B5s1%2FXGlYSQC3wso%2B3vHUhw%3D%3D"
    }
  ];

  const organizations = [
    {
      role: "Treasurer & Social Media Coordinator",
      organization: "International Student Association",
      duration: "Oct 2024 - May 2025",
      affiliation: "California State University-Long Beach",
      highlights: [
        "Managed organizational finances and budget allocation",
        "Oversaw Instagram social media presence and content strategy"
      ]
    },
    {
      role: "Cultural Head",
      organization: "Group of IT Students",
      duration: "Aug 2021 - May 2023",
      affiliation: "Datta Meghe College of Engineering",
      highlights: [
        "Conducted Python workshops (Pandas, NumPy, Matplotlib) for 200+ students",
        "Organized 20+ events and managed Cultural Fest committee"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Publications, volunteer work, and leadership contributions
          </p>
        </div>

        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
          </TabsList>

          {/* Publications Tab */}
          <TabsContent value="publications" className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        <a 
                          href={pub.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors underline"
                        >
                          {pub.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {pub.journal} · {pub.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Volunteer Tab */}
          <TabsContent value="volunteer" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {volunteerExperiences.map((exp, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <CardTitle className="text-lg">{exp.role}</CardTitle>
                      <CardDescription className="font-semibold text-foreground mt-1">
                        {exp.url ? (
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors underline"
                          >
                            {exp.organization}
                          </a>
                        ) : (
                          exp.organization
                        )}
                      </CardDescription>
                      <CardDescription className="text-sm mt-1">
                        {exp.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Leadership Tab */}
          <TabsContent value="leadership" className="grid gap-6 md:grid-cols-2">
            {organizations.map((org, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{org.role}</CardTitle>
                      <CardDescription className="font-semibold text-foreground mt-1">
                        {org.organization}
                      </CardDescription>
                      <CardDescription className="flex items-center gap-2 text-sm mt-1">
                        <Calendar className="w-4 h-4" />
                        {org.duration}
                      </CardDescription>
                      <CardDescription className="text-sm italic mt-1">
                        {org.affiliation}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {org.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Achievements;