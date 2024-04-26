import { useEffect, useState } from 'react';
import { Menu } from './Menu';

export const Header = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        setTopics(getMockedTopics());
    }, []);

    return (
        <header>
            <div className="header-logo">
                <img
                    src="logo.png"
                    width="175"
                    height="50"
                    alt="logo"
                />
            </div>
            <div className="header-content">
                <Menu
                    items={topics}
                    vertical={false}
                    centered={false}
                />
                <input
                    type="search"
                    placeholder="Search"
                />
            </div>
        </header>
    );
};

function getMockedTopics() {
    const topics = [];

    for (let i = 1; i <= 4; i++) {
        topics.push({
            name: `Topic ${i}`,
            url: '#'
        });
    }

    return topics;
}