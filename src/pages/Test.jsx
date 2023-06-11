import { Button, Container } from 'react-bootstrap'
import '../App.css'
import NavBar from '../components/NavBar'
import { useState } from 'react'

const Test = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => setCount(count + 1)

    return (
        <>
            <NavBar />
            <Container fluid className='app-container'>
                <h1>Test page!</h1>
                <h6>Count: {count}</h6>
                <Button onClick={() => handleClick()}>Sumar count</Button>
            </Container>
        </>
    )
}

export default Test
