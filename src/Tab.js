import React, { useState } from 'react';
import List from './List';
import ListTop from './ListTop';

const Tab = ({ onSelectSong }) => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('for-you');

    // Handlers to switch tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            {/* Navigation Tabs */}
            <nav className="flex gap-6 p-2" aria-label="Tabs">
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleTabClick('for-you'); }}
                    className={`shrink-0 rounded-lg p-2 text-md font-bold ${activeTab === 'for-you' ? 'text-stone-100' : 'text-stone-400 hover:text-stone-100'}`}
                >
                    For You
                </a>

                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleTabClick('top-songs'); }}
                    className={`shrink-0 rounded-lg p-2 text-md font-bold ${activeTab === 'top-songs' ? 'text-stone-100' : 'text-stone-400 hover:text-stone-100'}`}
                >
                    Top Songs
                </a>
            </nav>

            {/* Tab Content */}
            <div>
                {activeTab === 'for-you' && (
                    <div>
                        
                       
                        <List  onSelectSong={onSelectSong} />
                    </div>
                )}

                {activeTab === 'top-songs' && (
                    <div>
                        
                        <ListTop />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tab;
