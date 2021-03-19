import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <section>

        <div class="container">
          <div class="mx-auto" style={{ width: 500 }}>Upto 70% Off + Free Shipping On ₹499/-</div>
        </div>

        <nav class="navbar navbar-expand-lg bg-dark">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">7 Day Returns</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Track Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Return Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Sell On Mirraw</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Survey</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href=""><i class="fas fa-user-tie"></i> <b>LOG IN</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href=""><i class="fas fa-shopping-bag"></i> <b>CART(0)</b></a>
            </li>
          </ul>
        </nav>
        <div>
          <img src="data:image/png;base64,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" alt="Mirraw Logo" />
          <form>
            <div class="container ml-auto" style={{ width: 500 }}>
              <input type="text" placeholder="Search Something..." />
            </div>
          </form>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Sarees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Lehengas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Salwar Kameez</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Kurties</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Jewellery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Kids</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Home & Living</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">LUXE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Celebrities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Collections</a>
            </li>
          </ul>
        </nav>


      </section>

      <section>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="1000" data-pause="hover">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://assets0.mirraw.com/banner_sliders/7978/Exclusive-saree-collection-%28destop%29_main_webp.webp?1613466325" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://assets0.mirraw.com/banner_sliders/8061/Ready-to-ship-Collection-%28Banner%29_main_webp.webp?1615348760" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://assets0.mirraw.com/banner_sliders/8120/Clearence-sale-%28New%29-3_main_webp.webp?1615348705" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</section>
<section>
    <div class="row">
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9222/Christmast_%28layout_down%29-01_main.jpg?1608803378"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9223/Christmast_%28layout_down%29-02_main.jpg?1608803384"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9224/Christmast_%28layout_down%29-03_main.jpg?1608803387"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9225/Christmast_%28layout_down%29-04_main.jpg?1608803393"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9226/Christmast_%28layout_down%29-05_main.jpg?1608803787"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9227/Christmast_%28layout_down%29-06_main.jpg?1608803794"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9228/Christmast_%28layout_down%29-07_main.jpg?1608803796"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9229/Christmast_%28layout_down%29-08_main.jpg?1608803803"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9230/Christmast_%28layout_down%29-09_main.jpg?1608804204"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9231/Christmast_%28layout_down%29-10_main.jpg?1608804212"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9232/Christmast_%28layout_down%29-11_main.jpg?1608804220"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9233/Christmast_%28layout_down%29-12_main.jpg?1608804225"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9234/Christmast_%28layout_down%29-13_main.jpg?1608804494"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9235/Christmast_%28layout_down%29-14_main.jpg?1608804500"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9236/Christmast_%28layout_down%29-15_main.jpg?1608804503"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9237/Christmast_%28layout_down%29-16_main_webp.webp?1608804509"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9357/Christmast_%28layout_down%29-17_main_webp.webp?1608805778"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9358/Christmast_%28layout_down%29-18_main_webp.webp?1608805785"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9359/Christmast_%28layout_down%29-19_main_webp.webp?1608805785"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9360/Christmast_%28layout_down%29-20_main_webp.webp?1608805792"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9361/Christmast_%28layout_down%29-21_main_webp.webp?1608805798"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9362/Christmast_%28layout_down%29-22_main_webp.webp?1608805799"/>
        </div>
        <div class="col-3">
            <img src="https://assets0.mirraw.com/frontpages/9363/Christmast_%28layout_down%29-23_main_webp.webp?1608805806"/>
        </div>
        <div class="col-3">
          <a href = '#'>
            <img src="https://assets0.mirraw.com/frontpages/9364/Christmast_%28layout_down%29-24_main_webp.webp?1608805806"/>
            <span class="textStyle">Dwaki</span>
          </a>
        </div>
    </div>
</section>
<section>
    <h2>BESTSELLER PRODUCTS</h2>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner"></div>
    <div class="row">
        <div class="col">
            <img src="https://assets0.mirraw.com/images/8756888/IMG_4816_small.jpg?1614442070"/>
        </div>
        <div class="col">
            <img src="https://assets0.mirraw.com/images/7001281/DZ18822_small.jpg?1557223344"/>
        </div>
        <div class="col">
            <img src="https://assets0.mirraw.com/images/7241770/image_small.jpeg?1564324410"/>
        </div>
        <div class="col">
            <img src="https://assets0.mirraw.com/images/2009504/612-Crepe_%281%29_small.jpg?1536651112"/>
        </div>
        <div class="col">
            <img src="https://assets0.mirraw.com/images/7241773/image_small.jpeg?1564324467"/>
        </div>
        <div class="col">
            <img src="https://assets0.mirraw.com/images/7020989/image_small.jpeg?1557736006"/>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>
    <h2>RECOMMENDED FOR YOU</h2>
    <div class="row">
        <div class="col">
            <img src="https://assets1.mirraw.com//images/7730486/image_small.jpeg?1578740478"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/7892200/image_small.jpeg?1582294276"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/8310136/image_small.jpeg?1600735314"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/8310140/image_small.jpeg?1600735351"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/8310124/image_small.jpeg?1600735202"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/8310128/image_small.jpeg?1600735240"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/8310132/image_small.jpeg?1600735277"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/8309984/image_small.jpeg?1600733964"/>
        </div>
        <div class="col">
            <img src="https://assets1.mirraw.com//images/8310004/image_small.jpeg?1600734143"/>
        </div>
    </div>
</section>
<section>
  <div>
    <h2></h2>
  </div>
</section>

    </div>

  );
}

export default App;
