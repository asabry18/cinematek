import { Navbar,Container,Nav,Form,Button } from "react-bootstrap"
import theatre from '../icons/theater.png'
import { useState } from "react"
import { Link } from "react-router-dom"
import { searchmovies, getallmovies } from "../redux/actions/moviesaction"
import { useDispatch } from "react-redux"
export default function NavBar(){
    const [searchinput,setsearchinput] = useState('')

    const dispatch = useDispatch()

    //to get the movies relevant to the search
    async function search(searchTitle) {
        if (searchTitle==='') {
            dispatch(getallmovies())
        }
        else{
            dispatch(searchmovies(searchTitle))
        }
    }

    //set search input to use state
    function getsearch(e){
        setsearchinput(e.target.value)
    }
    
    // Send the search value to the search function
    function sendSearch(e){
        e.preventDefault()
        search(searchinput)
        setsearchinput('')
    }
    
    return(
        <>
            <Navbar expand="lg" className="navbar mb-5">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="nav-logo">
                            <Link to={"/"}>
                                <img src={theatre} className="w-100" alt="nav-logo"/>
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="toggler" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex w-100" onSubmit={sendSearch}>
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="search-input me-2"
                            aria-label="Search"
                            value={searchinput} 
                            onChange={getsearch}
                            />
                            <Button type="submit" className="search-btn">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}