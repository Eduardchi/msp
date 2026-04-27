export interface Measure {
  id: number;
  type: 'financial' | 'non-financial';
  level: 'federal' | 'regional';
  ministry: string;
  name: string;
  npa: string;
  requirements: string;
  volume: string;
  frequency: string;
  contact: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}
