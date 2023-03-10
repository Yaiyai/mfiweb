import { useState } from 'react'

const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState)

	const resetForm = () => {
		setValues(initialState)
	}

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		})
	}


	return { values, setValues, handleInputChange, resetForm }
}

export default useForm
