import React from 'react'
import './home.css'
import logo from '../img/logo.png'
import img1 from '../img/1-2.jpg'
import img2 from '../img/16.jpg'
import img3 from '../img/3-2.jpg'
import img4 from '../img/15.jpg'
import img5 from '../img/5-1.jpg'
import img6 from '../img/6-1.jpg'
import img7 from '../img/c3.PNG'
import img8 from '../img/8-1.jpg' 
import img9 from '../img/10.jpg'
import img10 from '../img/9-1.jpg'
import img11 from '../img/3-2.jpg'
import img12 from '../img/12.jpg'
import img13 from '../img/c1.PNG'
import img14 from '../img/14.jpg'




function Home() {
    return (
    <div>
        <nav>
            <div class="div">
                <img src={logo} alt="logo"/>
            </div>
            <ul>
                <li> <a href="/">Home</a>
    </li>

                <li> <a href="/">About</a>

                </li>

                <li> <a href="/">Portfolio</a>

                </li>

                <li> <a href="/">Blog</a>

                </li>

                <li> <a href="page13.html">Contact US</a> </li>


            </ul>

            <div class="icons">
                <i class=""></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google"></i>
                <i class="fab fa-pinterest"></i>
                <i class="fas fa-globe"></i>

            </div>

        </nav>

        <div class="gallery">

            <div class="pic photo">

            <img src={img1} alt="" class="img-1"/>
           
            <div class="border-up"></div>
            
            <div class="border-down"></div>

            <h1>paper left boat</h1>

            <button>Read More <b>+</b> </button>

            </div>

            <div class="pic-1 photo">

            <img src={img2} alt="" class="img-2"/>

            <div class="left"> <i class="fas fa-link"></i> </div>

            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-2 photo">

            <img src={img3} alt="" class="img-3"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            <h1>about us</h1>

            </div>

            <div class="pic-3 photo">

            <img src={img4} alt="" class="img-4"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-4 photo">

            <img src={img5} alt="" class="img-5"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-5 photo">

            <img src={img6} alt="" class="img-6"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-6 photo">

            <img src={img7} alt="" class="img-7"/>

            </div>

            <div class="pic-7 photo">

            <img src={img8} alt="" class="img-8"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-8 photo">

            <img src={img9} alt="" class="img-9"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-9 photo">

            <img src={img10} alt="" class="img-10"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-10 photo">

            <img src={img11} alt="" class="img-11"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            <h1>contact us</h1>

            </div>

            <div class="pic-11 photo">

            <img src={img12} alt="" class="img-12"/>

            <div class="left"> <i class="fas fa-link"></i> </div>
            
            <div class="right"> <i class="fas fa-search"></i> </div>

            </div>

            <div class="pic-12 photo">

            <img src={img13} alt="" class="img-13"/>

            </div>

            <div class="pic-13 photo">

            <img src={img14} alt="" class="img-14"/>

            <div class="over-text">

                <h1> <i class="fas fa-quote-left"></i> Leverage agile frameworks to the <br/>
                    provide a robust synopsis for high</h1>
                
                <p>-; John Doue</p>

            </div>

            </div>

            <div class="footer">

                <div class="logo">

                    <img src={logo} alt=""/>

                </div>

                <p>© Copyright 2024 Limerick. All Rights Reserved to <hr /><b>Rana khizar hayat</b></p>

                <div class="icon">

                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google"></i>
                    <i class="fab fa-pinterest"></i>
                    <i class="fas fa-globe"></i>

                </div>

            </div>

        </div>

    </div>
    )
}

export default Home
