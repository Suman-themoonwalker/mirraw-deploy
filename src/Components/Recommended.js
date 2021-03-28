import React,{Component} from 'react';
export class Recommended extends Component{
    render(){
        return(
    <section>
<h3>RECOMMENDED FOR YOU</h3>
  <div className="zoom-container">
    <div className="row">
      <div className="col-md-12">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2000" data-pause="hover">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row">
          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img className="zoom" src="https://assets1.mirraw.com//images/2028195/6_small.jpg?1458730479"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img src="https://assets1.mirraw.com//images/4087304/WHBL_042016_small.jpg?1533196566"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img src="https://assets1.mirraw.com//images/6122163/BlueSunFlower_small.jpg?1533198140"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img src="https://assets1.mirraw.com//images/6351053/image_small.jpeg?1537005567"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="carousel-item">
        <div className="row">
          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img src="https://assets1.mirraw.com//images/5584701/image_small.jpeg?1538407236"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img src="https://assets1.mirraw.com//images/6153006/Peach_grey_Lehenga_small.jpg?1533198181"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img src="https://assets1.mirraw.com//images/6153036/Blue_Jequard_Flower_small.jpg?1544518864"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="single-box">
              <div className="img-area"><img src="https://assets1.mirraw.com//images/6491292/VP007084%281%29_small.jpg?1539763185"/></div>
              <div className="img-text">
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <hr/>
</section>

        );
    }
}