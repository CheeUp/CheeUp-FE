interface PColorBadge {
  type: "BE" | "FE" | "Embed" | "Mobile" | "Robot" | "Design" | "PM" | "AI";
}

const badgeStyles = {
  BE: { text: "BE", bgColor: "bg-primary" },
  FE: { text: "FE", bgColor: "bg-secondary" },
  Embed: { text: "Embed", bgColor: "bg-complementary-mediumpurple" },
  Mobile: { text: "Mobile", bgColor: "bg-complementary-darksalmon" },
  Robot: { text: "Robot", bgColor: "bg-complementary-skyblue" },
  Design: { text: "Design", bgColor: "bg-complementary-lightcrimson" },
  PM: { text: "PM", bgColor: "bg-complementary-lightgreen" },
  AI: { text: "AI", bgColor: "bg-complementary-boogerbuster" },
};

export default function ColorBadge({ type }: PColorBadge) {
  const { text, bgColor } = badgeStyles[type];

  return (
    <div
      className={`w-[3.5rem] h-[1.5rem] flex justify-center items-center rounded-full text-detail text-white ${bgColor} select-none`}
    >
      {text}
    </div>
  );
}
