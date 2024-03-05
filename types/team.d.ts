export interface SocialMediaLinks {
  email: string;
  insta?: string;
  youtube?: string;
  twitter?: string;
  tiktok?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  image: string;
  socialMediaLinks: SocialMediaLinks;
}

export interface TeamData {
  team: TeamMember[];
}
