
// Ana sayfa bileşeni
import React from "react";
import "./HomePage.css";
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPizzaSlice,
  FaHamburger,
} from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiFrenchFries } from "react-icons/gi";
import { CiPizza } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";

// Ana sayfa bileşeni olan HomePage
const HomePage = () => {
  return (
    <div className="Top">
      <div className="Main">
        <h1>
          Teknolojik Yemekler <br></br> Kod Acıktırır<br></br>Pizza, Doyurur
        </h1>

        <br></br>

        <div />

        <div />
        
        
        <div className="topbutton">  
          <Link to="/pizza">
            <button id="order-pizza">ACIKTIM</button>
          </Link>
        </div>
      </div>
      <div className="socialtop">  
        <FaPizzaSlice></FaPizzaSlice> 
        <IoFastFoodOutline></IoFastFoodOutline>
        <GiFrenchFries></GiFrenchFries>
        <FaHamburger></FaHamburger>
        <CiPizza></CiPizza>
        <MdOutlineFastfood></MdOutlineFastfood>
      </div>
      <div className="mid">
        <Card
          style={{
            width: "25rem",
          }}
        >
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/kart-1.png`}
          />

          <CardBody>
            <CardTitle tag="h5">Özel Lezzetus</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Position : Absolute Acılı Pizzza
            </CardSubtitle>
            <CardText>Kendine Güvenenlerin Seçimi</CardText>
            <Link to="/pizza">
              <Button> Sipariş Ver</Button>
            </Link>
          </CardBody>
        </Card>
        <div className="twoside">
          <Card
            style={{
              width: "25rem",
            }}
          >
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/kart-2.png`}
            />

            <CardBody>
              <CardTitle tag="h5">Haccathlon</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Burger Menü
              </CardSubtitle>
              <CardText>Ağzının Tadını Bilenlere Enfes Bir Burger</CardText>
              <Link to="/pizza">
                <Button> Sipariş Ver</Button>
              </Link>
            </CardBody>
          </Card>

          <Card
            style={{
              width: "25rem",
            }}
          >
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/kart-3.png`}
            />

            <CardBody>
              <CardTitle tag="h5">Çoookkkk Hızlı</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Npm gibi kurye
              </CardSubtitle>
              <CardText>En Geç 30dk'da Siparişin Kapında</CardText>
              <Link to="/pizza">
                <Button> Sipariş Ver</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="footertop">
        <h3>En Çok Paketlenen Menüler </h3>
        <h2>Acıktıran Kodlarla Doyuran Lezzetler </h2>
        <div className="socialbot">
          <FaPizzaSlice></FaPizzaSlice>
          <IoFastFoodOutline></IoFastFoodOutline>
          <GiFrenchFries></GiFrenchFries>
          <FaHamburger></FaHamburger>
          <CiPizza></CiPizza>
          <MdOutlineFastfood></MdOutlineFastfood>
        </div>
      </div>

      <div className="footerbot">
        <Card
          style={{
            width: "25rem",
          }}
        >
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/food-1.png`}
          />

          <CardBody>
            <CardTitle tag="h5">Terminal Pizza</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>4.8 &nbsp; (200) &nbsp; 60 TL</CardText>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "25rem",
          }}
        >
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/food-2.png`}
          />

          <CardBody>
            <CardTitle tag="h5">Position Absolute Acılı Pizza</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>4.9 &nbsp; (250) &nbsp; 85.50 TL</CardText>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "25rem",
          }}
        >
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/food-3.png`}
          />

          <CardBody>
            <CardTitle tag="h5">useEffect Tavuklu Burger</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>4.5 &nbsp; (250) &nbsp; 68 TL</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="comcontainer">
        <div className="comminication">
          <h2>Teknolojik Yemekler </h2>
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/icon-1.png`}
          />
          <p>
            {" "}
            341 londarary road, <br></br> İstanbul/Türkiye{" "}
          </p>
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/icon-2.png`}
          />
          <p>acıktım@teknolojikyemekler.com </p>
          <img
            alt="Sample"
            src={`${process.env.PUBLIC_URL}/tasinan/icon-3.png`}
          />
          <p>+90 216 784 25 36</p>
        </div>
        <div className="menuıtem">
          <h2>Sıcacık Menüler</h2>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Pizza</p>
          <p>Absolute Pizza</p>
          <p> Hungry Burger </p>
          <p>Tavuklu Burger </p>
          <p> Patatas Kızartması</p>
        </div>
        <div className="insta">
          <h2>İnstagram</h2>
          <div className="instatop">
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-0.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-1.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-2.png`}
            />
          </div>
          <div className="instabot">
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-3.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-4.png`}
            />
            <img
              alt="Sample"
              src={`${process.env.PUBLIC_URL}/tasinan/insta/li-5.png`}
            />
          </div>
        </div>
      </div>
      <div className="footersbot">
        <p> @Teknolojik Yemekler 2023</p>
        <div className="social">
          <FaTwitter />
          <FaFacebook></FaFacebook>
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
