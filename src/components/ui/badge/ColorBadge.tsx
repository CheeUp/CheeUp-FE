import { TJobEng } from '@/model/job';

interface PColorBadge {
  type: TJobEng;
}

const ColorBadge: React.FC<PColorBadge> = ({ type }) => {
  const { text, bgColor } = badgeStyles[type];

  return (
    <div
      className={`flex h-[1.5rem] w-[3.5rem] items-center justify-center rounded-full text-detail font-semibold text-white ${bgColor} select-none`}
    >
      {text}
    </div>
  );
};

const badgeStyles = {
  BE: { text: 'BE', bgColor: 'bg-primary' },
  FE: { text: 'FE', bgColor: 'bg-secondary' },
  Embed: { text: 'Embed', bgColor: 'bg-complementary-mediumpurple' },
  Mobile: { text: 'Mobile', bgColor: 'bg-complementary-darksalmon' },
  Robot: { text: 'Robot', bgColor: 'bg-complementary-aquamarine' },
  Design: { text: 'Design', bgColor: 'bg-complementary-lightcrimson' },
  PM: { text: 'PM', bgColor: 'bg-complementary-lightgreen' },
  AI: { text: 'AI', bgColor: 'bg-complementary-boogerbuster' },
  Cloud: { text: 'Cloud', bgColor: 'bg-complementary-skyblue' },
};

export default ColorBadge;
