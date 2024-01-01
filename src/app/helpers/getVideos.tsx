import { google, youtube_v3 } from "googleapis";
import { GaxiosPromise } from "googleapis/build/src/apis/abusiveexperiencereport";

const API_KEY = "AIzaSyA3OXOpwyKDuO0ceDVSOKOdufcQE_1oPg4";
const channelId = "UC3gzXBIw0UKUU9PVOr45n0w";

const youtube = google.youtube({
  version: "v3",
  auth: API_KEY,
});

export default async function getVideos(): Promise<
  youtube_v3.Schema$PlaylistItem[]
> {
  try {
    const channelPromise: GaxiosPromise<youtube_v3.Schema$ChannelListResponse> =
      youtube.channels.list({
        part: ["id", "contentDetails"],
        id: [channelId],
      });

    const channelResponse = await channelPromise;
    const uploadId =
      channelResponse.data.items![0].contentDetails?.relatedPlaylists?.uploads;

    const playlistItemsPromise: GaxiosPromise<youtube_v3.Schema$PlaylistItemListResponse> =
      youtube.playlistItems.list({
        playlistId: uploadId,
        part: ["snippet"],
        maxResults: 50,
      });

    const playlistItemsResponse = await playlistItemsPromise;

    console.log(playlistItemsResponse.data.items?.length);

    return playlistItemsResponse.data.items || [];
  } catch (error) {
    console.error("Error fetching videos:", (error as Error).message);
    return [];
  }
}
