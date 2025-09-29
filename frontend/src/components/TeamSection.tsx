import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Michael Rodriguez",
      position: "CEO & Founder",
      experience: "15+ years in Forex Trading",
      initials: "MR",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Chen",
      position: "Head of Trading",
      experience: "12+ years in Financial Markets",
      initials: "SC",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Thompson",
      position: "Risk Management Director",
      experience: "10+ years in Risk Analysis",
      initials: "DT",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emily Johnson",
      position: "Customer Success Manager",
      experience: "8+ years in Client Relations",
      initials: "EJ",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 px-4 relative bg-black">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-500">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the professionals behind Profit Prime's success, bringing decades of combined experience in forex trading and financial markets
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-6 shadow-lg border border-green-600/30 backdrop-blur-sm hover:scale-105 hover:shadow-green-500/30 transition-transform duration-300 group"
            >
              <div className="text-center space-y-4">
                {/* Avatar */}
                <div className="relative mx-auto w-24 h-24 rounded-full ring-4 ring-green-600/40 group-hover:ring-green-500/70 transition-all duration-300 bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-green-400 font-medium">{member.position}</p>
                  <p className="text-sm text-gray-400">{member.experience}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-2">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-green-600/30 flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-green-500/20 transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-green-600/30 flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-green-500/20 transition"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
