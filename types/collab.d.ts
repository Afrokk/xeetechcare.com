export interface Collab {
  name: string;
  videoId: string;
  date: string;
  views: string;
  type: string;
  description: string;
  subDescription?: string;
}

export interface CollabsData {
  collabs: Collab[];
}
