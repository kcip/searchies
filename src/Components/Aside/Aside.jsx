import React from 'react'
import './aside.scss';
function Aside() {
	return (
		<div className="aside" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<p style={{ color: 'white' }}> " If you want a happy ending, that depends, of course, on where you stop you story."</p>

			<p style={{ color: 'white', marginLeft: '10px' }}>- Orson Welles</p>
		</div>
	)
}
export default Aside