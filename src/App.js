import './App.css';

function App() {
  return (
    <div>
      <div class="nav-header">
        <nav>
        <ul>
          <li><a href="#">Contact Us&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">7 Day Returns&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Track Order&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Return Order&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Sell On Mirraw&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">Survey&nbsp;&nbsp;&nbsp;</a></li>
          <li class="right-side"><a href=""><i class="fas fa-user-tie"></i><b> LOG IN</b>&nbsp;&nbsp;</a><a href="">&nbsp;&nbsp;<i class="fas fa-shopping-bag"></i> <b>&nbsp;CART(0)</b>&nbsp;&nbsp;</a></li>
        </ul>
        </nav>

    <div class="toggler">
    <nav class="navbar navbar-inverse">
    <div class="container-fluid" >
    <ul class="nav navbar-nav mx-auto">
    <li id="course" class="dropdown"><i class="fas fa-bars"></i><span class="caret"></span>
      <ul class="dropdown-menu">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">7 Day Returns</a></li>
        <li><a href="#">Track Order</a></li>
        <li><a href="#">Return Order</a></li>
        <li><a href="#">Sell On Mirraw</a></li>
        <li><a href="#">Survey</a></li>
      </ul>
    </li>
    </ul>
    </div>
    </nav>
    </div>

        <hr/>
        <label class="logo"><a href="#"><img src="data:image/png;base64,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"/></a></label>
        <div class="search-container">
            <form class="form-line">
              <input type="text" placeholder="Search for something!!!!" />
              <button type="submit" ><i class="fa fa-search"></i></button>
            </form>
          </div>
      </div>




  <section>  
    < nav class="navbar navbar-inverse">
    <div class="container-fluid" >
    <ul class="nav navbar-nav mx-auto">
      <li id="course" class="dropdown"><a href="">Sarees<span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">ROOTS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
          <li><a href="#">Baranasi Silk</a></li>
            <li><a href="#">Kanchipuram Silk</a></li>
            <li><a href="#">Bhagalpuri Silk</a></li>
            <li><a href="#">Mysore Silk</a></li>
            <li><a href="#">Manipuri Silk</a></li>
            <li><a href="#">Kota Silk</a></li>
            <li><a href="#">Bandhani</a></li>
            <li><a href="#">Nauvari</a></li>
            <li><a href="#">Patola</a></li>
            <li><a href="#">Jamdani</a></li>
            <li><a href="#">Maheshwari</a></li>
            <li><a href="#">Kerala Kasavu</a></li>
            <li><a href="#">Bengali</a></li>
            <li><a href="#">Uppada</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">FABRIC<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Georgette</a></li>
            <li><a href="#">Art Silk</a></li>
            <li><a href="#">Cotton</a></li>
            <li><a href="#">Pure silk</a></li>
            <li><a href="#">Net</a></li>
            <li><a href="#">Velvet</a></li>
            <li><a href="#">Chiffon</a></li>
            <li><a href="#">Brasso</a></li>
            <li><a href="#">Chanderi</a></li>
            <li><a href="#">Organza Sarees</a></li>
            <li><a href="#">Tussar Silk</a></li>
            <li><a href="#">Crepe</a></li>
            <li><a href="#">Bengali</a></li>
            <li><a href="#">Satin</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">OCCASION<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Party Wear</a></li>
            <li><a href="#">Wedding</a></li>
            <li><a href="#">Cotton</a></li>
            <li><a href="#">Pure silk</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">WORK<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Embriodered</a></li>
            <li><a href="#">Printed</a></li>
            <li><a href="#">Heavy Work</a></li>
            <li><a href="#">Sarees</a></li>
            <li><a href="#">Handloom Sarees</a></li>
            <li><a href="#">Hand Woven</a></li>
            <li><a href="#">Chikankari</a></li>
            <li><a href="#">Kalamkari</a></li>
            <li><a href="#">Ikat</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">COLLECTIONS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Exclusive</a></li>
            <li><a href="#">Bridal Sarees</a></li>
            <li><a href="#">Pre Stitched</a></li>
            <li><a href="#">Sarees</a></li>
            <li><a href="#">Half Sree</a></li>
            <li><a href="#">Traditional Sarees</a></li>
            <li><a href="#">South Indian Sarees</a></li>
            <li><a href="#">Bollywood Sarees</a></li>
            <li><a href="#">Best Sarees</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
    


        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">MORE<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Blouses</a></li>
            <li><a href="#">Readymade Blouse</a></li>
            <li><a href="#">Blouse Fabric</a></li>
            <li><a href="#">Sleeveless Blouse</a></li>
            <li><a href="#">Bridal Blouses</a></li>
            <li><a href="#">Petticoats</a></li>
            <li><a href="#">Blouse Neck</a></li>
            <li><a href="#">Designs</a></li>
          </ul>
        </li>
      </ul>
    </li>

    <li id="course" class="dropdown"><a href="">Lehengas<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">FABRIC<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Net</a></li>
            <li><a href="#">Silk</a></li>
            <li><a href="#">Georgette</a></li>
            <li><a href="#">Velvet</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">OCCASION<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Party Wear</a></li>
            <li><a href="#">Bridal</a></li>
            <li><a href="#">Casual</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">STYLE<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Ghagra Choli</a></li>
            <li><a href="#">Lehenga Choli</a></li>
            <li><a href="#">Crop Top</a></li>
            <li><a href="#">Readymade</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">COLLECTION<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Ethnic</a></li>
            <li><a href="#">Pakisthani</a></li>
            <li><a href="#">Lehenga Saree</a></li>
            <li><a href="#">Floral</a></li>
          </ul>
        </li>
      </ul>
    </li> 
    
    <li id="course" class="dropdown"><a href="">Salwar Kameez<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">STYLE<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Anarkali Suits</a></li>
            <li><a href="#">Straight Suits</a></li>
            <li><a href="#">Churidar Suits</a></li>
            <li><a href="#">Punjabi Suits</a></li>
            <li><a href="#">Dress Material</a></li>
            <li><a href="#">Abaya Suits</a></li>
            <li><a href="#">Pakisthani Suits</a></li>
            <li><a href="#">Palazzo Suits</a></li>
            <li><a href="#">Sharara Suits</a></li>
            <li><a href="#">Patiala Suits</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">FABRIC<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Cotton</a></li>
            <li><a href="#">Georgette</a></li>
            <li><a href="#">Chanderi</a></li>
            <li><a href="#">Silk</a></li>
            <li><a href="#">Net</a></li>
            <li><a href="#">Crepe</a></li>
            <li><a href="#">Cotton Silk</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">OCCASION<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Party Wear</a></li>
            <li><a href="#">Wedding Salwar</a></li>
            <li><a href="#">Festive</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">COLLECTION<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Combo Salwar</a></li>
            <li><a href="#">Ready to Ship</a></li>
            <li><a href="#">Collar Neck</a></li>
            <li><a href="#">Designs</a></li>
            <li><a href="#">Ethnic Suits</a></li>
            <li><a href="#">Bollywood</a></li>
            <li><a href="#">Salwars</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">STITCHING<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Readymade Suits</a></li>
            <li><a href="#">Semi Stitched</a></li>
            <li><a href="#">Suits</a></li>
          </ul>
        </li>
      </ul>
    </li> 

    <li id="course" class="dropdown"><a href="">Kurtis<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">FABRIC<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Silk</a></li>
            <li><a href="#">Chiffon</a></li>
            <li><a href="#">Georgette</a></li>
            <li><a href="#">Cotton</a></li>
            <li><a href="#">Rayon</a></li>
            <li><a href="#">Crepe</a></li>
            <li><a href="#">Chanderi</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">OCCASION<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Party Wear</a></li>
            <li><a href="#">Festive</a></li>
            <li><a href="#">Casual</a></li>
            <li><a href="#">Wedding</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">WORK<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Printed</a></li>
            <li><a href="#">Embriodered</a></li>
            <li><a href="#">Plain</a></li>
            <li><a href="#">Chikankari</a></li>
            <li><a href="#">Stone Work</a></li>
            <li><a href="#">Heavy Work</a></li>
            <li><a href="#">Mirror Work</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">STYLE<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Long</a></li>
            <li><a href="#">Traditional</a></li>
            <li><a href="#">Short</a></li>
            <li><a href="#">Contemporary</a></li>
            <li><a href="#">Kaftans</a></li>
            <li><a href="#">Kurta Sets</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">BOTTOM WEAR<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Palazzos</a></li>
            <li><a href="#">Harem Pants</a></li>
            <li><a href="#">Leggings</a></li>
            <li><a href="#">Patiala Pants</a></li>
            <li><a href="#">Skirts</a></li>
            <li><a href="#">Leggings Combo</a></li>
          </ul>
        </li>
      </ul>
    </li>  

    <li id="course" class="dropdown"><a href="">Jewellery<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">TYPE<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Necklace sets</a></li>
            <li><a href="#">Necklaces</a></li>
            <li><a href="#">Bangles and Bracelets</a></li>
            <li><a href="#">Earrings</a></li>
            <li><a href="#">Anklets</a></li>
            <li><a href="#">Pendants</a></li>
            <li><a href="#">Silk Thread</a></li>
            <li><a href="#">Jewellery</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">WORK<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Template Jewellery</a></li>
            <li><a href="#">Antique Jewellery</a></li>
            <li><a href="#">Kundan Jewellery</a></li>
            <li><a href="#">South Indian Jewellery</a></li>
            <li><a href="#">Pearl Jewellery</a></li>
            <li><a href="#">Handmade Jewellery</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">WEDDING<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Bridal Jewellery</a></li>
            <li><a href="#">Bridal sets</a></li>
            <li><a href="#">Mangalsutra</a></li>
            <li><a href="#">Maang Tika</a></li>
            <li><a href="#">Rings</a></li>
            <li><a href="#">Toe Rings</a></li>
            <li><a href="#">Nose Rings</a></li>
            <li><a href="#">Baju Band</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">FEATURED<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Silk Thread</a></li>
            <li><a href="#">Earrings</a></li>
            <li><a href="#">Brooch Silk Thread</a></li>
            <li><a href="#">Bangles</a></li>
            <li><a href="#">Studs</a></li>
            <li><a href="#">Jhumkas</a></li>
            <li><a href="#">Choker Necklace</a></li>
            <li><a href="#">Danglers & Drops</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">COLLECTIONS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Gemstones</a></li>
            <li><a href="#">Ear Cuffs</a></li>
            <li><a href="#">Designer</a></li>
            <li><a href="#">Jewellery</a></li>
            <li><a href="#">Hair Accessories</a></li>
            <li><a href="#">Oxidised</a></li>
            <li><a href="#">Jewellery</a></li>
            <li><a href="#">Jewellery Box</a></li>
            <li><a href="#">Ethnic Jewellery</a></li>
          </ul>
        </li>
      </ul>
    </li>

    <li id="course" class="dropdown"><a href="">Kids<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">GIRLS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Lehange</a></li>
            <li><a href="#">Salwar Suits</a></li>
            <li><a href="#">Gowns</a></li>
            <li><a href="#">Sarees</a></li>
            <li><a href="#">Frocks</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Girl Jackets</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">BOYS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Kurta Pyjamas</a></li>
            <li><a href="#">Indo Western</a></li>
            <li><a href="#">Sherwani</a></li>
            <li><a href="#">Dhoti Kurta</a></li>
            <li><a href="#">Nehru Jacket</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">COLLECTIONS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Jewellery</a></li>
          </ul>
        </li>
      </ul>
    </li> 


    <li id="course" class="dropdown"><a href="">Men<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">CLOTHING<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Kurta Pyjama</a></li>
            <li><a href="#">Dhoti Kurta</a></li>
            <li><a href="#">Nehru Jacket</a></li>
            <li><a href="#">Kurtas</a></li>
            <li><a href="#">Blazers</a></li>
            <li><a href="#">Sherwani</a></li>
            <li><a href="#">Pathani Suits</a></li>
            <li><a href="#">Bandhgala</a></li>
            <li><a href="#">Dhoti</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">JEWELLERY<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Earrings</a></li>
            <li><a href="#">Studs</a></li>
            <li><a href="#">Bracelets</a></li>
            <li><a href="#">Pendants</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">ACCESSORIES<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Turbans</a></li>
            <li><a href="#">Cufflinks</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">FOOTWEAR<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Casual</a></li>
          </ul>
        </li>
      </ul>
    </li> 

    <li id="course" class="dropdown"><a href="">Home & Living<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">BEDDING<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Bed Sheets</a></li>
            <li><a href="#">Quilts</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">FURNISHING<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Curtains</a></li>
            <li><a href="#">Cushion Covers</a></li>
            <li><a href="#">Carpets</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">DECOR<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Idols & Figuriness</a></li>
            <li><a href="#">Vases</a></li>
            <li><a href="#">Candles & Aromas</a></li>
            <li><a href="#">Diyas</a></li>
            <li><a href="#">Door Hangings</a></li>
            <li><a href="#">Pooja Items</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">WALL ACCENTS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Painters</a></li>
            <li><a href="#">Wall Clocks</a></li>
            <li><a href="#">Wall Art</a></li>
            <li><a href="#">Photo Frames</a></li>
            <li><a href="#">Decorative Plates</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">KITCHEN & DINING<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Cookware</a></li>
            <li><a href="#">Utensils</a></li>
            <li><a href="#">Table Mats & Runner</a></li>
            <li><a href="#">Coasters</a></li>
            <li><a href="#">Trays</a></li>
          </ul>
        </li>
      </ul>
    </li> 


    <li id="course" class="dropdown"><a href="">LUXE<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">WOMENSWEAR<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Kurtis</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Sarees</a></li>
            <li><a href="#">Salwar Suits</a></li>
            <li><a href="#">Tops</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">BRANDS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Ritu Kumar</a></li>
            <li><a href="#">Payal Singhal</a></li>
            <li><a href="#">August Line</a></li>
            <li><a href="#">Sole House</a></li>
            <li><a href="#">Anju & Harleen</a></li>
            <li><a href="#">Mayank Modi</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">OTHERS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Footwear</a></li>
          </ul>
        </li>
      </ul>
    </li> 


    <li id="course" class="dropdown"><a href="">CELEBRITIES<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">WOMENSWEAR<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Anu Mishra</a></li>
            <li><a href="#">Richa Shahii</a></li>
          </ul>
        </li>
      </ul>
    </li> 


    <li id="course" class="dropdown"><a href="">COLLECTIONS<span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li id="sub-dropdown" class="dropdown"><a href="#">ROOTS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Sarees</a></li>
            <li><a href="#">Kurtas & Suits</a></li>
            <li><a href="#">Dress Material</a></li>
            <li><a href="#">Blouses</a></li>
            <li><a href="#">Dupattas</a></li>
            <li><a href="#">Bottoms</a></li>
            <li><a href="#">Jewellery</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">WESTERN WEAR<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Tops</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Tunics</a></li>
            <li><a href="#">Gowns</a></li>
            <li><a href="#">Indowestern</a></li>
            <li><a href="#">Palazzos</a></li>
            <li><a href="#">Leggings</a></li>
            <li><a href="#">Skirts</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">ACCESSORIES<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Stoles and Dupattas</a></li>
            <li><a href="#">Shawls</a></li>
            <li><a href="#">Bags</a></li>
            <li><a href="#">Footwear</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">BEAUTY<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Makeup</a></li>
            <li><a href="#">Face Care</a></li>
            <li><a href="#">Hair Care </a></li>
            <li><a href="#">Body Care</a></li>
            <li><a href="#">Female Hygiene</a></li>
            <li><a href="#">Personal Hygiene</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">FOOD<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Packaged Food</a></li>
            <li><a href="#">Beverages</a></li>
            <li><a href="#">Baby Food</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">ISLAMIC<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Abaya</a></li>
            <li><a href="#">Hijab</a></li>
            <li><a href="#">Burka</a></li>
            <li><a href="#">Tunics</a></li>
            <li><a href="#">Kaftans</a></li>
            <li><a href="#">Kids Abaya</a></li>
          </ul>
        </li>
        <li id="sub-dropdown" class="dropdown"><a href="#">COMBOS<span class="glyphicon glyphicon-chevron-right"></span></a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">Sarees</a></li>
            <li><a href="#">Dress Material</a></li>
            <li><a href="#">Kurtis</a></li>
            <li><a href="#">Jewellery</a></li>
            <li><a href="#">Leggings</a></li>
            <li><a href="#">Patiala Pants</a></li>
          </ul>
        </li>
      </ul>
    </li> 


    </ul>
    </div>
  </nav>

      </section>

      <section>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="2000" data-pause="hover">
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
        <div class="row allLevelImages">
        <a href="#"><img src="https://i.postimg.cc/gjXBkWwQ/sarees.jpg" class="sarees" /></a>
        <a href="#"><img src="https://i.postimg.cc/rw67sKNJ/cover.jpg" class="cover" /></a>
        <a href="#"><img src="https://i.postimg.cc/SsKv38my/kurta-sets.jpg" class="kurta" /></a>
        <a href="#"><img src="https://i.postimg.cc/k4M0CzvP/anarkali-suits.jpg" class="anarkali"/></a>
        <a href="#"><img src="https://i.postimg.cc/Y2vpmLQK/lehenga.png" class="lehenga" /></a>
        <a href="#"><img src="https://i.postimg.cc/26XKD65n/necklace-sets.jpg" class="necklace_sets" /></a>
        <a href=""><img src="https://i.postimg.cc/TY5ZTrg1/kidsw-ear.jpg" class="kidswear" /></a>
        <a href="#"><img src="https://i.postimg.cc/8CN3d93f/mensw-ear.jpg" class="menswear" /></a>
        <a href="#"><img src="https://i.postimg.cc/WzCCM3Ls/earrings.jpg" class="earrings" /></a>
        <a href="#"><img src="https://i.postimg.cc/pdCSskbG/home-decor.jpg" class="home_decor" /></a>
        <a href="#"><img src="https://i.postimg.cc/4ymj7c08/bags.jpg" class="bags" /></a>
        <a href="#"><img src="https://i.postimg.cc/tJKvsMWT/roots-of-india.jpg" class="roots_of_india" /></a>
        <a href="#"><img src="https://i.postimg.cc/XYwmC420/footwear.jpg" class="footwear" /></a>
        </div>
</section>
<section>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/gjXBkWwQ/sarees.jpg" class="m_sarees" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/rw67sKNJ/cover.jpg" class="m_cover" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/SsKv38my/kurta-sets.jpg" class="m_kurta" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/k4M0CzvP/anarkali-suits.jpg" class="m_anarkali"/></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/Y2vpmLQK/lehenga.png" class="m_lehenga" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/26XKD65n/necklace-sets.jpg" class="m_necklace_sets" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/TY5ZTrg1/kidsw-ear.jpg" class="m_kidswear" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/8CN3d93f/mensw-ear.jpg" class="m_menswear" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/WzCCM3Ls/earrings.jpg" class="m_earrings" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/pdCSskbG/home-decor.jpg" class="m_home_decor" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/4ymj7c08/bags.jpg" class="m_bags" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/tJKvsMWT/roots-of-india.jpg" class="m_roots_of_india" /></a>
  </div>
</div>

<div class="card">
  <div class="card-block">
    <a href="#"><img src="https://i.postimg.cc/XYwmC420/footwear.jpg" class="m_footwear" /></a>
  </div>
</div>

</section>


<section>
  <hr/>
  <div class="silks">

    <div class="row mt-3" id="first">
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img id="Banarasi" src="https://assets0.mirraw.com/frontpages/9222/Christmast_%28layout_down%29-01_main.jpg?1608803378"/></a>
              <a href="#"><div class="card-footer"><div class="box">Banarasi Silk</div></div></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9223/Christmast_%28layout_down%29-02_main.jpg?1608803384"/></a>
              <a href="#"><div class="card-footer">Bandhani</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9224/Christmast_%28layout_down%29-03_main.jpg?1608803387"/></a>
              <a href="#"><div class="card-footer">Kanchipuram Silk</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9225/Christmast_%28layout_down%29-04_main.jpg?1608803393"/></a>
              <a href="#"><div class="card-footer">Handloom Sarees</div></a>
            </div>
          </div>
        </div>
    </div>

    <div class="row mt-3" id="second">
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9226/Christmast_%28layout_down%29-05_main.jpg?1608803787"/></a>
              <a href="#"><div class="card-footer">Earrings</div></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9227/Christmast_%28layout_down%29-06_main.jpg?1608803794"/></a>
              <a href="#"><div class="card-footer">Necklace Sets</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9228/Christmast_%28layout_down%29-07_main.jpg?1608803796"/></a>
              <a href="#"><div class="card-footer">Bangles</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9229/Christmast_%28layout_down%29-08_main.jpg?1608803803"/></a>
              <a href="#"><div class="card-footer">Maang Tikka</div></a>
            </div>
          </div>
        </div>
    </div>

    <div class="row mt-3" id="three">
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9230/Christmast_%28layout_down%29-09_main.jpg?1608804204"/></a>
              <a href="#"><div class="card-footer">Roots Of India</div></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9231/Christmast_%28layout_down%29-10_main.jpg?1608804212"/></a>
              <a href="#"><div class="card-footer">Palazzo Silks</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9232/Christmast_%28layout_down%29-11_main.jpg?1608804220"/></a>
              <a href="#"><div class="card-footer">Straight Suits</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9233/Christmast_%28layout_down%29-12_main.jpg?1608804225"/></a>
              <a href="#"><div class="card-footer">Beauty Essentials</div></a>
            </div>
          </div>
        </div>
    </div>    


    <div class="row mt-3" id="four">
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9234/Christmast_%28layout_down%29-13_main.jpg?1608804494"/></a>
              <a href="#"><div class="card-footer">Bags</div></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9235/Christmast_%28layout_down%29-14_main.jpg?1608804500"/></a>
              <a href="#"><div class="card-footer">Footwear</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9236/Christmast_%28layout_down%29-15_main.jpg?1608804503"/></a>
              <a href="#"><div class="card-footer">Stoles and Dupattas</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9237/Christmast_%28layout_down%29-16_main_webp.webp?1608804509"/></a>
              <a href="#"><div class="card-footer">Westernwear</div></a>
            </div>
          </div>
        </div>
    </div>

    <div class="row mt-3" id="fifth">
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9357/Christmast_%28layout_down%29-17_main_webp.webp?1608805778"/></a>
              <a href="#"><div class="card-footer">Libas</div></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9358/Christmast_%28layout_down%29-18_main_webp.webp?1608805785"/></a>
              <a href="#"><div class="card-footer">Shaily</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9359/Christmast_%28layout_down%29-19_main_webp.webp?1608805785"/></a>
              <a href="#"><div class="card-footer">Jaipur Kurti</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9360/Christmast_%28layout_down%29-20_main_webp.webp?1608805792"/></a>
              <a href="#"><div class="card-footer">Juniper</div></a>
            </div>
          </div>
        </div>
    </div>

    <div class="row mt-3" id="sixth">
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9361/Christmast_%28layout_down%29-21_main_webp.webp?1608805798"/></a>
              <a href="#"><div class="card-footer">Classicate From The House Of Chennai</div></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9362/Christmast_%28layout_down%29-22_main_webp.webp?1608805799"/></a>
              <a href="#"><div class="card-footer">Ritu Kumar</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9363/Christmast_%28layout_down%29-23_main_webp.webp?1608805806"/></a>
              <a href="#"><div class="card-footer">Rina Dhika</div></a>
            </div>
          </div>
        </div><div class="col-md-3 col-sm-12">
          <div class="card">
            <div class="card-block">
              <a href="#"><img src="https://assets0.mirraw.com/frontpages/9364/Christmast_%28layout_down%29-24_main_webp.webp?1608805806"/></a>
              <a href="#"><div class="card-footer">Payal Singhal</div></a>
            </div>
          </div>
        </div>
    </div>
    

  </div>
</section>



<section>
  <hr/>
  <h3>BESTSELLER PRODUCTS</h3>
  <div class="stationary-zoomer">
  <div class="card"><div class="card-block">
  <div class="zoom"><a href='#'><img src="https://assets0.mirraw.com/images/8756888/IMG_4816_small.jpg?1614442070"/></a></div>
  </div></div>
  <div class="card"><div class="card-block">
  <div class="zoom"><a href='#'><img src="https://assets0.mirraw.com/images/7020989/image_small.jpeg?1557736006"/></a></div>
  </div></div>
  <div class="card"><div class="card-block">
  <div class="zoom"><a href='#'><img src="https://assets0.mirraw.com/images/7241770/image_small.jpeg?1564324410"/></a></div>
  </div></div>
  <div class="card"><div class="card-block">
  <div class="zoom"><a href='#'><img src="https://assets0.mirraw.com/images/2009504/612-Crepe_%281%29_small.jpg?1536651112"/></a></div>
  </div></div>
  <div class="card"><div class="card-block">
  <div class="zoom"><a href='#'><img src="https://assets0.mirraw.com/images/7241773/image_small.jpeg?1564324467"/></a></div>
  </div></div>
  </div>
  <hr/>
</section>


<section>
<h3>RECOMMENDED FOR YOU</h3>
  <div class="zoom-container">
    <div class="row">
      <div class="col-md-12">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000" data-pause="hover">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img class="zoom" src="https://assets1.mirraw.com//images/2028195/6_small.jpg?1458730479"/></div>
              <div class="img-text">
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img src="https://assets1.mirraw.com//images/4087304/WHBL_042016_small.jpg?1533196566"/></div>
              <div class="img-text">
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img src="https://assets1.mirraw.com//images/6122163/BlueSunFlower_small.jpg?1533198140"/></div>
              <div class="img-text">
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img src="https://assets1.mirraw.com//images/6351053/image_small.jpeg?1537005567"/></div>
              <div class="img-text">
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="carousel-item">
        <div class="row">
          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img src="https://assets1.mirraw.com//images/5584701/image_small.jpeg?1538407236"/></div>
              <div class="img-text">
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img src="https://assets1.mirraw.com//images/6153006/Peach_grey_Lehenga_small.jpg?1533198181"/></div>
              <div class="img-text">
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img src="https://assets1.mirraw.com//images/6153036/Blue_Jequard_Flower_small.jpg?1544518864"/></div>
              <div class="img-text">
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="single-box">
              <div class="img-area"><img src="https://assets1.mirraw.com//images/6491292/VP007084%281%29_small.jpg?1539763185"/></div>
              <div class="img-text">
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




<section>
<form>
<div class="history">
<h2>Indian Clothing Online Shopping for Women &amp; Men</h2>
<p>During 2500 BC, India became one of the first places to grow and use cotton for making clothes. Human art forms in Indian temples and monuments are perhaps the main source of information on Indian clothing. Apart from that the rock-cut sculptures, the cave paintings, and remains from the sites of Indus Valley civilization also give a detailed bureau of clothing trends in India.</p>
<p>A large majority of Indian clothing for men and women has evolved from garments like langota, lungi, sari, gamcha, and dhoti. India is the second most populous country in the world and it shows great diversity in its population as well. Clothing in India is greatly influenced by the religion people follow.</p>
<p>The most notable ethnic apparel for men in India is the kurta pyjama. The <a href="#"><strong>sherwani</strong></a> is an iteration of the kurta pyjama and is mainly worn during the wedding. However, the kurta pyjama is an iteration of the jama dhoti which was worn by men India in the 19th century. It is still worn regularly by men in rural areas and occasionally by men in urban areas during festive occasions.</p>
<p>Apart from the <a href="#"><strong>dhoti</strong></a>, ethnic Indian wear also consists of the sarong which is more commonly known as the lungi. It is a piece of cloth that men drape around the waist and tie it. It is usually worn by Muslim men. But a large majority of men in South and East India can be seen sporting the lungi. It comes in different patterns and colors but the length of the cloth is usually constant.</p>
<p>The sherwani is another Indian ethnic wear. The ethnic name of this garment is achkan. It is essentially a kurta made in the form of a jacket with exposed button, heavy embroidery and needlework. The sherwani flows just below the knees and is usually paired with pants called churidar. As a matter of fact, churidars are also worn by Indian women.</p>
<p>The bandhgala is an iteration of the sherwani. Bandh means closed and gala means neck. The name suggests that the garment sports a closed neck design or what many people like to call as the mandarin collar design. This garment hails from the royal land of Jodhpur. The pants worn with this are baggy throughout the hip and thigh region and grasp the legs tightly. This Indian ethnic wear gain popularity quickly and a large majority of men wear this outfit during festivals, weddings, and special occasions</p>
<p>Sarees are indeed the most popular <a href="#"><strong>Indian ethnic wear</strong></a> for women. A saree is basically a long piece of cloth, usually around 10 meters long which is draped around the body in a variety of different styles.  Different regions have a special type of saree, for example, Kanchipuram from South India, Paithani from Maharashtra, Benarasi from North India, and Muga Silk from Assam. A blouse is worn with the saree which is called the choli.</p> 
<p>The <a href="#"><strong>saree</strong></a> is very popular in all parts of India and so is the salwar kameez. The kameez is basically a kurti and the salwar is the lower garment. It is traditionally worn by women in Punjab and hence, it is also sometimes referred to as the Punjabi Suit. There are different iterations of the salwar kameez. The Anarkali suit, palazzo suit, Patiala suit etc. are some of the different kinds of suits available.  Dupatta is worn along with salwar kameez. It is called the odani in some parts of India and is mainly used to veil the head in the presence of elders.
Change in fashion trends has bought in various types of <a href="#"><strong>salwars</strong></a> like dhoti salwar, churidars, Patiala salwars, Afghani Salwars, Palazzo and so on.</p> 
<h2>Traditional Clothing of India</h2>
<p>Traditional Indian clothing depends largely on the religious group that people follow. Followers of Islam probably have the most distinct outfits. Islam guides that men and women must dress modestly. <a href="/islamic-clothing"><strong>Islamic clothing</strong></a> is all about modesty. Both men and women have certain rules on what they can wear and what they can’t. One distinctive feature of the Islamic pant is that they are airy and comfortable.</p>
<p>Serwal is one of the most prevalent pant types in Muslim culture. A large majority of Muslim men have at least 1 serwal in their wardrobe. The serwal is made from cotton and is mostly worn beneath the thobe. Men can also pair it with a white shirt. The serwal also doubles down as a pyjama. It is very comfortable and can be worn easily at home. It is available in the elastic waist, drawstring waist, or a combination of both. In Islamic culture, the serwal is better known as mikasser.</p>
<p>Muslim men also wear the izar which is an iteration of the lungi/sarong. For Muslim women, the burka, <a href="/islamic-clothing/hijab"><strong>hijab</strong></a> and abaya are staples. The hijab is a cloth which is used to cover the head, the abaya is a free-flowing cloak from head to toe and the burka covers the head and the chest region. Men and women that follow Hinduism wear kurta pyjama and sarees mainly. Regional diversity also comes into play when talking about <a href="/women/clothing/indian-dresses"><strong>traditional Indian clothing</strong></a>.</p> 
<p>Therefore, the Indian clothing history is very rich and the future of Indian fashion also looks pretty bright with all the fashion designers around. Get the fashion trend outfits at Mirraw <a href="/"><strong>online shopping</strong></a> site with amazing options and cool price</p>
</div>
</form>
</section>
<section>
    <h4>SIGN UP TO RECEIVE OUR UPDATES</h4>
    <h6><i>Be the first to know about latest offers and discounts on Mirraw</i></h6>
    <div class="subscribe-container">
            <form class="form-line">
              <input type="text" placeholder="Enter your Email Address" />
              <button type="submit">SUBSCRIBE!</button>
            </form>
    </div>
</section>
    
<section>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner" id="testimony">
    <div class="one carousel-item active">
    <div class="start"><i class="fas fa-quote-left"></i></div>
    <div><p>Mirraw was superfast. I ordered on 26th Dec and today (28th Dec) I got the product. I Ordered Victorian Double Tokri Kashmiri Earring. The design and specially the color of the stones was perfectly the same. Moreover, It looks amazingly beautiful with my Royal Blue and Pink Benarasi Saree. Very happy with the service. Keep it up Mirraw ! All the Best ! -</p>
      <h5>Suranjeeta Das, New Delhi </h5>
    </div>
    <div class="end"><i class="fas fa-quote-right"></i></div>
    </div>
    <div class="two carousel-item">
    <div class="start"><i class="fas fa-quote-left"></i></div>
    <div><p>I'd like to take this opportunity to let you know that I am very happy with your customer service. I had an issue with a damaged piece and it was dealt with efficiently. I received the temple set and others in my order and I am extremely happy with your professionalism. All items were very well made and worth the money. Keep up the good work. - </p>
      <h5>Anjana Das, Tennessee, USA </h5>
    </div>
    <div class="end"><i class="fas fa-quote-right"></i></div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</section>



<footer class="page-footer">

    <div class="container text-center text-md-left mt-5">
        <div class="row">
          
          <div class="col-md-2 col-sm-12 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold" id="help">Help</h6>
            <ul class="help list-unstyled" id="ul_help">
              <li class="my-2 color:light"><a href="#">Survey</a></li>
              <li class="my-2"><a href="#">How To Buy</a></li>
              <li class="my-2"><a href="#">Track Order</a></li>
              <li class="my-2"><a href="#">Payments</a></li>
              <li class="my-2"><a href="#">Shipping</a></li>
              <li class="my-2"><a href="#">Cancellation</a></li>
              <li class="my-2"><a href="#">FAQs</a></li>
              <li class="my-2"><a href="#">Helpdesk</a></li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-12 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold" id="company">Company</h6>
            <ul class="list-unstyled" id="ul_company">
              <li class="my-2"><a href="#">About Us</a></li>
              <li class="my-2"><a href="#">Contact Us</a></li>
              <li class="my-2"><a href="#">Careers</a></li>
              <li class="my-2"><a href="#">Blog</a></li>
              <li class="my-2"><a href="#">Terms</a></li>
              <li class="my-2"><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-12 mx-4 mb-4">
            <h6 class="text-uppercase font-weight-bold" id="business">Business</h6>
            <ul class="list-unstyled" id="ul_business">
              <li class="my-2"><a href="#">International Buyers</a></li>
              <li class="my-2"><a href="#">Sell On Mirraw</a></li>
              <li class="my-2"><a href="#">Designer Login</a></li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-12 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Coupon Partners</h6>
            <ul class="list-unstyled">
              <li class="my-2"><a href="#">Mirraw Coupons</a></li>
              <li class="my-2"><a href="#">Mirraw Offers</a></li>
            </ul>
            <h6 class="text-uppercase font-weight-bold" id="social">Social</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#"><i class="fab fa-twitter-square"></i></a>    
                <a class="logo" href="#"><i class="fab fa-facebook-square"></i></a>
                <a class="logo" href=""><i class="fab fa-instagram-square"></i></a>
                <a class="logo" href="#"><i class="fab fa-google-play"></i></a>
                <a class="logo" href="#"><i class="fab fa-app-store-ios"></i></a>
                <a class="logo" href="#"><i class="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-12 mx-4 mb-4">
            <h6 class="text-uppercase font-weight-bold">Press</h6>
            <div class="row" id="sponsors">
              <div class="col" id="dna"><a href="#"><img src="https://www.mirraw.com/assets/dna-be0b711232e819d1dfeb542296bf4d56c80cd17c41badb9494300cffe4fe9cf5.png"/></a></div>
              <div class="col" id="story"><a href="#"><img src="https://www.mirraw.com/assets/yourstory-af15b2ddcc71a01016c6b879d665af554375ace702d94eaa48d0b2210834e0d4.png"/></a></div>
            </div>
            <div class="row" id="sponsors">
              <div class="col" id="payu"><a href="#"><img src="https://www.mirraw.com/assets/payu-a31ef1db3817ade015c5ad386da4b2211b82dbebcad90964c58e4b7dc889b255.png"/></a></div>
              <div class="col" id="paypal"><a href="#"><img src="https://www.mirraw.com/assets/paypal-449cce1c328ad3e821e482a3795a336b4659a62c892eddb7f5dd095eb5d42a16.png"/></a></div>
            </div>
          </div>

        </div>
    </div>

    <div class="footer-copyright text-center py-2">
      <p>Copyright&copy;2021, Mirraw Online Services Pvt. Ltd. All Rights Reserved.</p>
    </div>
</footer>

         </div>
  );
}

export default App;
