import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faTimes } from '@fortawesome/free-solid-svg-icons'

import ThemeToggle from './ThemeToggle'

const Nav = ({ libraryStatus, setLibraryStatus, theme, toggleTheme }) => {
	const [toggleButton, setToggleButton] = useState(true)

	const isActive = () => {
		setLibraryStatus(!libraryStatus)
		setToggleButton(!toggleButton)
	}

	return (
		<nav>
			<ThemeToggle
				className='themeToggle'
				theme={theme}
				toggleTheme={toggleTheme}
				libraryStatus={libraryStatus}
			/>
			<h1 className='title'>Chill Hop Player</h1>
			{toggleButton ? (
				<button className='library-button' onClick={isActive}>
					Library
					<FontAwesomeIcon className='music-icon' icon={faMusic} />
				</button>
			) : (
				<button className='mobile-close-icon' onClick={isActive}>
					<FontAwesomeIcon className='close-icon' icon={faTimes} />
				</button>
			)}
		</nav>
	)
}

export default Nav
