export interface InfoCardsProps {
  title?: string;
  desc?: string;
  cards: TypeInfoCard[];
}

export type TypeInfoCard = {
  href: string;
  icon?: string;
  name: string;
  tags?: string[];
  className?: string;
};
