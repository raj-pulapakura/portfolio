interface PlaylistItemThumbnail {
  url: string;
  width: number;
  height: number;
}

interface PlaylistItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: PlaylistItemThumbnail;
    medium: PlaylistItemThumbnail;
    high: PlaylistItemThumbnail;
    standard: PlaylistItemThumbnail;
    maxres: PlaylistItemThumbnail;
  };
  channelTitle: string;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
  playlistId: string;
  position: number;
  resourceId: {
    kind: string;
    videoId: string;
  };
}
