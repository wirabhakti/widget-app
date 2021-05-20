import React from 'react';

const Link = ({ href, children }) => {
    const onLinkClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return
        }

        event.preventDefault();

        window.history.pushState({}, '', href);

        const popStateEvent = new PopStateEvent('popstate');
        window.dispatchEvent(popStateEvent);
    }

    return (
        <div>
            <a onClick={onLinkClick} className="item" href={href}>
                {children}
            </a>
        </div>
    )
}

export default Link