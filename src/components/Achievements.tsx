
import { Trophy } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
}

export function Achievements() {
  const achievements: Achievement[] = [
    {
      title: "Hotel Booking System",
      description: "Built a hotel system reducing double bookings by 75%.",
    },
    {
      title: "NGO Workshop Strategy",
      description: "Spearheaded efficient workshop strategies for NGO work.",
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl mb-6 animate-fade-in flex items-start gap-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                <Trophy className="text-accent" size={24} />
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
