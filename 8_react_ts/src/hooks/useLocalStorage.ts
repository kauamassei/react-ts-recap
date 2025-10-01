import {useState} from "react"

export const useLocalStorage = () => {
    const [value, setValue] = useState([])
    const saved = localStorage.getItem(value)
}