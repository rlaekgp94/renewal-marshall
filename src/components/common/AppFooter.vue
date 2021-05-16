<template>
  <footer id="footer">
    <div class="footer-top-wrap">
      <div class="footer-top">
        <div class="customer-wrap">
          <p>CUSTOMER SERVICE</p>
          <ul>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">BUSINESS CUSTOMERS</a></li>
            <li><a href="#">AUTHORISED RETAILERS</a></li>
            <li><a href="#">DELIVERY TIMES</a></li>
            <li><a href="#">EXCHANGE AND RETURN</a></li>
            <li><a href="#">USER MANUALS</a></li>
            <li><a href="#">HELP CENTRE</a></li>
            <li><a href="#">SHIPPING UPDATE - COVID-19</a></li>
          </ul>
        </div>
        <div class="policies-wrap">
          <p>POLICIES</p>
          <ul>
            <li><a href="#">SECURITY</a></li>
            <li><a href="#">TERMS OF USE</a></li>
            <li><a href="#">TERMS OF PURCHASE</a></li>
            <li><a href="#">PAYMENT METHODS</a></li>
            <li><a href="#">DECLARATION OF CONFORMITY</a></li>
            <li><a href="#">GLOBAL WARRANTY</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">COOKIES</a></li>
          </ul>
        </div>
        <div class="press-wrap">
          <p>PRESS</p>
          <ul>
            <li><a href="#">PRESS ROOM</a></li>
          </ul>
        </div>
        <div class="subscribe">
          <p>SIGN UP FOR OUR NEWSLETTER</p>
          <span>Get 10 % off on your first order.</span>
          <input
            type="text"
            placeholder="Your email address goes here"
            maxlength="20"
            minlength="2"
            autocomplete="off"
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom-wrap">
      <div class="footer-bottom">
        <p>©2020 ZOUND INDUSTRIES. ALL RIGHTS RESERVED. ORG. NR 5567574610</p>
        <div class="safe-payments">
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw4e75c85b/images/payment-methods/Amex_neg.svg"
            alt="American Express"
          />
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw820e0b5e/images/payment-methods/Mastercard_horizontal_neg.svg"
            alt="Mastercard"
          />
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw04337432/images/payment-methods/Visa_neg.svg"
            alt="Visa"
          />
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw17c504e2/images/payment-methods/Discover_neg.svg"
            alt="Discover"
          />
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9e123cd0/images/payment-methods/Diners_horizontal_neg.svg"
            alt="Diners"
          />
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb6cc1da1/images/payment-methods/Maestro_horizontal_neg.svg"
            alt="Maestro"
          />
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw29c26121/images/payment-methods/jcb_neg.svg"
            alt="JCB"
          />
          <img
            src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2405c4db/images/payment-methods/PayPal_horizontal_neg.svg"
            alt="PayPal"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  width: 100%;
  height: 75vh;
  background: #000;
  display: flex;
  flex-direction: column;
}

.footer-top-wrap {
  width: 100%;
  height: 50vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-top {
  display: flex;
  width: 92.5vw;
  height: auto;
  justify-content: space-between;
}

.footer-top div {
  width: 30%;
  overflow: hidden;
}

.footer-top div p {
  font-size: 1rem;
  color: #fff;
  padding-bottom: 1.25rem;
}

.footer-top div span {
  font-size: 0.85rem;
  color: #959595;
}

.footer-top div ul li a {
  font-size: 0.75rem;
  color: #959595;
  line-height: 1.5rem;
}

.footer-top div ul li a:hover {
  text-decoration: underline;
}

.subscribe input {
  width: 100%;
  height: 3rem;
  outline: none;
  border: none;
  font-size: 1rem;
  text-indent: 1rem;
  margin: 5.25rem 0 1rem;
}

.subscribe button {
  width: 100%;
  height: 3rem;
  outline: none;
  border: none;
  background: #222222;
  font-size: 0.85rem;
  font-weight: bold;
  color: #fff;
}

.footer-bottom-wrap {
  width: 100%;
  height: 25vh;
  background: #000;
  border-top: 1px solid #2a2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-bottom {
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-bottom p {
  color: #898989;
  text-align: center;
  font-size: 0.75rem;
}

.safe-payments {
  width: 40%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.safe-payments img {
  width: 40px;
  height: 29px;
}
</style>
