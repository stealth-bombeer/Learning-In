import'./aboutus.css'


const Aboutus = () => {
    return (


<div className='bg-white w-full h-screen us bg-repeat'>
   
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        
        <div className="about-section pt-10">
        <div className='mt-10 text-6xl'>
          <h3>ABOUT US</h3>
          </div>
           <div className='mt-10 text-2xl'>
          <p>
            We as a team want to help students practice and enjoy  quizzes  while learning more and more!
          </p>
          </div>
        </div>
        <div className='mt-10 mb-24 text-black text-solid text-4xl'>
        <h13 style={{ textAlign: "center" }}>Our Team</h13>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
            <div class="card_img mt-4">
              <img   src="https://tse2.mm.bing.net/th?id=OIP.1eF-RQMZR56Sl_WTDfD6EwHaHa&pid=Api&P=0" alt="Kunal" style={{ width: "100%" }} />
              </div>
              <div className="container">
                <div className='mt-8 mb-4'>
                <h3>Kunal Goudani</h3>
                </div>
                <div>
                <p className="title">CS </p>
                </div>
                <div>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                </div>
                <div className='mt-4 mb-4 italic'>
                <p>kunal@example.com</p>
                </div>
                <p>
                  <button type ="submit" className="button mb-8">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
            <div class="card_img mt-4">
              <img   src="https://tse2.mm.bing.net/th?id=OIP.0gPNYSZ7ZMI5NbMht2k6GgHaHa&pid=Api&P=0" alt="Kiara" style={{ width: "100%" }} />
              </div>
              <div className="container">
                <div className='mt-8 mb-4'>
                <h3>Dhruvisha Anghan</h3>
                </div>
                <div>
                <p className="title">IT</p>
                </div>
                <div>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                </div>
                <div className='mt-4 mb-4 italic'>
                <p>dhruvisha@example.com</p>
                </div>
                <p>
                  <button className="button  mb-8">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
            <div class="card_img mt-10">
              <img   src="https://cdn4.iconfinder.com/data/icons/office-34/256/28-512.png" alt="Arhaan" style={{ width: "100%" }} />
              </div>
              <div className="container ">
                <div className='mt-8 mb-4'>
                <h3>Dev Bhuva</h3>
                </div>
                <div>
                <p className="title">CS</p>
                </div>
                <div>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                </div>
                <div className='mt-4 mb-4 italic'>
                <p>dev@example.com</p>
                </div>
                <p>
                  <button className="button  mb-8">Contact</button>
                </p>
              </div>
            </div>
            <div>
            </div>
         
         </div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title />
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
  />
  <div className="page-content  ">
    <div className='text-2xl font-serif mt-10 text-grey-500'>FEATURES OF OUR WEBSITE</div> 
    <div className='list-disc mt-10'>
    <ul className="list-disc gap-2">
      <div>
      <li> Enriches  understanding with interesting facts and keeps them up to date with current events </li>
      <li> Teachers/Hosts can create quizzes with timers and get a unique room code. The Interested users can enter the quiz using the room code and  receive an analysis of their performance along with the quiz's ranking list.</li>
      <li> By selecting a subject from 22 categories and three levels of difficulty, users can brush up on their knowledge and put it to the test with our automatically generated quiz.</li>
      <li> creates a profile for each user, keeps track of their progressbar, and uses statistical methods to show their performance history.</li>
      <li>Enhances the teaching experience of tutors and learning experience of students.Enables students to retain the content better by giving quizzes.Uses help of technologies to modernize the process of learning.</li>
      <li>Make learning more engaging and interactive.Users can assess their expertise in every sector and make improvements in line with the analysis produced.Keeps users informed on current events and the world's news.</li>
      </div>
    </ul>

    </div>

  </div>
  <footer>
    <div className="footer-container">
      <div className="left-col">
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          
          Learning In
          
        </div>
        <div className="social-media">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <p className="rights-text">
          © 2021 Created By <b>FantacyDesigns</b> All Rights Reserved.
        </p>
      </div>
      <div className="right-col">
        <h3>Our Newsletter</h3>
        <div className="border1" />
        <p>Enter Your Email to get our news and updates.</p>
        <form action className="newsletter-form">
          <input type="text" className="txtb" placeholder="Enter Your Email" />
          <input type="submit" className="btn2" defaultValue="submit" />
        </form>
      </div>
    </div>
  </footer>
</div>

          
      </div>
     
        );
}
 
export default Aboutus;