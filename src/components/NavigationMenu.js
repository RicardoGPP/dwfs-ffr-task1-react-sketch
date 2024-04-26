import { useEffect, useState } from 'react';
import { Menu } from './Menu';

export const NavigationMenu = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        setSections(getMockedSections());
    }, []);

    return (
        <nav>
            <Menu
                items={sections}
                vertical={false}
                centered={true}
            />
        </nav>
    );
};

function getMockedSections() {
    const sections = [];

    for (let i = 1; i <= 4; i++) {
        sections.push({
            name: `Section ${i}`,
            url: '#'
        });
    }

    return sections;
}