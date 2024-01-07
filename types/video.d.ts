export type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: {
      kind: string;
      videoId: string;
    };
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
      standard: {
        url: string;
      };
    };
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
  };
  etag: string;
  kind: string;
};

export interface Cache {
  videos: Video[] | null;
  fetchTime: number | null;
}
