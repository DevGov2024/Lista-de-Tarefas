


    export type Task = {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  completed: boolean;
  completedAt?: Date | null;
};