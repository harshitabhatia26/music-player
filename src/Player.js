import React from 'react';
import Audio from './Audio';

const Player = ({ selectedSong }) => {
    if (!selectedSong) {
        return <div></div>;
    }

    return (
        <div className='flex flex-col items-center'>
            <a href="#" className=" flex flex-col items-start block mt-16">
                <h3 className="text-lg font-bold text-gray-200 sm:text-xl">{selectedSong.name}</h3>
                <p className="mt-1 mb-6 text-sm text-gray-300">
                    {selectedSong.artist}
                </p>
                <img
                    alt={selectedSong.name}
                    src={`https://cms.samespace.com/assets/${selectedSong.cover}`}
                    className="h-64 object-cover sm:h-80 lg:h-96 aspect-square"
                />
            </a>
            <Audio url={selectedSong.url} />
        </div>
    );
};

export default Player;
