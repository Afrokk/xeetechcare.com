import type { Video } from '@/types/video';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

/**
 * Fetches videos from YouTube API.
 * @returns A promise that resolves to an array of Video objects.
 * @throws An error if the API request fails or no videos are found.
 */
async function fetchVideos(): Promise<Video[]> {
  const params = new URLSearchParams({
    part: 'snippet',
    maxResults: '5',
    playlistId: process.env.PLAYLIST_ID || 'default_value',
    key: process.env.YOUTUBE_API_KEY || 'default_value',
  });

  const response: Response = await fetch(`${YOUTUBE_API_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data: { items: Video[] } = await response.json();

  if (data.items.length === 0) {
    throw new Error('No videos found.');
  }

  return data.items;
}

/**
 * Retrieves videos from cache if available and valid, otherwise fetches videos from the API.
 * Sets the response status code and content type headers accordingly.
 * @param event - The event object containing the request and response objects.
 */
export default defineEventHandler(async (event) => {
  try {
    let videos: Video[];
    videos = await fetchVideos();
    event.node.res.statusCode = 200;
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.end(JSON.stringify(videos));
  } catch (error) {
    event.node.res.statusCode = 420;
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.end(JSON.stringify(error));
  }
});
