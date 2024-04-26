import { useEffect, useState } from 'react';
import { Menu } from './Menu';

export const SideBar = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        setSections(getMockedSections());
    }, []);

    return (
        <aside>
            <Menu
                items={sections}
                vertical={true}
                centered={false}
            />
        </aside>
    );
};

function getMockedSections() {
    const sections = [];

    for (let i = 1; i <= 15; i++) {
        sections.push({
            name: `Section ${i}`,
            url: '#'
        });
    }

    return sections;
}