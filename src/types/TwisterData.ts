type TwisterType = {
  text: {
    id: number;
    text: string;
    difficulty: number;
    language: string;
    repetitions: number;
  }[];
  handleListView: (event: React.MouseEvent<HTMLElement>) => void;
  handleCardView: (event: React.MouseEvent<HTMLElement>) => void;
};

export type { TwisterType };
