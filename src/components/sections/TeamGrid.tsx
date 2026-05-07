import { TEAM_MEMBERS } from "@/lib/constants";
import { SanityImage } from "@/components/ui/SanityImage";
import type { TeamMember } from "@/types/sanity";

interface Props {
  members?: TeamMember[];
}

export function TeamGrid({ members }: Props) {
  const team = members ?? TEAM_MEMBERS;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/10">
      {team.map((member, i) => (
        <div key={"_id" in member ? member._id : member.name} className="bg-cream p-8 group">
          {/* Portrait */}
          <div className="relative aspect-square mb-6 overflow-hidden bg-sand/20">
            {"portrait" in member && member.portrait ? (
              <SanityImage
                image={member.portrait}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="placeholder-crosshair w-full h-full" />
            )}
            <span className="absolute bottom-3 right-3 label-index text-cream/60 bg-charcoal/60 px-2 py-1">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Info */}
          <p className="label-section text-terracotta mb-1">{member.role}</p>
          <h3 className="font-display text-xl text-charcoal mb-1">{member.name}</h3>
          {member.qualifications && (
            <p className="label-index text-stone leading-relaxed">{member.qualifications}</p>
          )}
          {member.experience && (
            <p className="label-index text-stone mt-2">{member.experience} yrs experience</p>
          )}
        </div>
      ))}
    </div>
  );
}
