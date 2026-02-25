import { allSkills, techColors } from "@/data/portfolio";

const SkillMarquee = () => {
  const row1 = [...allSkills, ...allSkills];
  const row2 = [...allSkills.slice().reverse(), ...allSkills.slice().reverse()];

  const renderSkill = (skill: string, i: number) => (
    <div
      key={`${skill}-${i}`}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border whitespace-nowrap mx-2 flex-shrink-0"
      style={{
        borderColor: `hsl(${techColors[skill] || "191 100% 50%"} / 0.2)`,
        background: `hsl(${techColors[skill] || "191 100% 50%"} / 0.05)`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: `hsl(${techColors[skill] || "191 100% 50%"})` }}
      />
      <span className="text-sm font-code text-foreground">{skill}</span>
    </div>
  );

  return (
    <div className="space-y-4 overflow-hidden">
      <div className="flex animate-marquee-left" style={{ width: "max-content" }}>
        {row1.map(renderSkill)}
      </div>
      <div className="flex animate-marquee-right" style={{ width: "max-content" }}>
        {row2.map(renderSkill)}
      </div>
    </div>
  );
};

export default SkillMarquee;
