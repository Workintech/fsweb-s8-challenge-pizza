import "./FormSection.css";
import * as Yup from "yup";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { useHistory } from "react-router-dom";
const boyut = ["Küçük", "Orta", "Büyük"];
const dougthType = ["Kalın", "Normal", "İnce"];

const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
  "Mantar"
];

const initialObject = {
  size: "",
  dough: "",
  malzemeler: [],
  material0: false,
  material1: false,
  material2: false,
  material3: false,
  material4: false,
  material5: false,
  material6: false,
  material7: false,
  material8: false,
  material9: false,
  material10: false,
  material11: false,
  material12: false,
  material13: false,
  name: "",
  personal: "",
};

const initialObjectError = {
  size: "",
  dough: "",
  malzemeler: [],
  material0: false,
  material1: false,
  material2: false,
  material3: false,
  material4: false,
  material5: false,
  material6: false,
  material7: false,
  material8: false,
  material9: false,
  material10: false,
  material11: false,
  material12: false,
  material13: false,
  name: "",
  personal: "",
};

const Section = () => {
  const [product, setProduct] = useState(initialObject);
  const [formErrors, setFormErrors] = useState(initialObjectError);
  const [formValid, setFormValid] = useState(false);
  const history=useHistory()
  const formSchema = Yup.object().shape({
    name: Yup.string().min(2, "İsim en az 2 karakter olmalıdır"),
    malzemeler: Yup.array().max(10, "10 dan fazla ek malzeme seçemezsiniz.").min(4," Yukarıdan en az 4 ek malzeme seçmelisiniz. "),
    size:Yup.string(),
    dough:Yup.string(),
    personal:Yup.string()
  });

  const handlerChange = (e) => {
    const { name, type, checked, value } = e.target;
    const inputVal = type === "checkbox" ? checked : value;
    
     if (name === "malzemeler") {
       const newMalzemeler = checked ? [...product.malzemeler, value] : product.malzemeler.filter(m => m !== value) ;
       setProduct({...product, malzemeler: newMalzemeler })

       Yup.reach(formSchema, name)
       .validate(newMalzemeler)
       .then((valid) => {
         setFormErrors({ ...formErrors, [name]: "" });
       })
       .catch((err) => {
         setFormErrors({ ...formErrors, [name]: err.errors[0] });
       });
     }
    else{
      setProduct({ ...product, [name]: inputVal });

      Yup.reach(formSchema, name)
      .validate(type === "checkbox" ? checked : value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    }
      
  };

  useEffect(() => {
    //console.log("product form data > ", product)
    formSchema.isValid(product).then((valid) => setFormValid(valid));
  }, [product]);


  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("data:", product);
    axios
      .post("https://reqres.in/api/users", product)
      .then((res) => {
        console.log("data:", res.data);
        console.log("<<<<<<<<<<<<Sipariş Özeti>>>>>>>>>>", "  Pizza Adı:",res.data.name,"  Boyut:",res.data.size,
        "  Hamur:",res.data.dough,"  Malzemeler:",res.data.malzemeler," Notlar:",res.data.personal);
      })
      .catch((err) => {
        console.warn("eror", err.message);
      });
      history.push("/result")
  };
   
  return (
    <div className="section">
      <h4 className="pizzaName">Position Absolute Acı Pizza</h4>

      <div className="nameAndStock">
        <p className="price">85.50₺</p>
        <div className="puan">
          {" "}
          <p>4.9</p> <p className="stock">(200)</p>
        </div>
      </div>
      <p className="about">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>

      <Form id="pizza-form" onSubmit={handlerSubmit}>
        <div className="radioAndSelect">
          <div className="radio">
            <legend>
              Boyut Seç <span className="yıldız">*</span>
            </legend>

            {boyut.map((item,index) => {
              return (
                <FormGroup  key={index} check>
                  <Input
                    name="size"
                    type="radio"
                    id="size-radio"
                    value={item}
                    onChange={handlerChange}
                   
                  />{" "}
                  <Label className="radio" check>
                    {item}
                  </Label>
                </FormGroup>
              );
            })}
          </div>

          <div className="select">
            <legend>
              Hamur Seç <span className="yıldız">*</span>
            </legend>

            <Input
              className="selectBody"
              name="dough"
              value={product.dough}
              onChange={handlerChange}
              type="select"
            >
              <option value={""} disabled>
                Hamur Kalınlığı
              </option>
              {dougthType.map((item,index) => {
                return <option key={index}>{item}</option>;
              })}
            </Input>
          </div>
        </div>
        <div className="malzemeler">
          <legend>
            Ek Malzemeler <span className="yıldız">*</span>
          </legend>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <div className="checkBoxs">
          {malzemeler.map((item, index) => {
            return (
              <FormGroup className="malzemelerCheck" check inline key={index}>
                <Input
                  id="malzemeler-checkbox"
                  value={item}
                  name={"malzemeler"}
                  checked={product.malzemeler.includes(item)}
                  onChange={handlerChange}
                  type="checkbox"
                  data-cy={"checkbox"+index}
                />
                <Label check>{item}</Label>
              </FormGroup>
            );
          })}
          <div className="errorMassage">{formErrors.malzemeler}</div>
        </div>

        <div className="nameContainer">
          <FormGroup>
            <legend htmlFor="name-input">Sipariş Sahibi İsmi</legend>
            <Input
              id="name-input"
              name="name"
              placeholder="İsim"
              type="text"
              value={product.name}
              onChange={handlerChange}
              invalid={!!formErrors.name}
            />
            <FormFeedback>{formErrors.name}</FormFeedback>
          </FormGroup>
          </div>
          <div className="personal">
            <FormGroup>
              <legend htmlFor="name-input">Sipariş Notu</legend>
              <Input
                id="special-text"
                name="personal"
                placeholder="Siparişine eklemek istediğin not var mı?"
                type="text"
                value={product.personal}
                onChange={handlerChange}
              />
            </FormGroup>
          </div>
          <hr></hr>

          <div className="endContainer">

            <div className="miktartContainer">
              <Button className="miktarBtn1">-</Button>
              <div>1</div>
              <Button className="miktarBtn2">+</Button>
            </div>
           
           <div className="detailContainer">
              <div className="detail">
                  <p className="titleTotal">Sipariş Toplamı</p>
                  <div className="detail1"> <p>Seçimler</p> <p>25.00₺</p></div>
                  <div className="detail2"> <p>Toplam</p> <p>110.50₺</p></div>
              </div>
              <Button id="order-button" data-cy="submit" onSubmit={handlerSubmit} disabled={!formValid}>
              Sipariş Ver
             </Button>
           </div>
          </div>
         
        
      </Form>
    </div>
  );
};
export default Section;
