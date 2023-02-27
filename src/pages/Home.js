import { Link } from "react-router-dom"


const Home = () => {

    return (
        <div>

            <h1>Home</h1>
            <img src='./assets/beers.png' alt="beers pic"/>
            <Link className="home-links" to={"/beers"}>
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam. Rhoncus aenean vel elit scelerisque mauris. Hac habitasse platea dictumst quisque sagittis. Ac auctor augue mauris augue neque. Nibh nisl condimentum id venenatis. Nisi porta lorem mollis aliquam ut porttitor. Consequat semper viverra nam libero justo. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Aenean pharetra magna ac placerat. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Adipiscing elit ut aliquam purus sit amet. Rhoncus est pellentesque elit ullamcorper dignissim. Porta nibh venenatis cras sed felis eget velit. Vel facilisis volutpat est velit.</p>
            
            </Link>
            <img src={"../assets/random-beer.png"} alt="random beers pic"/>
            <Link className="home-links" to={'/random-beer'}>
            <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam. Rhoncus aenean vel elit scelerisque mauris. Hac habitasse platea dictumst quisque sagittis. Ac auctor augue mauris augue neque. Nibh nisl condimentum id venenatis. Nisi porta lorem mollis aliquam ut porttitor. Consequat semper viverra nam libero justo. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Aenean pharetra magna ac placerat. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Adipiscing elit ut aliquam purus sit amet. Rhoncus est pellentesque elit ullamcorper dignissim. Porta nibh venenatis cras sed felis eget velit. Vel facilisis volutpat est velit.</p>
            </Link>
            <img src={"../assets/new-beer.png"} alt="new beers pic"/>
            <Link className="home-links" to={'/new-beer'}>
            <h2>Add A Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam. Rhoncus aenean vel elit scelerisque mauris. Hac habitasse platea dictumst quisque sagittis. Ac auctor augue mauris augue neque. Nibh nisl condimentum id venenatis. Nisi porta lorem mollis aliquam ut porttitor. Consequat semper viverra nam libero justo. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Aenean pharetra magna ac placerat. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Adipiscing elit ut aliquam purus sit amet. Rhoncus est pellentesque elit ullamcorper dignissim. Porta nibh venenatis cras sed felis eget velit. Vel facilisis volutpat est velit.</p>
            </Link>

        </div>
    )
}

export default Home