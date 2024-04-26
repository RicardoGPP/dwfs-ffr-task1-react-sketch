export const Menu = ({items, vertical, centered}) => {
    return (
        <ul className={getClassName(vertical, centered)}>
            {
                items.map((item) => (
                    <li key={item.name} className="nav-item">
                        <a className="nav-link" href={item.url}>
                            {item.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
};

function getClassName(vertical, centered) {
    let className = "nav gap-1";

    if (vertical) {
        className += " flex-column";
    }

    if (centered) {
        className += " justify-content-center";
    }

    return className;
}