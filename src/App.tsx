import { useState } from 'react'
import './App.css'
import axios from 'axios';

const YOUTUBE_API_KEY = '';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Type definition for YouTube video
interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

// Custom hook for fetching YouTube videos
const useYouTubeVideos = (query: string, maxResults: number = 10) => {
  return useQuery(['youtubeVideos', query], async () => {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        key: YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: maxResults
      }
    });
    return response.data.items;
  });
};

// YouTube Video List Component
const YouTubeVideoList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('React tutorials');
  const { data: videos, isLoading, error } = useYouTubeVideos(searchQuery);

  if (isLoading) return <div>Loading videos...</div>;
  if (error) return <div>Error fetching videos</div>;

  return (
    <div className="youtube-video-list">
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search YouTube videos"
        className="search-input"
      />
      <div className="video-grid">
        {videos?.map((video: YouTubeVideo) => (
          <div key={video.id.videoId} className="video-card">
            <img 
              src={video.snippet.thumbnails.medium.url} 
              alt={video.snippet.title} 
              className="video-thumbnail"
            />
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description.substring(0, 100)}...</p>
            <a 
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="watch-button"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// App component wrapping with React Query Provider
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <h1>YouTube Video Search</h1>
        <YouTubeVideoList />
      </div>
    </QueryClientProvider>
  );
};

export default App
