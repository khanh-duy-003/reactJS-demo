import { useContext } from 'react'
import Context from './Context';

export const useStote = () => {
    const [state, dispathch] = useContext(Context)

    return [state, dispathch]
}