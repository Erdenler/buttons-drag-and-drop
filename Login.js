import React, { useMemo, useState } from 'react'


function Login()
() => {
    const [number, setNumber] = useState(0)
    const data = useMemo(() => {
        return [{ name: "Erden", number }]
    }, [number])
    return (
        <div>

        </div>
    )
}



export default Login

