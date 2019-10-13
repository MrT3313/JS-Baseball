// - IMPORTS - //
    import {useState} from 'react'

// - CUSTOM HOOK - //
const draftSelection = (key, initialValue) => {
    const [value, setValue] = useState(initialValue)
    console.log(key, initialValue)

    const handleSelection = selectionType => {
        setValue(selectionType)
    }
return [value, handleChanges, setValue]
}

// - EXPORTS - //
export default draftSelection