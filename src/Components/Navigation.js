import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0 , transform: 'translateX(-100%)'},
    enter: { opacity: 1 , transform: 'translateX(0%)' },
    leave: { opacity: 0 , transform: 'translateX(-100%)'},
    })
    return(
        <nav>
                <span className="text-xl">
                        <FontAwesomeIcon 
                            icon={faBars} 
                            onClick={() => setShowMenu(!showMenu)} 
                            />
                 </span>
                 {
                    maskTransitions.map(({ item, key, props }) =>
                        item && 
                        <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-black-t-50 bg-gray-400 top-0 left-0 z-50 w-full h-full"
                        onClick={() => setShowMenu(!showMenu)}
                        >
                    </animated.div>
                    )
                }
                {
                    menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                    key={key} 
                    style={props}
                    className="fixed bg-white p-3 top-0 left-0 w-4/5 lg:w-2/5 h-full z-50 shadow"
                    >
                        <NavigationMenu closeMenu= {() => setShowMenu(!showMenu)} />

                    </animated.div>
                    )
                }
        </nav>
    )
}

export default Navigation