export interface Post{
  id:number;
  publishedAt?: string;
  title:string;
  week?:string;
  content:string;
  image?: string;
  btag?:string;
  introduction:string;
  conclusion:string;
  reflection:string;
  obstacles:string;
  imageUrls?: string[];
}