import React, { createRef, useState } from 'react'

const PrimerComponente = () => {

	const [nombre, setNombre] = useState()
	// const [apellido, setApellido] = useState(false)
	// const [email, setEmail] = useState(false)
	// const [password, setPassword] = useState(false)

	// Validaciones mockeadas para el form
	// const nombreRegex = /^[a-zA-Z]{3,16}$/
	// const emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
	// const apellidoRegex = /^[a-zA-Z]{3,16}$/
	// const passwordRegex = /^[a-z0-9_-]{6,18}$/

	const valorNombre = (nombreAValidar) => {
		const validName = true
		if (nombreAValidar !== null && nombreAValidar.replace(/\s/g, '').length > 0) {
			setNombre(validName)
		} else {
			setNombre(!validName)
		}
	}

	// const valorApellido = (apellidoAValidar) => {
	// 	const validSurname = true
	// 	if (apellidoAValidar !== null && apellidoAValidar.length !== 0) {
	// 		if (!apellidoAValidar.replace(/\s/g, '').length)
	// 			// if (apellidoRegex.test()) {
	// 			setApellido(validSurname)
	// 		// }
	// 	}
	// }

	// const valorEmail = (mailAValidar) => {
	// 	const validEmail = true
	// 	if (mailAValidar !== null && mailAValidar.length !== 0) {
	// 		if (!mailAValidar.replace(/\s/g, '').length)
	// 			// if (emailRegex.test()) {
	// 			setEmail(validEmail)
	// 		// }
	// 	}
	// }
	// const valorPassword = (passwordAValidar) => {
	// 	const validPassword = true
	// 	console.log(passwordAValidar)
	// 	if (passwordAValidar !== null && passwordAValidar.length !== 0) {
	// 		if (!passwordAValidar.replace(/\s/g, '').length)
	// 			// if (passwordRegex.test()) {
	// 			setPassword(validPassword)
	// 		// }
	// 	}
	// }

	const enviar = (e) => {
		e.preventDefault()
		if (nombre === true) {
		// if (nombre === true && apellido === true && email === true && password === true) {
			console.log('Datos ok!')
		} else {
			console.log('Datos erróneos!')
		}

		//setTimeout(() => { window.location.reload() }, 5000)
	}

	return (
		<>
			<form onSubmit={e => enviar(e)}>
				<label>Nombre</label>
				<input type="text" onChange={e => valorNombre(e.target.value)} name="" id="" />
				{/* <label>Apellido</label>
				<input type="text" onChange={e => valorApellido(e.target.value)} name="" id="" />
				<label>Email</label>
				<input type="text" onChange={e => valorEmail(e.target.value)} name="" id="" />
				<label>Contraseña</label>
				<input type="password" onChange={e => valorPassword(e.target.value)} name="" id="" /> */}
				<input type="submit" />
			</form>
		</>
	)
}

export default PrimerComponente

// const [colorDefault, setColor] = useState('blue')

// export default PrimerComponente
// const divPrueba = {
// 	width: '1000px',
// 	height: '200px',
// 	backgroundColor: colorDefault
// }

// const changeColorText = () => {
// 	//changeColor.current.style.color = 'orange'
// 	console.log(colorDefault)
// 	//colorDefault === 'blue' ? setColor('green') : setColor('pink')
// 	if (colorDefault === 'blue') {
// 		setColor('green')
// 		console.log(colorDefault)
// 	} else if (colorDefault === 'green') {
// 		setColor('blue')
// 		console.log(colorDefault)
// 	}
// }

// return (
// 	<div style={divPrueba}>
// 		<button onClick={changeColorText}>Cambiar texto!</button>
// 	</div>
// )