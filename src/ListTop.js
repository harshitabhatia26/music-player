import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Search from './Search';

const ListTop = ({onSelectSong, songs, setSongs, loading, error, setLoading, setError }) => {
    const [filteredTopTracks, setFilteredTopTracks] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    // Memoize getDuration function
    const getDuration = useCallback((url) => {
        return new Promise((resolve, reject) => {
            const audio = new Audio(url);
            audio.onloadedmetadata = () => resolve(audio.duration);
            audio.onerror = () => reject(new Error('Error loading audio'));
        });
    }, []);

    // Fetch durations for all songs
    useEffect(() => {
        const fetchDurations = async () => {
            try {
                const updatedSongs = await Promise.all(songs.map(async (song) => {
                    try {
                        await new Promise(resolve => setTimeout(resolve, 100));
                        const duration = await getDuration(song.url);
                        return { ...song, duration: Math.floor(duration) };
                    } catch (error) {
                        console.error(`Error fetching duration for ${song.name}:`, error);
                        return { ...song, duration: 'Unknown' };
                    }
                }));
                setSongs(updatedSongs);
            } catch (error) {
                setError('Failed to fetch song durations.');
                console.error('Error fetching durations:', error);
            }
        };

        if (songs.length > 0) {
            fetchDurations();
        }
    }, [songs, getDuration]);

    // Filter top tracks based on search query
    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const topTracks = songs.filter(song => song.top_track);
        const filtered = topTracks.filter(song =>
            song.name.toLowerCase().includes(lowerCaseQuery) ||
            song.artist.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredTopTracks(filtered);
    }, [searchQuery, songs]);

    // Memoize the song list rendering
    const renderedTopTracks = useMemo(() => (
        filteredTopTracks.map(song => (
            <li key={song.id}>
                <div className='block rounded-lg hover:bg-gray-800 flex flex-row justify-between items-center p-2'
                    onClick={()=>onSelectSong(song)}>
                    <div className='flex flex-row'>
                        <img 
                            className='w-10 h-10 p-1 rounded-full object-cover' 
                            src={`https://cms.samespace.com/assets/${song.cover}`} 
                            alt={song.name} 
                        />
                        <div className='flex flex-col items-start'>
                            <div className='px-4 text-sm font-medium text-gray-200'>{song.name}</div>
                            <div className='px-4 text-xs font-normal text-gray-300'>{song.artist}</div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='px-4 text-xs font-normal text-gray-300'>
                            {song.duration !== undefined ? 
                                `${Math.floor(song.duration / 60)}:${String(song.duration % 60).padStart(2, '0')}` : 
                                'Loading...'}
                        </div>
                    </div>
                </div>
            </li>
        ))
    ), [filteredTopTracks, onSelectSong]);

    return (
        <div>
            <Search onSearch={(query) => setSearchQuery(query)} /> {/* Pass down search query */}
            {loading && <p>Loading songs...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ul className="space-y-1 m-2">
                {renderedTopTracks}
            </ul>
        </div>
    );
};

export default ListTop;
