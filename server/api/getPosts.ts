import { Post } from '@/types/post';

export default defineEventHandler(async (event) => {
  const posts: Post[] = [
    {
      frame:
        '<iframe width="100%" src="https://www.instagram.com/p/CxvBaGCIApU/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      caption: "iPhone 15 Pro is OVERHEATING🔥 Here's WHY Its happening. Have you experienced it?",
      likeCount: "60,440",
    
    },
    {
      frame:
        '<iframe width="100%" src="https://www.instagram.com/p/CgHdZQAIdtQ/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      caption:
        'Great time catching up with the CEO himself @getpeid at @nothing store launch in London. The Team is definitely bringing that "fire" back to tech!🔥',
      likeCount: "32,712",
    },
  ];

  try {
    event.node.res.statusCode = 200;
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.end(JSON.stringify(posts));
  } catch (error) {
    event.node.res.statusCode = 420;
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.end(JSON.stringify(error));
  }
});
