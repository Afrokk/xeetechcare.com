import { Video, Cache } from '@/types/video';

const CACHE_VALIDITY_DURATION = 2 * 60 * 60 * 1000; // 2 hours
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

let cache: Cache = {
  videos: null,
  fetchTime: null,
};

function isCacheValid(): boolean {
  return (
    cache.videos !== null &&
    cache.fetchTime !== null &&
    Date.now() - cache.fetchTime < CACHE_VALIDITY_DURATION
  );
}

async function fetchVideos(): Promise<Video[]> {
  const params = new URLSearchParams({
    part: 'snippet',
    maxResults: '5',
    playlistId: process.env.PLAYLIST_ID || 'default_value',
    key: process.env.YOUTUBE_API_KEY || 'default_value',
  });

  const response: Response = await fetch(`${YOUTUBE_API_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Error fetching videos: ${response.status}`);
  }

  const data: { items: Video[] } = await response.json();

  if (data.items.length === 0) {
    throw new Error('No videos found.');
  }

  return data.items;
}

export default defineEventHandler(async (event) => {
  try {
    let videos: Video[];

    if (isCacheValid()) {
      videos = cache.videos!;
    } else {
      videos = await fetchVideos();
      cache = { videos, fetchTime: Date.now() };
    }

    event.node.res.statusCode = 200;
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.end(JSON.stringify(videos));
  } catch (error) {
    event.node.res.statusCode = 420;
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.end(JSON.stringify(error));
  }
});
