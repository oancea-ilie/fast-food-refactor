import { createGlobalStyle } from 'styled-components';
import bgHome from './assets/img/bg-home.jpg';
import oferImg1 from './assets/img/ofer-img-1.jpg';
import oferImg2 from './assets/img/ofer-img-2.jpg';
import oferImg3 from './assets/img/ofer-img-3.jpg';
import breaker from './assets/img/breaker-1.jpg';
import hotImg1 from './assets/img/hot-combo-img-1.jpg';
import hotImg2 from './assets/img/hot-combo-img-2.jpg';
import aboutSeparator from './assets/img/about-separator.jpg';
import contactBg from './assets/img/contact-bg.jpg';
import menu1 from './assets/img/menu-1.jpg';
import menu2 from './assets/img/menu-2.jpg';
import menu3 from './assets/img/menu-3.jpg';
import menu4 from './assets/img/menu-4.jpg';

export const GlobalSyle = createGlobalStyle`

details {
  display: block;
}


summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
* a {
  text-decoration: none;
  display: inline-block;
}
* button {
  border-radius: 5px;
  background-color: #a41a13;
  display: inline-block;
  transition: 0.2s all;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.3rem 1rem;
}
* button:hover {
  background-color: #eec300;
}
* input {
  transition: 0.2s all;
  margin: 0.3rem 0;
  border-radius: 5px;
  outline: none;
  border: 1px solid #a41a13;
  padding: 0.3rem 0.5rem;
}
* input:focus {
  border: 1px solid #eec300;
}
* img{
  width: 100%;
  max-width: 100%;
}
* h3, * h4, * h5, * h6, * p, * span, * a, * button, * input {
  font-size: 0.8rem;
}
* h2 {
  font-size: 0.9rem;
}
* h1 {
  font-size: 1rem;
}

.link {
  border-radius: 5px;
  background-color: #a41a13;
  transition: 0.2s all;
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.3rem 1rem;
}

.link:hover {
  background-color: #eec300;
}

header {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  background-color: #a41a13;
  position: relative;
  z-index: 2;
}
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.5rem;
  padding: 0.5rem 0;
}
header .container img {
  margin-top: 0.5rem;
  width: 100px;
}
header .container .fa-bars {
  width: auto;
  height: auto;
  font-size: 1.5rem;
  background-color: #eec300;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: 0.3s all;
}
header .container .fa-bars:hover {
  border-radius: 10px;
}
.header-login .container .fa-bars {
  width: auto;
  height: auto;
  font-size: 1.5rem;
  background-color: #eec300;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: 0.3s all;
}
.header-login .container .fa-bars:hover {
  border-radius: 10px;
}
header .container nav {
  display: none;
}
header .container nav .active {
  color: #eec300;
}
header .nav-toggle {
  border-top: 1px solid rgba(255, 255, 255, 0.219);
  background-color: #a41a13;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  transition: 1s all;
  position: relative;
  z-index: 1;
}
header .nav-toggle a {
  color: white;
  padding: 0.5rem;
  font-size: 1.2rem;
  transition: 0.3s all;
}
header .nav-toggle a:hover {
  color: #eec300;
}
@media (min-width: 768px) {
  header {
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
  }
  header .container {
    border: none;
  }
  header .container .fa-bars {
    display: none;
  }
  .header-login .container .fa-bars {
    display: none;
  }
  header .container nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  header .container nav a {
    color: white;
    font-size: 1rem;
    font-weight: 300;
    transition: 0.3s all;
  }
  header .container nav a:hover {
    color: #eec300;
  }
  header .container nav .order-now {
    padding: 0.5rem 0;
    border-left: 1px solid #cacaca83;
    padding-left: 1rem;
  }
  header .container nav .order-now h1 {
    margin-bottom: 0.1rem;
    color: #eec300;
    font-size: 1rem;
  }
  header .container nav .order-now a {
    font-size: 1rem;
  }
}
@media (min-width: 1024px) {
  header .container {
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    padding: 1.5rem 2rem;
  }
  header .container img {
    margin-top: 0;
    width: 150px;
    position: absolute;
    top: 0;
  }
  header .container nav a {
    font-size: 1.2rem;
    font-weight: 400;
  }
  header .container nav .order-now a {
    font-weight: bold;
  }
}
@media (min-width: 1600px) {
  header .container nav .order-now a {
    font-size: 1.4rem;
  }
}

.main-home {
  background-color: #f3f3f3;
  padding-bottom: 5rem;
}

.main-menu {
  background-color: #f3f3f3;
  padding-bottom: 3rem;
}

footer {
  background-color: #0f1924;
}
footer .footer-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
}
footer .footer-header img {
  width: 135px;
}
footer .footer-header p {
  margin-top: 1.5rem;
  text-align: center;
  color: #a8a8a8;
  font-size: 1rem;
  line-height: 1.7rem;
}
footer .footer-body {
  color: white;
  margin: 0 1rem;
  margin-top: 3rem;
  padding-bottom: 3rem;
}
footer .footer-body .card1 .title {
  margin-bottom: 2rem;
}
footer .footer-body .card1 .title h1 {
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
}
footer .footer-body .card1 .title .line {
  height: 2px;
  width: 40px;
  background-color: #a41a13;
}
footer .footer-body .card1 .body {
  margin-bottom: 3rem;
}
footer .footer-body .card1 .body h1 {
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}
footer .footer-body .card1 .body p {
  color: #a8a8a8;
  font-size: 1rem;
  line-height: 1.7rem;
}
footer .footer-body .card2 .title {
  margin-bottom: 2.5rem;
}
footer .footer-body .card2 .title h1 {
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
}
footer .footer-body .card2 .title .line {
  height: 2px;
  width: 40px;
  background-color: #a41a13;
}
footer .footer-body .card2 .body {
  margin-right: 4rem;
}
footer .footer-body .card2 .body li {
  display: flex;
  justify-content: space-between;
  width: 300px;
  list-style: none;
  color: #a8a8a8;
  margin-bottom: 1rem;
  font-size: 1rem;
}
footer .footer-body .card2 .body li span {
  font-size: 1rem;
  display: inline-block;
  margin-left: auto;
}
footer .footer-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
}
footer .footer-footer p {
  width: 240px;
  line-height: 1.7rem;
  color: #a8a8a8;
  font-size: 1rem;
}
footer .footer-footer p span {
  font-size: 1rem;
  color: #a41a13;
  transition: 0.4s all;
  cursor: pointer;
}
footer .footer-footer p span:hover {
  color: #eec300;
}
@media (min-width: 500px) {
  footer .footer-footer p {
    width: auto;
  }
}
@media (min-width: 768px) {
  footer .footer-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  footer .footer-body .card1 {
    justify-self: center;
  }
  footer .footer-body .card1 .body {
    margin-top: 2.5rem;
  }
}
@media (min-width: 1024px) {
  footer .footer-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "header body body";
    align-items: center;
  }
  footer .footer-wrapper .footer-header {
    padding: 0;
    grid-area: header;
  }
  footer .footer-wrapper .footer-body {
    padding: 0;
    margin: 0;
    margin-right: 3rem;
    grid-area: body;
    display: grid;
    align-items: center;
    justify-content: center;
  }
  footer .footer-wrapper .footer-body .card1 {
    padding-top: 3.3rem;
  }
  footer .footer-wrapper .footer-body .card2 {
    justify-self: center;
  }
}
@media (min-width: 1600px) {
  footer .footer-wrapper {
    max-width: 1400px;
  }
}

.hero {
  background-image: url(${bgHome});
}
.hero .container {
  padding: 0 1.5rem;
  padding-top: 4rem;
  height: 550px;
}
.hero .container img {
  width: 170px;
}
.hero .container h2 {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 1.4rem;
  color: #eec300;
}
.hero .container h1 {
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  color: white;
  font-weight: bold;
  padding: 0.5rem 0;
}
.hero .container .first {
  color: white;
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  line-height: 1.7rem;
}
.hero .container .italian {
  width: 350px;
  padding-top: 1rem;
  font-size: 1rem;
  font-style: italic;
  color: white;
  line-height: 1.5rem;
}
.hero .container a {
  margin-top: 1rem;
  background-color: white;
  color: #242424;
  padding: 1rem 3rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 5px;
  margin-bottom: 3.5rem;
  transition: 0.4s all;
}
.hero .container a:hover {
  background-color: #eec300;
}
@media (min-width: 500px) {
  .hero .container .first {
    font-size: 1.6rem;
  }
}
@media (min-width: 600px) {
  .hero .container {
    max-width: 650px;
    height: 600px;
    margin: 0 auto;
  }
  .hero .container h2 {
    font-size: 1.8rem;
  }
  .hero .container h1 {
    font-size: 2.2rem;
  }
  .hero .container .first {
    font-size: 1.8rem;
  }
  .hero .container .italian {
    padding-top: 1.5rem;
    font-size: 1.2rem;
    width: 450px;
    text-align: start;
    line-height: 1.8rem;
    font-weight: 300;
  }
  .hero .container a {
    margin-top: 1.5rem;
    padding: 1.1rem 3.3rem;
    font-size: 1rem;
    letter-spacing: 0.2rem;
  }
}
@media (min-width: 768px) {
  .hero .container {
    max-width: 800px;
    padding: 0 2rem;
    padding-top: 4rem;
    height: 650px;
  }
  .hero .container img {
    width: 190px;
  }
  .hero .container h1 {
    font-size: 2.8rem;
  }
  .hero .container .first {
    font-size: 2rem;
  }
  .hero .container .italian {
    padding-top: 1.5rem;
    font-size: 1.4rem;
    width: 550px;
    text-align: start;
  }
  .hero .container a {
    margin-top: 2rem;
    padding: 1.1rem 3.3rem;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    margin-bottom: 6rem;
  }
}
@media (min-width: 1024px) {
  .hero .container {
    height: 765px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text img";
    align-content: center;
    align-items: center;
    max-width: 1200px;
  }
  .hero .container img {
    grid-area: img;
    width: 100%;
    max-width: 600px;
  }
  .hero .container .text {
    grid-area: text;
    margin-top: 6rem;
  }
  .hero .container .text h2 {
    font-size: 2.2rem;
  }
  .hero .container .text h1 {
    font-size: 4rem;
  }
  .hero .container .text .first {
    width: auto;
  }
  .hero .container .text a {
    margin-top: 2rem;
    padding: 1.4rem 3.3rem;
  }
}
@media (min-width: 1600px) {
  .hero .container {
    max-width: 1400px;
  }
}

.oferte {
  margin-top: 4rem;
}
.oferte .container {
  margin: 0 1rem;
  display: grid;
  grid-gap: 2rem;
}
.oferte .container .card1 {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  background-image: url(${oferImg1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 170px;
  position: relative;
  border-radius: 5px;
}
.oferte .container .card1 .text {
  display: none;
}
.oferte .container .card1 a {
  color: white;
  background-color: #a41a13;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  transition: 0.4s all;
}
.oferte .container .card1 a:hover {
  border-radius: 30px;
}
.oferte .container .card2 {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-image: url(${oferImg2});
  height: 330px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.oferte .container .card2 .text {
  position: absolute;
  top: 50px;
  right: 30px;
}
.oferte .container .card2 .text h1 {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}
.oferte .container .card2 .text h1 span {
  color: #542a0c;
  font-size: inherit;
  font-weight: inherit;
}
.oferte .container .card2 .text h2 {
  color: white;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0.5rem 0;
}
.oferte .container .card2 .text a {
  margin-top: 0.5rem;
  color: white;
  background-color: #a41a13;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: 0.4s all;
}
.oferte .container .card2 .text a:hover {
  border-radius: 30px;
}
.oferte .container .card3 {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-image: url(${oferImg3});
  height: 330px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.oferte .container .card3 .text {
  position: absolute;
  top: 50px;
  right: 30px;
}
.oferte .container .card3 .text h1 {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
}
.oferte .container .card3 .text h1 span {
  font-family: "Dancing Script", cursive;
  color: #eec300;
  font-size: 1.4rem;
  font-weight: inherit;
}
.oferte .container .card3 .text h2 {
  color: white;
  font-size: 1.4rem;
  font-weight: 400;
}
.oferte .container .card3 .text a {
  margin-top: 1rem;
  color: white;
  background-color: #a41a13;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: 0.4s all;
}
.oferte .container .card3 .text a:hover {
  border-radius: 30px;
}
@media (min-width: 500px) {
  .oferte {
    margin-top: 6.2rem;
  }
  .oferte .container .card1 {
    height: 230px;
  }
  .oferte .container .card1 a {
    right: 40px;
  }
  .oferte .container .card2 {
    height: 450px;
  }
  .oferte .container .card2 .text {
    top: 25%;
    transform: translateY(-25%);
    right: 40px;
  }
  .oferte .container .card3 {
    height: 450px;
  }
  .oferte .container .card3 .text {
    top: 25%;
    transform: translateY(-25%);
    right: 40px;
  }
}
@media (min-width: 600px) {
  .oferte .container .card1 {
    height: 290px;
  }
  .oferte .container .card1 a {
    right: 80px;
  }
  .oferte .container .card2 {
    height: 600px;
  }
  .oferte .container .card2 .text {
    top: 25%;
    transform: translateY(-25%);
    right: 80px;
  }
  .oferte .container .card3 {
    height: 600px;
  }
  .oferte .container .card3 .text {
    top: 25%;
    transform: translateY(-25%);
    right: 80px;
  }
}
@media (min-width: 768px) {
  .oferte .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "card1 card1" "card2 card3";
  }
  .oferte .container .card1 {
    grid-area: card1;
    height: 390px;
  }
  .oferte .container .card1 .text {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 200px;
  }
  .oferte .container .card1 .text h1 {
    color: white;
    font-size: 2rem;
    font-weight: 800;
  }
  .oferte .container .card1 .text p {
    margin-top: 0.3rem;
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    font-style: italic;
  }
  .oferte .container .card1 a {
    right: 30px;
  }
  .oferte .container .card2 {
    grid-area: card2;
    height: 390px;
  }
  .oferte .container .card2 .text {
    right: 30px;
  }
  .oferte .container .card3 {
    grid-area: card3;
    height: 390px;
  }
  .oferte .container .card3 .text {
    right: 30px;
  }
}
@media (min-width: 1024px) {
  .oferte {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 6.2rem;
  }
  .oferte .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "card1 card2 card3";
  }
  .oferte .container .card1 {
    grid-area: card1;
    height: 250px;
  }
  .oferte .container .card1 .text {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    transform: translateY(-30%);
    right: 10px;
  }
  .oferte .container .card1 .text h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: 800;
  }
  .oferte .container .card1 .text p {
    margin-top: 0.3rem;
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    font-style: italic;
  }
  .oferte .container .card1 a {
    top: 65%;
    transform: translateY(-65%);
    right: 50px;
  }
  .oferte .container .card2 {
    grid-area: card2;
    height: 250px;
  }
  .oferte .container .card2 .text {
    right: 10px;
  }
  .oferte .container .card3 {
    grid-area: card3;
    height: 250px;
  }
  .oferte .container .card3 .text {
    right: 10px;
  }
}
@media (min-width: 1600px) {
  .oferte {
    max-width: 1370px;
  }
  .oferte .container .card1 {
    height: 250px;
  }
  .oferte .container .card1 .text {
    top: 30%;
    transform: translateY(-30%);
    right: 10px;
  }
  .oferte .container .card1 a {
    top: 65%;
    transform: translateY(-65%);
    right: 70px;
  }
  .oferte .container .card2 {
    height: 250px;
  }
  .oferte .container .card2 .text {
    right: 30px;
  }
  .oferte .container .card3 {
    grid-area: card3;
    height: 250px;
  }
  .oferte .container .card3 .text {
    right: 30px;
  }
}

.products {
  margin: 4.5rem 0;
}
.products .header {
  margin: 0 1rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #797979;
}
.products .header .title {
  margin-bottom: 2rem;
}
.products .header .title h1 {
  font-family: Poppins, sans-serif;
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
  color: #242424;
}
.products .header .title .line {
  height: 3px;
  background-color: #e93030;
  width: 60px;
  margin: 0 auto;
  margin-top: 1rem;
}
.products .header .lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.products .header .lists a {
  font-family: Poppins, sans-serif;
  color: #242424;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.4s all;
}
.products .header .lists a:hover {
  color: #e93030;
}
.products .header .lists .active {
  color: #e93030;
}
.products .body {
  padding-top: 3.5rem;
  margin: 0 1rem;
  display: grid;
  grid-gap: 2rem;
}
 .body .card {
  position: relative;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.productFavIcon {
  font-size: 1.7rem;
  color: #a41a13;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: .2s all;
  cursor: pointer;
}
.productFavIcon:hover {
  color: #eec300;
}

.product-card-img{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 260px;
}
.product-card-img img {
  margin-top: 0.7rem;
  width: 200px;
  border-radius: 5px;
}
.products .body .card h1 {
  padding: 0 0.4rem;
  font-family: Poppins, sans-serif;
  font-size: 1.4rem;
}
.products .body .card p {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  color: #797979;
  padding: 1rem;
  font-size: 1rem;
}
.products .body .card h2 {
  font-size: 1.4rem;
  color: #e93030;
  font-weight: 900;
}
.body .card button {
  background-color: #a41a13;
  width: 90%;
  margin: 0 auto;
  border-radius: 5px 5px 0 0;
  padding: 1rem;
  color: white;
  margin-top: 1rem;
  transition: 0.4s all;
  font-weight: bold;
}
.body .card button:hover {
  background-color: #eec300;
}
@media (min-width: 600px) {
  .products .header .title h1 {
    font-size: 2rem;
  }
}
@media (min-width: 768px) {
  .products {
    margin: 8rem 0;
  }
  .products .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .products {
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
  .products .header .title h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  .products .header .lists {
    gap: 3rem;
  }
  .products .header .lists a {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .products .body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media (min-width: 1600px) {
  .products {
    max-width: 1370px;
  }
  .products .body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}

.separator .container {
  background-image: url(${breaker});
  background-position: right;
  height: 630px;
}
.separator .container .card {
  margin: 0 1rem;
  padding-top: 7rem;
  color: white;
}
.separator .container .card .text {
  margin-bottom: 2rem;
}
.separator .container .card .text h2 {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 1.6rem;
  display: inline-block;
  font-weight: 400;
}
.separator .container .card .text .line {
  margin-left: 0.5rem;
  display: inline-block;
  height: 1px;
  background-color: white;
  width: 100px;
}
.separator .container .card h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.separator .container .card .price {
  font-size: 4rem;
  position: relative;
  top: 0;
  left: 20px;
  display: inline-block;
}
.separator .container .card .price .dolar {
  position: absolute;
  top: 15px;
  left: -20px;
  font-size: 2.2rem;
}
.separator .container .card .price .each {
  position: absolute;
  bottom: -14px;
  right: -5px;
  font-size: 1.4rem;
  font-weight: 400;
}
.separator .container .card ul {
  margin-top: 1rem;
  color: #eec300;
  list-style-type: none;
}
.separator .container .card ul li {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
}
.separator .container .card a {
  margin-top: 1.5rem;
  background-color: #a41a13;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  color: white;
  padding: 1.3rem 3.5rem;
  transition: 0.4s all;
}
.separator .container .card a:hover {
  background-color: #eec300;
}
@media (min-width: 500px) {
  .separator .container {
    height: 530px;
  }
  .separator .container .card h1 {
    font-size: 2.4rem;
    font-weight: 900;
  }
  .separator .container .card .grid {
    display: flex;
  }
  .separator .container .card .grid .price {
    margin-right: 4.5rem;
    left: 25px;
    font-weight: 500;
  }
  .separator .container .card .grid .price .dolar {
    font-weight: 500;
    left: -25px;
  }
  .separator .container .card .grid ul {
    margin-top: 0.5rem;
  }
  .separator .container .card .grid ul li {
    font-size: 1.2rem;
  }
}
@media (min-width: 768px) {
  .separator .container .card {
    margin: 0 2rem;
    padding-top: 5rem;
  }
  .separator .container .card h1 {
    font-size: 3rem;
  }
  .separator .container .card a {
    padding: 1.3rem 4rem;
  }
}
@media (min-width: 1024px) {
  .separator .container {
    background-position: right;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .separator .container .card {
    padding-top: 4rem;
  }
  .separator .container .card h1 {
    font-size: 4rem;
  }
}

.hot-combos {
  margin: 4rem 0;
}
.hot-combos .container .header {
  margin: 0 1rem;
  padding-bottom: 1rem;
}
.hot-combos .container .header .title {
  margin-bottom: 2rem;
}
.hot-combos .container .header .title h1 {
  font-size: 2rem;
  text-align: center;
}
.hot-combos .container .header .title .line {
  height: 3px;
  background-color: #e93030;
  width: 60px;
  margin: 0 auto;
  margin-top: 1rem;
}
.hot-combos .container .body {
  margin: 0 1rem;
  display: grid;
  grid-gap: 2rem;
}
.hot-combos .container .body .card {
  border-radius: 5px;
  background-image: url(${hotImg1});
  background-position: center;
  background-size: cover;
  height: 250px;
  color: white;
}
.hot-combos .container .body .card .text {
  padding: 1.5rem;
}
.hot-combos .container .body .card .text h1 {
  font-size: 2.4rem;
}
.hot-combos .container .body .card .text h1 span {
  font-size: 2.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}
.hot-combos .container .body .card .text h2 {
  margin-left: 130px;
  font-size: 2.2rem;
  font-weight: 800;
  font-family: "Dancing Script", cursive;
}
.hot-combos .container .body .card .text .price {
  position: relative;
  margin-top: -1.6rem;
  background-color: #c4251c;
  color: white;
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.hot-combos .container .body .card .text .price span {
  position: absolute;
  top: 20px;
  left: 40px;
  font-size: 1.2rem;
}
.hot-combos .container .body .card .text .price sub {
  position: absolute;
  top: 60px;
  left: 18px;
  font-size: 2rem;
}
.hot-combos .container .body .card .text .price h2 {
  font-family: "Poppins", sans-serif;
  position: absolute;
  font-size: 3rem;
  font-weight: bold;
  top: 40px;
  right: 25px;
}
.hot-combos .container .body .card-2 {
  background-image: url(${hotImg2});
}
.hot-combos .container .body .card-2 .text .price {
  background-color: #eec300;
}
@media (min-width: 500px) {
  .hot-combos .container .body .card {
    height: 360px;
  }
}
@media (min-width: 600px) {
  .hot-combos .container .body .card {
    height: 480px;
  }
  .hot-combos .container .body .card .text {
    padding: 2rem;
  }
  .hot-combos .container .body .card .text h2 {
    font-size: 2.4rem;
  }
}
@media (min-width: 768px) {
  .hot-combos .container .body .card {
    height: 600px;
  }
  .hot-combos .container .body .card .text {
    padding: 3rem;
  }
  .hot-combos .container .body .card .text h1 {
    font-size: 3.5rem;
  }
  .hot-combos .container .body .card .text h1 span {
    font-size: 3.5rem;
    font-weight: 300;
  }
  .hot-combos .container .body .card .text h2 {
    font-size: 2.6rem;
  }
}
@media (min-width: 1024px) {
  .hot-combos {
    margin: 8rem 0;
  }
  .hot-combos .container {
    margin: 0 auto;
    max-width: 1200px;
  }
  .hot-combos .container .header .title h1 {
    font-size: 2.2rem;
  }
  .hot-combos .container .body {
    display: grid;
    margin: 0 1rem;
    grid-template-columns: 1fr 1fr;
  }
  .hot-combos .container .body .card {
    height: 390px;
  }
  .hot-combos .container .body .card .text {
    padding: 2rem;
  }
  .hot-combos .container .body .card .text h1 {
    font-size: 3.5rem;
  }
  .hot-combos .container .body .card .text h1 span {
    font-size: 3.6rem;
  }
}
@media (min-width: 1600px) {
  .hot-combos .container {
    max-width: 1370px;
  }
  .hot-combos .container .body .card {
    height: 390px;
  }
  .hot-combos .container .body .card .text {
    padding: 2rem;
  }
  .hot-combos .container .body .card .text h1 {
    font-size: 3.6rem;
  }
  .hot-combos .container .body .card .text h1 span {
    font-size: 3.6rem;
  }
}

.delivery {
  background-color: #a41a13;
}
.delivery .container {
  padding-top: 5rem;
  margin: 0 1rem;
}
.delivery .container .img-res {
  display: none;
}
.delivery .container .card {
  color: white;
  text-align: center;
  padding: 4rem 0;
}
.delivery .container .card h2 {
  font-family: "Dancing Script", cursive;
  font-style: italic;
  font-weight: 800;
  font-size: 2.2rem;
}
.delivery .container .card h1 {
  font-size: 4rem;
  padding: 0.8rem;
}
.delivery .container .card p {
  font-size: 1.2rem;
  line-height: 2rem;
}
.delivery .container .card p:last-of-type {
  margin: 1rem 0;
}
.delivery .container .card a {
  color: #242424;
  padding: 1.3rem 3rem;
  background-color: #eec300;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  transition: 0.4s all;
}
.delivery .container .card a:hover {
  background-color: white;
}
@media (min-width: 600px) {
  .delivery .container {
    text-align: center;
  }
  .delivery .container img {
    padding: 2rem;
  }
}
@media (min-width: 768px) {
  .delivery .container img {
    max-width: 600px;
  }
}
@media (min-width: 1024px) {
  .delivery .container {
    display: grid;
    padding-top: 1rem;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: 2rem;
    position: relative;
  }
  .delivery .container img {
    max-width: 600px;
  }
  .delivery .container .card {
    padding-top: 4rem;
    text-align: start;
    justify-self: flex-start;
  }
  .delivery .container .card h1 {
    margin-left: 0;
    padding-left: 0;
  }
  .delivery .container .card .corectie {
    width: 500px;
  }
}
@media (min-width: 1600px) {
  .delivery .container {
    grid-template-columns: 40% 60%;
  }
  .delivery .container .img-res {
    padding: 0;
    margin: 0;
    display: block;
    position: absolute;
    width: 300px;
    right: -15px;
    bottom: 0;
  }
}

.service {
  margin-top: 5rem;
}
.service .container {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin: 0 1rem;
  padding: 4rem 0;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr;
  justify-items: center;
}
.service .container .card {
  text-align: center;
  width: 200px;
}
.service .container .card img {
  width: 110px;
}
.service .container .card h1 {
  font-family: "Poppins", sans-serif;
  margin: 1rem 0;
  font-size: 1.2rem;
}
.service .container .card p {
  font-size: 1rem;
  color: #797979;
  line-height: 1.7rem;
}
@media (min-width: 768px) {
  .service .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
  }
}
@media (min-width: 1024px) {
  .service {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 5rem;
  }
  .service .container {
    padding-left: 2rem;
    padding-right: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media (min-width: 1600px) {
  .service {
    max-width: 1370px;
  }
}

.about-hero {
  height: 250px;
  background-image: url(${bgHome});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: white;
  font-weight: 600;
}
.about-hero .link-cards {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}
.about-hero .link-cards p {
  color: white;
  margin: 0 0.7rem;
}
.about-hero .link-cards a {
  font-size: 0.9rem;
  color: white;
  background-color: none;
}
.about-hero .link-cards .active {
  color: #de9692;
  transition: 0.4s all;
}
.about-hero .link-cards .active:hover {
  color: white;
}
@media (min-width: 500px) {
  .about-hero h1 {
    font-size: 2.6rem;
  }
}
@media (min-width: 600px) {
  .about-hero {
    height: 370px;
  }
}
@media (min-width: 768px) {
  .about-hero h1 {
    font-size: 3.8rem;
  }
}

.text-img {
  margin: 6rem 1rem;
}
.text-img .text {
  margin-bottom: 2rem;
}
.text-img .text h1 {
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
}
.text-img .text p {
  margin-bottom: 1.5rem;
  color: #797979;
  font-size: 1rem;
  line-height: 1.9rem;
}
.text-img .images {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  border-radius: 5px;
}
.text-img .images img {
  border-radius: 5px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
}
@media (min-width: 500px) {
  .text-img .text h1 {
    font-size: 2rem;
  }
}
@media (min-width: 600px) {
  .text-img .text h1 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
  .text-img .images {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
  }
}
@media (min-width: 1024px) {
  .text-img {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 6rem;
    margin-top: 6rem;
    max-width: 1200px;
  }
  .text-img .text {
    margin-left: 2rem;
  }
  .text-img .images {
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .text-img .images .img1 {
    width: 100%;
    border-radius: 0;
  }
  .text-img .images .img2 {
    border-radius: 0;
  }
}

.cards-sections {
  background-color: #efefef;
}
.cards-sections .container {
  padding: 5rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
.cards-sections .container .card {
  background-color: white;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  padding-bottom: 2rem;
  border-radius: 5px;
}
.cards-sections .container .card img {
  border-radius: 5px 5px 0 0;
}
.cards-sections .container .card a {
  font-size: 1.2rem;
  font-weight: 700;
  color: black;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 0 1.5rem;
}
.cards-sections .container .card p {
  padding: 0 1.5rem;
  font-size: 0.9rem;
  color: #797979;
  line-height: 1.8rem;
}
@media (min-width: 768px) {
  .cards-sections .container {
    padding: 6rem 1rem;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .cards-sections .container {
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.about-separator {
  background-image: url(${aboutSeparator});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.about-separator .container {
  background-color: rgba(0, 0, 0, 0.363);
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.about-separator .container .overlay h1 {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 3rem;
}
.about-separator .container .overlay h1 span {
  font-size: inherit;
}
.about-separator .container .overlay h1 .line {
  display: none;
}
.about-separator .container .overlay p {
  color: #efefef;
  font-size: 1rem;
  line-height: 1.9rem;
  max-width: 350px;
}
@media (min-width: 500px) {
  .about-separator .container .overlay h1 {
    font-size: 2.6rem;
  }
}
@media (min-width: 768px) {
  .about-separator .container {
    align-items: flex-start;
  }
  .about-separator .container .overlay h1 {
    margin-left: 1rem;
    text-align: start;
    font-size: 3.7rem;
    position: relative;
  }
  .about-separator .container .overlay h1 .flex {
    display: flex;
    align-items: center;
  }
  .about-separator .container .overlay h1 .flex .line {
    display: inline-block;
    height: 1px;
    width: 100px;
    margin-right: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .about-separator .container .overlay p {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    max-width: none;
    width: 500px;
    text-align: start;
  }
}
@media (min-width: 1024px) {
  .about-separator .container .overlay {
    width: 1000px;
    margin: 0 auto;
  }
}

.our-chef {
  padding: 6rem 0;
}
.our-chef .title {
  margin-bottom: 3rem;
}
.our-chef .title h1 {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 1rem;
}
.our-chef .title p {
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.8rem;
  text-align: center;
  color: #797979;
  width: 400px;
}
.our-chef .container-about {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 2rem;
}
.our-chef .container-about .card img {
  border-radius: 50%;
  width: 225px;
}
.our-chef .container-about .card h2 {
  font-size: 1.2rem;
  margin-top: 1.5rem;
  text-align: center;
}
.our-chef .container-about .card p {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  color: #797979;
}
@media (min-width: 768px) {
  .our-chef .container-about {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .our-chef .wrapper-about {
    max-width: 1200px;
    margin: 0 auto;
  }
  .our-chef .wrapper-about .container-about {
    margin: 0 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.service-about {
  margin-bottom: 6rem;
}
.service-about .container-about {
  background-color: #cacaca83;
  border-radius: 5px;
  margin: 0 1rem;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.service-about .container-about .card {
  text-align: center;
  width: 200px;
  border-bottom: 1px solid white;
}
.service-about .container-about .card img {
  padding-top: 2rem;
  width: 110px;
}
.service-about .container-about .card h1 {
  font-family: "Poppins", sans-serif;
  margin: 1rem 0;
  font-size: 1.2rem;
}
.service-about .container-about .card p {
  font-size: 1rem;
  color: #797979;
  line-height: 1.7rem;
  padding-bottom: 2rem;
}
.service-about .container-about .card:last-of-type {
  border-bottom: none;
}
@media (min-width: 768px) {
  .service-about .container-about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
  }
  .service-about .container-about .card:last-of-type {
    border-bottom: 1px solid white;
  }
}
@media (min-width: 1024px) {
  .service-about {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .service-about .container-about {
    padding-left: 2rem;
    padding-right: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media (min-width: 1600px) {
  .service-about {
    max-width: 1370px;
  }
}

.contact-hero {
  height: 460px;
  background-image: url(${contactBg});
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: white;
  font-weight: 600;
}
.contact-hero .link-cards {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}
.contact-hero .link-cards p {
  color: white;
  margin: 0 0.7rem;
}
.contact-hero .link-cards a {
  font-size: 0.9rem;
  color: white;
  background-color: none;
}
.contact-hero .link-cards .active {
  color: #de9692;
  transition: 0.4s all;
}
.contact-hero .link-cards .active:hover {
  color: white;
}
@media (min-width: 500px) {
  .contact-hero h1 {
    font-size: 2.6rem;
  }
}
@media (min-width: 600px) {
  .contact-hero {
    height: 370px;
  }
}
@media (min-width: 768px) {
  .contact-hero h1 {
    font-size: 3.8rem;
  }
}

.bg-fixer {
  background-color: #f3f3f3;
}

.write {
  padding-bottom: 8rem;
}
.write .fix {
  height: 700px;
}
.write .form {
  position: absolute;
  margin: 0 1.5rem;
  margin-top: -80px;
  padding: 2rem 1.5rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
}
.write .form h2 {
  text-align: start;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
.write .form p {
  font-size: 1rem;
  color: #797979;
  line-height: 1.7rem;
  margin-bottom: 2.5rem;
}
.write .form form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.write .form form .grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
.write .form form input {
  margin: 0;
  border-radius: 0;
  padding: 0.9rem 1.5rem;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: #f6f7fc;
  border: 1px solid #eeeff5;
  margin-bottom: 1.5rem;
  transition: 0.4s all;
}
.write .form form input:focus {
  border: 1px solid #a41a13;
}
.write .form form textarea {
  border-radius: 0;
  padding: 0.9rem 1.5rem;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: #f6f7fc;
  border: 1px solid #eeeff5;
  resize: none;
  height: 250px;
  margin-bottom: 1.5rem;
  outline: none;
  transition: 0.4s all;
}
.write .form form textarea:focus {
  border: 1px solid #a41a13;
}
.write .form form button {
  width: 100%;
  padding: 1.1rem;
  font-size: 0.9rem;
}
.write .text {
  margin: 0 1.5rem;
  margin-top: 4rem;
}
.write .text .title {
  margin-bottom: 2rem;
}
.write .text .title h2 {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
}
.write .text .title .line {
  height: 2px;
  width: 50px;
  background-color: #242424;
}
.write .text .container .card {
  margin-bottom: 2rem;
}
.write .text .container .card h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.write .text .container .card p {
  font-size: 1rem;
  line-height: 1.7rem;
  color: #797979;
}
.write .text .container .card:last-of-type {
  margin-bottom: 0;
}
@media (min-width: 500px) {
  .write .form h2 {
    font-size: 1.4rem;
  }
  .write .form form button {
    width: 170px;
    margin-right: auto;
    font-size: 1rem;
  }
  .write .text .title h2 {
    font-size: 1.6rem;
  }
  .write .text .container .card h2 {
    font-weight: 600;
  }
}
@media (min-width: 600px) {
  .write .form h2 {
    font-size: 1.8rem;
  }
  .write .form form button {
    width: 170px;
    margin-right: auto;
    font-size: 1rem;
  }
  .write .text .title h2 {
    font-size: 1.8rem;
  }
}
@media (min-width: 768px) {
  .write .fix {
    height: 800px;
  }
  .write .form {
    padding: 4.5rem 3rem;
  }
  .write .form h2 {
    font-size: 1.8rem;
  }
  .write .form form input {
    margin-bottom: 2rem;
  }
  .write .form form textarea {
    margin-bottom: 2rem;
  }
  .write .form form button {
    width: 170px;
    margin-right: auto;
    font-size: 1rem;
  }
  .write .text .title h2 {
    font-size: 1.8rem;
  }
}
@media (min-width: 1024px) {
  .write {
    display: grid;
    grid-template-columns: 65% 35%;
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 2rem;
  }
  .write .fix {
    height: 800px;
  }
  .write .fix .form {
    position: unset;
    padding: 4.5rem 3rem;
  }
  .write .fix .form h2 {
    font-size: 1.8rem;
  }
  .write .fix .form form input {
    margin-bottom: 2rem;
  }
  .write .fix .form form textarea {
    margin-bottom: 2rem;
  }
  .write .fix .form form button {
    width: 170px;
    margin-right: auto;
    font-size: 1rem;
  }
  .write .text .title h2 {
    font-size: 1.8rem;
  }
}
@media (min-width: 1600px) {
  .write {
    grid-gap: 4rem;
  }
}

.menu-hero {
  height: 250px;
  background-image: url(${bgHome});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu-hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: white;
  font-weight: 600;
}
.menu-hero .link-cards {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}
.menu-hero .link-cards p {
  color: white;
  margin: 0 0.7rem;
}
.menu-hero .link-cards a {
  font-size: 0.9rem;
  color: white;
  background-color: none;
}
.menu-hero .link-cards .active {
  color: #de9692;
  transition: 0.4s all;
}
.menu-hero .link-cards .active:hover {
  color: white;
}
@media (min-width: 500px) {
  .menu-hero h1 {
    font-size: 2.6rem;
  }
}
@media (min-width: 600px) {
  .menu-hero {
    height: 370px;
  }
}
@media (min-width: 768px) {
  .menu-hero h1 {
    font-size: 3.8rem;
  }
}

.menu-products {
  margin: 4.5rem 0;
}
.menu-products .header {
  margin: 0 1rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #797979;
}
.menu-products .header .title {
  margin-bottom: 2rem;
}
.menu-products .header .title h1 {
  font-family: Poppins, sans-serif;
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
  color: #242424;
}
.menu-products .header .title .line {
  height: 3px;
  background-color: #e93030;
  width: 60px;
  margin: 0 auto;
  margin-top: 1rem;
}
.menu-products .header .lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.menu-products .header .lists a {
  font-family: Poppins, sans-serif;
  color: #242424;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.4s all;
}
.menu-products .header .lists a:hover {
  color: #e93030;
}
.menu-products .header .lists .active {
  color: #e93030;
}
.menu-products .body {
  padding-top: 3.5rem;
  margin: 0 1rem;
  display: grid;
  grid-gap: 2rem;
}
.menu-products .body .card {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-products .body .card img {
  border-radius: 5px;
}
.menu-products .body .card h1 {
  font-family: Poppins, sans-serif;
  font-size: 1.4rem;
}
.menu-products .body .card p {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  color: #797979;
  padding: 1rem;
  font-size: 1rem;
}
.menu-products .body .card h2 {
  font-size: 1.4rem;
  color: #e93030;
  font-weight: 900;
}
.menu-products .body .card a {
  background-color: #a41a13;
  width: 90%;
  margin: 0 auto;
  border-radius: 5px 5px 0 0;
  padding: 1rem;
  color: white;
  margin-top: 1rem;
  transition: 0.4s all;
  font-weight: bold;

}
.menu-products .body .card a:hover {
  background-color: #eec300;
}
.menu-products .view-more {
  padding: 1rem;
  text-align: center;
  display: block;
  margin: 0 1rem;
  margin-top: 3rem;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background-color: #a41a13;
  transition: 0.4s all;
}
.menu-products .view-more:hover {
  background-color: #eec300;
}
@media (min-width: 500px) {
  .menu-products .view-more {
    width: 240px;
    margin: 0 auto;
    margin-top: 3rem;
  }
}
@media (min-width: 600px) {
  .menu-products .header .title h1 {
    font-size: 2rem;
  }
}
@media (min-width: 768px) {
  .menu-products {
    margin: 4rem 0;
  }
  .menu-products .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .menu-products {
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .menu-products .header .title h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  .menu-products .header .lists {
    gap: 3rem;
  }
  .menu-products .header .lists a {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .menu-products .body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media (min-width: 1600px) {
  .menu-products {
    max-width: 1370px;
  }
  .menu-products .body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}

.container-menu {
  margin: 0 1rem;
  display: grid;
  grid-gap: 1.5rem;
  margin-bottom: 5rem;
}
.container-menu .card1 {
  background-image: url(${menu1});
}
.container-menu .card2 {
  background-image: url(${menu2});
}
.container-menu .card3 {
  background-image: url(${menu3});
}
.container-menu .card4 {
  background-image: url(${menu4});
}
.container-menu .card {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  height: 270px;
  border-radius: 5px;
}
.container-menu .card .overlay {
  border-radius: 5px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.424);
}
.container-menu .card .overlay .text {
  color: white;
  width: 60%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.container-menu .card .overlay .text .title {
  font-size: 1.4rem;
}
.container-menu .card .overlay .text p {
  display: none;
}
.container-menu .card .overlay .text .price {
  font-size: 1.4rem;
  margin: 1rem 0;
}
.container-menu .card .overlay .text a {
  background-color: #eec300;
  padding: 1.1rem 2rem;
  color: #242424;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  width: 200px;
  transition: 0.4s all;
  letter-spacing: 0.2rem;
}
.container-menu .card .overlay .text a:hover {
  background-color: white;
}
@media (min-width: 500px) {
  .container-menu .card {
    height: 350px;
  }
  .container-menu .card .overlay .text {
    padding: 0 2.5rem;
    width: 73%;
  }
  .container-menu .card .overlay .text .title {
    font-size: 2rem;
  }
  .container-menu .card .overlay .text p {
    display: none;
  }
  .container-menu .card .overlay .text .price {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 1rem 0;
  }
  .container-menu .card .overlay .text a {
    font-size: 1rem;
  }
}
@media (min-width: 600px) {
  .container-menu .card {
    height: 450px;
  }
  .container-menu .card .overlay .text {
    padding: 0 2.5rem;
    width: 60%;
  }
  .container-menu .card .overlay .text .title {
    font-size: 2rem;
  }
  .container-menu .card .overlay .text p {
    display: none;
  }
  .container-menu .card .overlay .text .price {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 1rem 0;
  }
  .container-menu .card .overlay .text a {
    font-size: 1rem;
  }
}
@media (min-width: 768px) {
  .container-menu .card {
    height: 600px;
  }
  .container-menu .card .overlay .text {
    padding: 0 2.5rem;
    background-color: #a41a138f;
    width: 47%;
    max-width: 440px;
  }
  .container-menu .card .overlay .text .title {
    font-size: 2rem;
  }
  .container-menu .card .overlay .text p {
    display: none;
  }
  .container-menu .card .overlay .text .price {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 1rem 0;
  }
  .container-menu .card .overlay .text a {
    font-size: 1rem;
  }
}
@media (min-width: 1024px) {
  .container-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .container-menu .card {
    height: 400px;
    width: 100%;
  }
  .container-menu .card .overlay .text {
    padding: 0 2.5rem;
    background-color: transparent;
    width: 100%;
    padding-right: 0;
    max-width: 450px;
  }
  .container-menu .card .overlay .text .title {
    font-size: 3rem;
  }
  .container-menu .card .overlay .text p {
    margin-top: 1rem;
    display: block;
    font-size: 1rem;
    font-weight: 300;
    width: 370px;
    line-height: 1.7rem;
  }
  .container-menu .card .overlay .text .price {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 1rem 0;
  }
  .container-menu .card .overlay .text a {
    font-size: 1rem;
  }
}
@media (min-width: 1600px) {
  .container-menu {
    max-width: 1700px;
    margin-left: auto;
    margin-right: auto;
  }
  .container-menu .card {
    height: 500px;
  }
}

@media (min-width: 1600px) {
  .margin-fix {
    margin: 0 1.5rem;
  }
}



.register {
  margin: 3rem 1rem;
}
.register .container {
  border-radius: 10px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 40rem;
  background-color: #a41a13;
  padding: 1.5rem;
}
.register .container h1 {
  text-align: center;
  font-size: 3rem;
  color: white;
}
.register .container .form {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem;
}
.register .container .form input {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}
.register .container .form .register-btn {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.6rem;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 0.4rem;
  margin-bottom: 1rem;
  transition: 0.4s all;
}
.register .container .form .register-btn:hover {
  background-color: white;
  color: #a41a13;
}
.register .container .form .login-btn {
  font-size: 1.3rem;
  text-align: center;
  color: #eec300;
  transition: 0.4s all;
}
.register .container .form .login-btn:hover {
  color: white;
}

.login {
  margin: 3rem 1rem;
}
.login .container {
  border-radius: 10px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 40rem;
  background-color: #a41a13;
  padding: 1.5rem;
}
.login .container h1 {
  text-align: center;
  font-size: 3rem;
  color: white;
}
.login .container .form {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem;
}
.login .container .form input {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}
.login .container .form .login-btn {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.6rem;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 0.4rem;
  margin-bottom: 1rem;
  transition: 0.4s all;
}
.login .container .form .login-btn:hover {
  background-color: white;
  color: #a41a13;
}
.login .container .form .register-btn {
  font-size: 1.3rem;
  text-align: center;
  color: #eec300;
  transition: 0.4s all;
}
.login .container .form .register-btn:hover {
  color: white;
}
.header-login {
  background-color: #a41a13;
  position: relative;
}
.header-login .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.5rem;
  padding: 0.5rem 0;
}
.header-login .container img {
  margin-top: 0.5rem;
  width: 100px;
}
.header-login .container nav {
  display: none;
}
.active-link {
  color: #eec300 !important;
}
.active-btn{
  background-color: white !important;
  color: #a41a13 !important;
}
.red{
  background-color: black !important;
}
.header-login .nav-toggle {
  border-top: 1px solid rgba(255, 255, 255, 0.219);
  background-color: #a41a13;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  transition: 1s all;
}
.header-login .nav-toggle a {
  color: white;
  padding: 0.5rem;
  font-size: 1.2rem;
  transition: 0.3s all;
}
.header-login .nav-toggle a:hover {
  color: #eec300;
}
@media (min-width: 768px) {

  .header-login {
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .header-login .container {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border: none;
  }
  .header-login .container img {
    margin-top: 0.5rem;
    width: 90px;
  }
  .header-login .container .fa-bars {
    display: none;
  }
  .header-login .container nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  .header-login .container nav a {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    transition: 0.3s all;
  }
  .header-login .container nav a:hover {
    color: #eec300;
  }
  .header-login .container nav .user-deatils {
    padding: 0.5rem 0;
    border-left: 1px solid #cacaca83;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    transition: 0.3s all;
  }
  .header-login .container nav .user-deatils svg {
    margin-top: 0.3rem;
    font-size: 2rem;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
  .header-login .container nav .user-deatils svg:hover {
    color: #eec300;
  }
  .header-login .container nav .user-deatils .userImage {
    margin-left: 1rem;
    position: relative;
    background-color: #0f1924;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: .3s all;
  }
  .header-login .container nav .user-deatils .userImage:hover {
    border: 1px solid white;
  }
  .userImageLink:hover{
    color: white !important;
  }
  .header-login .container nav .user-deatils .userImage p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 1.3rem;
  }

  .header-login .container nav .user-deatils .userImage img {
    display: none;
  }

  .header-login .container nav .user-deatils .cart-btn {
    margin-right: 0.8rem;
  }
  .header-login .container nav .user-deatils .text h3 {
    color: white;
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 0.1rem;
  }
  .header-login .container nav .user-deatils .text p {
    color: white;
    font-size: 0.8rem;
    font-weight: 300;
  }
  .header-login .container nav .user-deatils .text p span {
    font-size: 0.8rem;
    font-weight: 300;
  }
}
@media (min-width: 1024px) {
  .header-login .container {
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    padding: 1.5rem 2rem;
  }
  .header-login .container img {
    margin-top: 0;
    width: 150px;
    position: absolute;
    top: 0;
  }
  .header-login .container nav a {
    font-size: 1.2rem;
    font-weight: 400;
  }
  .header-login .container nav .order-now a {
    font-weight: bold;
  }
  .header-login .container nav .user-deatils svg {
    font-size: 2.3rem;
  }
  .header-login .container nav .user-deatils .text h3 {
    font-size: 1rem;
  }
  .header-login .container nav .user-deatils .text p {
    font-size: 1rem;
  }
  .header-login .container nav .user-deatils .text p span {
    font-size: 1rem;
  }
}
@media (min-width: 1600px) {
  .header-login .container nav .order-now a {
    font-size: 1.4rem;
  }
}

.toggle-login-btn{
  width: 150px;
  text-align: center;
  padding: 0.2rem 2rem !important;
  margin-bottom: 1rem;
}


.cart-hero {
  height: 460px;
  background-image: url(${bgHome});
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart-hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: white;
  font-weight: 600;
}
.cart-hero .link-cards {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}
.cart-hero .link-cards p {
  color: white;
  margin: 0 0.7rem;
}
.cart-hero .link-cards a {
  font-size: 0.9rem;
  color: white;
  background-color: none;
}
.cart-hero .link-cards .active {
  color: #de9692;
  transition: 0.4s all;
}
.cart-hero .link-cards .active:hover {
  color: white;
}
@media (min-width: 500px) {
  .cart-hero h1 {
    font-size: 2.6rem;
  }
}
@media (min-width: 600px) {
  .cart-hero {
    height: 370px;
  }
}
@media (min-width: 768px) {
  .cart-hero h1 {
    font-size: 3.8rem;
  }
}

.container-cart .table-container {
  margin: 0 1rem;
  margin-top: 5rem;
  overflow-x: auto;
}
.container-cart .table-container table {
  border: 1px solid #ebebeb;
}
.container-cart .table-container table thead {
  background-color: #f5f5f5fd;
}
.container-cart .table-container table thead tr {
  display: flex;
  align-items: center;
}
.container-cart .table-container table thead tr th {
  border-right: 1px solid #ebebeb;
  width: 150px;
  padding: 1rem 0;
  color: black;
  font-size: 1.1rem;
  font-weight: 500;
}
.container-cart .table-container table tbody tr {
  display: flex;
}
.container-cart .table-container table tbody tr td {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  border-right: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  width: 150px;
  padding: 1rem 0;
  color: black;
  font-size: 1.1rem;
  font-weight: 500;
}
.container-cart .table-container table tbody tr td img {
  width: 100px;
}
.container-cart .table-container table tbody tr td input {
  width: 50px;
  height: 50px;
  border-radius: 0;
  font-size: 1.3rem;
  text-align: center;
  border: 1px solid #ebebeb;
}
.container-cart .table-container table tbody tr td .plus-minus {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  width: 30px;
  height: 50px;
  background-color: #ebebeb;
}
.container-cart .table-container table tbody tr td .plus-minus .plus {
  margin-top: 0.2rem;
  cursor: pointer;
  transition: 0.4s all;
}
.container-cart .table-container table tbody tr td .plus-minus .minus {
  cursor: pointer;
  transition: 0.4s all;
}
.container-cart .table-container table tbody tr td .plus-minus .plus:hover {
  color: #a41a13;
}
.container-cart .table-container table tbody tr td .plus-minus .minus:hover {
  color: #a41a13;
}
.container-cart .total-container {
  margin: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
}
.container-cart .total-container .total-card {
  border: 1px solid #ebebeb;
}
.container-cart .total-container .total-card h1 {
  background-color: #f5f5f5fd;
  padding: 0.8rem 1.5rem;
  font-size: 1.3rem;
  font-weight: 500;
}
.container-cart .total-container .total-card p {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border-top: 1px solid #ebebeb;
}
.container-cart .total-container .total-card p span {
  font-size: inherit;
}
.container-cart .total-container .total-card .free {
  color: forestgreen;
}
.container-cart .total-container .total-card p:last-of-type {
  border-bottom: 1px solid #ebebeb;
}
.container-cart .total-container .total-card p:last-of-type span {
  font-weight: 600;
}
.container-cart .total-container .total-card a {
  margin: 1rem 0;
  display: block;
  font-size: 1.1rem;
  color: white;
  width: 230px;
  text-align: center;
  margin-left: auto;
  margin-right: 1rem;
  background-color: #a41a13;
  border-radius: 30px;
  padding: 0.5rem 2.5rem;
  transition: 0.4s all;
}
.container-cart .total-container .total-card a:hover {
  background-color: #eec300;
}
@media (min-width: 768px) {
  .container-cart {
    max-width: 1200px;
    margin: 0 auto;
  }
  .container-cart .table-container table thead tr th {
    width: 190px;
    padding: 1.5rem 0;
  }
  .container-cart .table-container table tbody tr td {
    width: 190px;
    height: 170px;
  }
  .container-cart .total-container {
    width: 500px;
    margin-left: auto;
  }
  .header-login-btn{
    padding: 0.4rem 0.7rem !important;
    margin-top: 0rem !important;
  }
}
@media (min-width: 1024px) {
  .container-cart .total-container {
    margin-right: 2.4rem;
  }
  .header-login-btn{
    padding: 0.4rem 2.5rem !important;
    margin-top: 0rem !important;
  }
}

.header-login-btn{
  margin-top: 0.5rem;
  border: 1px solid white;
  padding: 0.2rem 2.3rem;
  transition: 0.3s all;
  background-color: transparent;
  color: white;
}
.header-login-btn:hover{
  color: #a41a13 !important;
  background-color: white !important;
}


.loginErr{
  text-align: center;
  background-color: #eec300;
  color: #a41a13;
  font-size: 1.2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 0.4rem 0;
}
.success{
    text-align: center;
    background-color: rgb(37, 194, 37);
    color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 0.4rem 0;
}


.cart-close-btn{
  cursor: pointer;
  transition: .3s all;

}
.cart-close-btn:hover{
  color: #a41a13;
  font-size: 1.6rem;
}

.product-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.product-btn2{
  background-color: #eec300 !important;
  cursor: unset;
}

.loading{
  padding: 4rem 0;
  display: block;
  margin: 0 auto;
  width: 300px;
  position: relative;
}



// User


.userHero {
  height: 250px;
  background-image: url(bgHome);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.userHero h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: white;
  font-weight: 600;
}
.userHero .link-cards {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}
.userHero .link-cards p {
  color: white;
  margin: 0 0.7rem;
}
.userHero .link-cards a {
  font-size: 0.9rem;
  color: white;
  background-color: none;
}
.userHero .link-cards .active {
  color: #de9692;
  transition: 0.4s all;
}
.userHero .link-cards .active:hover {
  color: white;
}
@media (min-width: 500px) {
  .userHero h1 {
    font-size: 2.6rem;
  }
}
@media (min-width: 600px) {
  .userHero {
    height: 370px;
  }
}
@media (min-width: 768px) {
  .userHero h1 {
    font-size: 3.8rem;
  }
}

.userContainer {
  display: grid;
  padding: 3rem 0;
}
.userContainer .userMenu {
  display: flex;
  flex-direction: column;
}
.userContainer .userMenu a {
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  background-color: #242424;
  margin-top: 0.2rem;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  color: white;
  font-size: 0.9rem;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
}
.userContainer .userMenu a:last-of-type {
  margin-bottom: 0.2rem;
}
.userContainer .userMenu a:hover {
  background-color: #a41a13;
}
.userContainer .userMenu .userActive {
  background-color: #a41a13;
}
@media (min-width: 768px) {
  .userContainer {
    grid-template-columns: 30% 70%;
    margin: 0 auto;
  }
}
@media (min-width: 1024px) {
  .userContainer {
    max-width: 1200px;
  }
}
@media (min-width: 1600px) {
  .userContainer {
    max-width: 1600px;
  }
}

.userInfoContainer .detailsInfo {
  margin-top: 1rem;
}
.userInfoContainer .detailsInfo .card {
  padding: 0.5rem;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 90%;
  max-width: 450px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userInfoContainer .detailsInfo .card .avatarNoImage {
  margin: 1rem 0;
  margin-bottom: 1.5rem;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #242424;
}
.userInfoContainer .detailsInfo .card .avatarNoImage .avatarName {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.6rem;
}
.userInfoContainer .detailsInfo .card .avatarNoImage .editBtn {
  position: absolute;
  right: 5px;
  bottom: 0px;
  color: white;
  background-color: #eec300;
  border-radius: 50%;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  transition: 0.4s all;
  cursor: pointer;
}
.userInfoContainer .detailsInfo .card .avatarNoImage .editBtn:hover {
  background-color: #a41a13;
}
.userInfoContainer .detailsInfo .card .avatarImageContainer {
  display: none;
}
.userInfoContainer .detailsInfo .card .text {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;
}
.userInfoContainer .detailsInfo .card .text h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.userInfoContainer .detailsInfo .card .text h3 span {
  display: inline-block;
  margin-left: 0.3rem;
  font-size: 1rem;
  font-weight: 400;
}
.userInfoContainer .detailsInfo .thanks {
  text-align: center;
  padding: 1.5rem;
  max-width: 450px;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
}
.userInfoContainer .detailsInfo .thanks p {
  font-size: 1rem;
  font-weight: 500;
}
.userInfoContainer .detailsInfo .thanks p span {
  font-weight: bold;
  font-size: inherit;
  color: #a41a13;
}
.userInfoContainer .detailsInfo .thanks p:first-of-type {
  margin-bottom: 0.5rem;
}
.userInfoContainer .detailsInfo .userFavoriteBtn {
  display: block;
  background-color: white;
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 15px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  background-color: #eec300;
  color: white;
  font-size: 1rem;
  text-align: center;
  transition: 0.4s all;
  max-height: 70px;
}
.userInfoContainer .detailsInfo .userFavoriteBtn:hover {
  background-color: #a41a13;
}
.userInfoContainer .detailsInfo .activity {
  padding: 1rem;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 1rem;
  width: 90%;
  max-width: 450px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.userInfoContainer .detailsInfo .activity .box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.userInfoContainer .detailsInfo .activity .box svg {
  font-size: 2.8rem;
  color: #242424;
}
.userInfoContainer .detailsInfo .activity .box p {
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 500;
}
.userInfoContainer .detailsInfo .activity .box p span {
  font-weight: bold;
  color: #a41a13;
  font-size: inherit;
}
.userInfoContainer .detailsInfo .activity .box:first-of-type {
  margin-bottom: 1.5rem;
}
.userInfoContainer .detailsInfo .activity .box:first-of-type svg {
  color: #a41a13;
}
.userInfoContainer .ordersInfo {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.userInfoContainer .ordersInfo .order {
  max-width: 450px;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 90%;
  border-radius: 15px;
  background-color: #eec300;
  text-align: center;
  padding: 1rem;
}
.userInfoContainer .ordersInfo .order h1 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.userInfoContainer .ordersInfo .order h1 span {
  font-size: inherit;
  font-weight: bold;
  color: #a41a13;
}
.userInfoContainer .ordersInfo .order p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.userInfoContainer .ordersInfo .order p span {
  font-size: inherit;
  font-weight: bold;
  color: #a41a13;
}
.userInfoContainer .ordersInfo .order h2 {
  font-size: 1rem;
}
.userInfoContainer .ordersInfo .order h2 span {
  font-size: inherit;
  font-weight: bold;
  color: #a41a13;
}
.userInfoContainer .favoriteInfo {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}
.userInfoContainer .favoriteInfo .favoriteCard {
  background-color: white;
  border-radius: 15px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;
  transition: 0.4s all;
}
.userInfoContainer .favoriteInfo .favoriteCard img {
  width: 150px;
  margin-bottom: 0.5rem;
}
.userInfoContainer .favoriteInfo .favoriteCard h1 {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}
.userInfoContainer .favoriteInfo .favoriteCard p {
  font-size: 1.2rem;
  font-weight: 500;
}
.userInfoContainer .favoriteInfo .favoriteCard p span {
  font-size: inherit;
  color: #a41a13;
  font-weight: bold;
}
.userInfoContainer .favoriteInfo .favoriteCard:hover {
  background-color: #242424;
  color: white;
}
.userInfoContainer .favoriteInfo .favoriteCard:hover span {
  color: #eec300;
}
.userInfoContainer .accountInfo {
  margin-top: 2rem;
}
.userInfoContainer .accountInfo .card .box {
  width: 90%;
  max-width: 450px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: #242424;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.userInfoContainer .accountInfo .card .box p:first-of-type {
  margin-top: 0;
}
.userInfoContainer .accountInfo .card .box p {
  font-size: 1rem;
  color: white;
  margin: 0.5rem 0;
}
.userInfoContainer .accountInfo .card .box .inputBox {
  display: flex;
  align-items: center;
}
.userInfoContainer .accountInfo .card .box .inputBox input {
  width: 80%;
  font-size: 1rem;
  border-radius: 5px 0 0 5px;
  border-right: none;
}
.userInfoContainer .accountInfo .card .box .inputBox button {
  width: 20%;
  height: 28px;
  border-radius: 0 5px 5px 0;
}
.userInfoContainer .accountInfo .card a {
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  background-color: #242424;
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  display: block;
  color: #a41a13;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 15px;
  text-align: center;
  padding: 1rem;
  transition: 0.4s all;
  margin-top: 1rem;
}
.userInfoContainer .accountInfo .card a:hover {
  color: #eec300;
}
@media (min-width: 768px) {
  .userInfoContainer .detailsInfo {
    margin-top: 0.3rem;
    margin-right: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  .userInfoContainer .detailsInfo .card {
    margin: 0;
  }
  .userInfoContainer .detailsInfo .thanks {
    margin: 0;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .userInfoContainer .detailsInfo .userFavoriteBtn {
    margin: 0;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .userInfoContainer .detailsInfo .activity {
    margin-top: 0rem;
  }
  .userInfoContainer .ordersInfo {
    margin-top: 0rem;
    grid-template-columns: 1fr 1fr;
  }
  .userInfoContainer .favoriteInfo {
    margin-top: 0rem;
    grid-column-gap: 0;
    grid-template-columns: 1fr 1fr;
  }
  .userInfoContainer .accountInfo {
    margin-top: 0rem;
  }
  .userInfoContainer .accountInfo .card {
    margin: 0;
    margin-left: 1rem;
  }
  .userInfoContainer .accountInfo .card .box {
    margin: 0;
    margin-top: 1rem;
  }
  .userInfoContainer .accountInfo .card .box:first-of-type {
    margin-top: 0;
  }
  .userInfoContainer .accountInfo .card a {
    margin: 0;
    margin-top: 1rem;
  }
}
@media (min-width: 1024px) {
  .userInfoContainer .detailsInfo {
    grid-template-columns: 1fr 1fr;
  }
  .userInfoContainer .detailsInfo .activity {
    margin-top: 0rem;
  }
  .userInfoContainer .detailsInfo .thanks {
    margin-top: 1rem;
  }
  .userInfoContainer .ordersInfo {
    grid-column-gap: 0;
    grid-template-columns: 1fr 1fr;
  }
  .userInfoContainer .favoriteInfo {
    grid-column-gap: 0;
    grid-template-columns: 1fr 1fr;
  }
  .userInfoContainer .accountInfo .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .userInfoContainer .accountInfo .card .box {
    margin-top: 0;
  }
}
@media (min-width: 1600px) {
  .userInfoContainer .detailsInfo {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .userInfoContainer .detailsInfo .thanks {
    margin-top: 0;
  }
  .userInfoContainer .ordersInfo {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .userInfoContainer .favoriteInfo {
    margin-top: 0rem;
    grid-column-gap: 0;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .userInfoContainer .accountInfo .card {
    justify-items: center;
  }
  .userInfoContainer .accountInfo .card .box {
    max-width: 600px;
    padding: 2.1rem;
  }
  .userInfoContainer .accountInfo .card a {
    max-width: 500px;
  }
}
.userDetailsMain {
  background-color: rgba(202, 202, 202, 0.5137254902);
}


.notFound{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
} 

.notFound img{
  width: 270px;
}

.header-icon{
  font-size: 1.5rem;
  color: white;
  transition: .3s all;
}
.header-icon:hover{
  color: #eec300;
}

.iconsContainer{
  display: flex;
  align-items: center;
  gap: 1.5rem;
}


@media (min-width: 768px) {

  .iconsContainer .header-icon{
    display: none;
  }
}
`;
