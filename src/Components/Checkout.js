import React, { useState } from 'react';
import './CSS/Checkout.css';

const countryStateData = {
  'United States': [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ],
  Canada: [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 
    'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'
  ]
};

const defaultCartItems = [
  { name: 'Item 1', quantity: 1, price: 29.99 },
  { name: 'Item 2', quantity: 2, price: 19.99 }
];
const defaultTotalPrice = defaultCartItems.reduce((total, item) => total + item.quantity * item.price, 0);

function Checkout() {
  const [cartItems] = useState(defaultCartItems);
  const [totalPrice] = useState(defaultTotalPrice);
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [states, setStates] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [ccName, setCcName] = useState('');
  const [ccNumber, setCcNumber] = useState('');
  const [ccExpiration, setCcExpiration] = useState('');
  const [ccCvv, setCcCvv] = useState('');

  const [errors, setErrors] = useState({});

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setStates(countryStateData[selectedCountry] || []);
    setState('');
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value.replace(/[^0-9]/g, ''));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!firstName) formErrors.firstName = 'Valid first name is required.';
    if (!lastName) formErrors.lastName = 'Valid last name is required.';
    if (!phoneNumber) formErrors.phoneNumber = 'Your phone number is required.';
    if (!email) formErrors.email = 'Please enter a valid email address for shipping updates.';
    if (email !== confirmEmail) formErrors.confirmEmail = 'The email address did not match.';
    if (!address) formErrors.address = 'Please enter your shipping address.';
    if (!country) formErrors.country = 'Please select a valid country.';
    if (!state) formErrors.state = 'Please provide a valid state.';
    if (!postalCode) formErrors.postalCode = 'Postal code required.';
    if (!ccName) formErrors.ccName = 'Name on card is required';
    if (!ccNumber) formErrors.ccNumber = 'Credit card number is required';
    if (!ccExpiration) formErrors.ccExpiration = 'Expiration date required';
    if (!ccCvv) formErrors.ccCvv = 'Security code required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 处理表单提交
    }
  };

  return (
    <div className="checkout-container">
      <div className="row">
        <div className="col-main">
          <h4 className="section-title">Shipping detail</h4>
          <form className="form" noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-half">
                <label htmlFor="firstName">First name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  id="firstName" 
                  placeholder="Enter your First name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required 
                />
                {errors.firstName && <div className="feedback">{errors.firstName}</div>}
              </div>
              <div className="col-half">
                <label htmlFor="lastName">Last name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  id="lastName" 
                  placeholder="Enter your Last name" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required 
                />
                {errors.lastName && <div className="feedback">{errors.lastName}</div>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input 
                type="text" 
                className="form-input" 
                id="phoneNumber" 
                placeholder="Enter your phone number" 
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required 
              />
              {errors.phoneNumber && <div className="feedback">{errors.phoneNumber}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input 
                type="email" 
                className="form-input" 
                id="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="feedback">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmEmail">Confirm Email </label>
              <input 
                type="email" 
                className="form-input" 
                id="confirmEmail" 
                placeholder="Confirm your email address" 
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
              {errors.confirmEmail && <div className="feedback">{errors.confirmEmail}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                className="form-input" 
                id="address" 
                placeholder="Enter your shipping address" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required 
              />
              {errors.address && <div className="feedback">{errors.address}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input 
                type="text" 
                className="form-input" 
                id="address2" 
                placeholder="Apartment or suite" 
              />
            </div>

            <div className="row">
              <div className="col-5">
                <label htmlFor="country">Country</label>
                <select 
                  className="form-select" 
                  id="country" 
                  value={country} 
                  onChange={handleCountryChange} 
                  required
                >
                  <option value="">Choose...</option>
                  {Object.keys(countryStateData).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && <div className="feedback">{errors.country}</div>}
              </div>
              <div className="col-4">
                <label htmlFor="state">State</label>
                <select 
                  className="form-select" 
                  id="state" 
                  value={state} 
                  onChange={(e) => setState(e.target.value)} 
                  required
                >
                  <option value="">Choose...</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <div className="feedback">{errors.state}</div>}
              </div>
              <div className="col-3">
                <label htmlFor="zip">Postal code</label>
                <input 
                  type="text" 
                  className="form-input" 
                  id="zip" 
                  placeholder="Postal code" 
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required 
                />
                {errors.postalCode && <div className="feedback">{errors.postalCode}</div>}
              </div>
            </div>
            <hr className="divider" />
            <div className="custom-control">
              <input type="checkbox" className="custom-checkbox" id="same-address" />
              <label className="custom-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div className="custom-control">
              <input type="checkbox" className="custom-checkbox" id="save-info" />
              <label className="custom-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="divider" />

            <h4 className="section-title">Payment</h4>
            <p>Credit card only</p>
            <div className="row">
              <div className="col-half">
                <label htmlFor="cc-name">Name on card</label>
                <input 
                  type="text" 
                  className="form-input" 
                  id="cc-name" 
                  placeholder="" 
                  value={ccName}
                  onChange={(e) => setCcName(e.target.value)}
                  required 
                />
                <small className="small-text">Full name as displayed on card</small>
                {errors.ccName && <div className="feedback">{errors.ccName}</div>}
              </div>
              <div className="col-half">
                <label htmlFor="cc-number">Credit card number</label>
                <input 
                  type="text" 
                  className="form-input" 
                  id="cc-number" 
                  placeholder="" 
                  value={ccNumber}
                  onChange={(e) => setCcNumber(e.target.value)}
                  required 
                />
                {errors.ccNumber && <div className="feedback">{errors.ccNumber}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-half">
                <label htmlFor="cc-expiration">Expiration</label>
                <input 
                  type="text" 
                  className="form-input small" 
                  id="cc-expiration" 
                  placeholder="" 
                  value={ccExpiration}
                  onChange={(e) => setCcExpiration(e.target.value)}
                  required 
                />
                {errors.ccExpiration && <div className="feedback">{errors.ccExpiration}</div>}
              </div>
              <div className="col-half">
                <label htmlFor="cc-cvv">CVV</label>
                <input 
                  type="text" 
                  className="form-input small" 
                  id="cc-cvv" 
                  placeholder="" 
                  value={ccCvv}
                  onChange={(e) => setCcCvv(e.target.value)}
                  required 
                />
                {errors.ccCvv && <div className="feedback">{errors.ccCvv}</div>}
              </div>
            </div>
            <hr className="divider" />
            <button className="btn-submit" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
        <div className="col-aside">
          <h4 className="cart-title">Your cart</h4>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <h6 className="item-name">{item.name}</h6>
                  <small className="item-quantity">Quantity: {item.quantity}</small>
                </div>
                <span className="item-price">${item.price}</span>
              </li>
            ))}
            <li className="cart-total">
              <span>Total (USD)</span>
              <strong>${totalPrice}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
