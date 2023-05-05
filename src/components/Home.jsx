import React from 'react'
import vg  from "../assests/2.png";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
 
 <>
    <div className='home' id='home'>
        <main>
        <h1>Dilkash Reza</h1>
        <p>Solution to all your problems</p>
        </main>
        
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            
            <div>
        <p>
            We are your one and only solution to the tech 
            problems you face
            every day. We are learning tech   company whose aim is to 
            increase the problem solving  ability in children.
        </p>
        </div>
        </div>
        

        <div className="home3" id='about'>
            .
            <div>
            <h1>Who are you</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore, vitae ratione maxime odio aut, dolor officiis sequi aperiam nobis culpa maiores? Quasi debitis voluptates, nobis a earum enim rem maxime, ipsum eveniet iusto ullam blanditiis nihil pariatur esse. Quis consectetur minima, sit nisi inventore veniam dolor numquam aspernatur atque iusto corrupti a quam distinctio mollitia, saepe modi minus, labore voluptates quisquam natus libero vero exercitationem commodi! Quo exercitationem temporibus assumenda ab amet quae accusantium debitis, error minus aperiam! Blanditiis quae laboriosam totam aut, incidunt eligendi delectus vitae libero modi ullam dicta minus, molestias nam harum maiores repellat, dolorum accusamus.</p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay: "0.9s",
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
 </>
  )
}

export default Home;