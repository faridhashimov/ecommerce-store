import { useState } from "react"

export const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = useState()

    setTimeout(() => {
        const timeoutId = setTimeout(() => setDebounce() )
    }, delay)
}
