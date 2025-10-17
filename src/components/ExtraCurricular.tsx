import { Users, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ExtraCurricular = () => {
  const volunteerExperiences = [
    {
      role: "Student Volunteer",
      organization: "Data Con LA",
      category: "Science and Technology",
      description: [
        "Supported event logistics and registration for one of the largest data science conferences in Southern California.",
        "Assisted with speaker coordination, attendee engagement, and session setup, contributing to a seamless event experience.",
        "Gained exposure to emerging trends in data analytics, machine learning, and public sector tech applications."
      ]
    },
    {
      role: "Student Volunteer",
      organization: "RE+ Events",
      category: "Science and Technology",
      description: [
        "Provided assistance to exhibitors and attendees, ensuring smooth navigation and adherence to event schedules.",
        "Took headcounts and handled exhibitors and attendees registrations",
        "Networked with professionals in the energy and sustainability sector, deepening industry understanding"
      ]
    },
    {
      role: "Student Volunteer",
      organization: "ISACA Los Angeles Chapter",
      category: "Science and Technology",
      description: [
        "Supported the execution of an ISACA LA cybersecurity and governance conference, helping with attendee check-in and session transitions.",
        "Received CPE (Continuing Professional Education) certification for active volunteer participation and conference support."
      ]
    }
  ];

  const organizations = [
    {
      role: "Treasurer & Social Media Coordinator",
      organization: "International Student Association",
      duration: "Oct 2024 - May 2025",
      affiliation: "California State University-Long Beach - College of Business",
      description: [
        "Was responsible for managing the finances",
        "Oversaw and managed Social Media for ISA organization - Instagram",
        "Created content and also served as a outreach coordinator"
      ]
    },
    {
      role: "Cultural Head",
      organization: "Group of IT Students",
      duration: "Aug 2021 - May 2023",
      affiliation: "Datta Meghe College of Engineering CIDCO Sector III Airoli Navi Mumbai",
      description: [
        "Conducted workshops on Data Analysis using Python (Pandas, NumPy, Matplotlib, Seaborn) and hosted a session for over 200 students on key Git and GitHub skills for open-source collaboration.",
        "Managed diverse responsibilities, including team leadership and organizing 20+ events, while overseeing various tasks for the Cultural Fest and handling the committee's Social Media account."
      ]
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Extra-Curricular <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Community involvement, leadership roles, and volunteer contributions.
          </p>
        </div>

        {/* Volunteer Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Volunteer Experience
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {volunteerExperiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{exp.role}</CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    {exp.organization}
                  </CardDescription>
                  <CardDescription className="text-sm">
                    {exp.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Organizations
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {organizations.map((org, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{org.role}</CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    {org.organization}
                  </CardDescription>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {org.duration}
                  </CardDescription>
                  <CardDescription className="text-sm italic">
                    {org.affiliation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {org.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
