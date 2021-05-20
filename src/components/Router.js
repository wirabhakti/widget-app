import { useEffect, useState } from 'react';

const Router = ({ path, children }) => {
    // if(window.location.pathname === path){
    //     return (
    //         <div>
    //             {children}
    //         </div>
    //     ) 
    // }else{
    //     return null
    // }

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {

        const onLocationChange = (event) => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return (currentPath === path ? children : null)

}

export default Router