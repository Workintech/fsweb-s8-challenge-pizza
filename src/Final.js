// Sipariş tamamlama sayfası
import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import axios from 'axios';
import { Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';


const Final = () => {
    const [ setData] = useState(null);
    
 // POST isteği yapma fonksiyonu
    function makePostRequest() {
        axios
          .post('https://reqres.in/api/orders')
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      
    return (
        
      
        <div className="EndTop">
            <div>
        <button onClick={makePostRequest}>POST Request Yap</button>
        
      
      </div>
            <div className="enduse">
            <Link to="/">
        <h1>Teknolojik Yemekler</h1>
        </Link>
       <h3> Lezzetin Yolda </h3> 
        </div>
       
        <div className="end" >
        <h1>   Siparişiniz Alındı! </h1>
        <h3>Position Absolute Acılı Pizza </h3>
        <ul> 
          <li> Boyut: L  </li>
          <li> Hamur: Süper İnce  </li>
          <li> Pepperoni, <br></br>Sosis,Salam,Mısır <br></br> Ananas </li>
           </ul>
        </div>
        <div className="hesap">
        
<Card
  style={{
    width: '18rem'
  }}
>
<div className="bodycard"> 
  <CardBody>
    <CardTitle >
    Sipariş Toplamı
    </CardTitle>
    <CardSubtitle
   
    >
      
    </CardSubtitle>
    <CardText>
      Seçimler:    25TL
      <br></br>
      Toplam:       110.50tl
    </CardText>
    
  </CardBody>
  </div>
</Card>
</div>
          
          
          
        </div>
    );
  };
  
  export default Final;