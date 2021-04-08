
import {getData} from '../utils/fetchData'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'



const Checkout = () => {

    const initialState  = {name: '', email:''}
    const [state, dispatch] = useContext(DataContext)
    const {auth, cart} = state

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
              return prev + (item.price * item.quantity)
            },0)
      
            setTotal(res)
          }
      
          getTotal()
    },[cart])


    if(!auth.user) return null
    
  return (

    <div >


    
    <div className="banner">
        <div className="wrap">
            <a href="/" className="logo">
                <h1 className="logo-text">HT Store</h1>
            </a>
        </div>
    </div>
    
    
    <div className="content">

        <div className="wrap">
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="order-summary order-summary-is-collapsed">
                        <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                        <div className="order-summary-sections">
                            <div className="order-summary-section order-summary-section-product-list" data-order-summary-section="line-items">
                                <table className="product-table">
                                    <thead>
                                        <tr>
                                            <th scope="col"><span className="visually-hidden">Hình ảnh</span></th>
                                            <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                                            <th scope="col"><span className="visually-hidden">Số lượng</span></th>
                                            <th scope="col"><span className="visually-hidden">Giá</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map(item => (
                                                <tr className="product" data-product-id="1030328923" data-variant-id="1066419252">
                                                <td className="product-image">
                                                    <div className="product-thumbnail">
                                                        <div className="product-thumbnail-wrapper">
                                                            <img className="product-thumbnail-image" alt="SAIGON SPIRIT WASH TEE" src={item.images[0].url} alt={item.images[0].url}/>
                                                        </div>
                                                        <span className="product-thumbnail-quantity">{item.quantity}</span>
                                                    </div>
                                                </td>
                                                <td className="product-description">
                                                    <span className="product-description-name order-summary-emphasis">{item.title}</span>
    
                                                    <span className="product-description-variant order-summary-small-text">
                                                                S
                                                            </span>
    
                                                </td>
                                                <td className="product-quantity visually-hidden">1</td>
                                                <td className="product-price">
                                                    <span className="order-summary-emphasis">${item.price}</span>
                                                </td>
                                            </tr>
                                            ))
                                        }
                                        

                                    </tbody>
                                </table>
                            </div>

                            <div className="order-summary-section order-summary-section-discount" data-order-summary-section="discount">
                                <form id="form_discount_add" acceptCharset="UTF-8" method="post">
                                    <input name="utf8" type="hidden" defaultValue="✓"/>
                                    <div className="fieldset">
                                        <div className="field  ">
                                            <div className="field-input-btn-wrapper">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="discount.code">Mã giảm giá</label>
                                                    <input placeholder="Mã giảm giá" className="field-input" data-discount-field="true" autoComplete="off" autoCapitalize="off" spellCheck="false" size="30" type="text" id="discount.code" name="discount.code" defaultValue=""/>
                                                </div>
                                                <button type="submit" className="field-input-btn btn btn-default btn-disabled">
                                                        <span className="btn-content">Sử dụng</span>
                                                        <i className="btn-spinner icon icon-button-spinner"></i>
                                                    </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div className="order-summary-section order-summary-section-total-lines payment-lines" data-order-summary-section="payment-lines">
                                <table className="total-line-table">
                                    <thead>
                                        <tr>
                                            <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                                            <th scope="col"><span className="visually-hidden">Giá</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="total-line total-line-subtotal">
                                            <td className="total-line-name">Tạm tính</td>
                                            <td className="total-line-price">
                                                <span className="order-summary-emphasis" data-checkout-subtotal-price-target="">
                                                    {total}₫
                                                </span>
                                            </td>
                                        </tr>

                                        <tr className="total-line total-line-shipping">
                                            <td className="total-line-name">Phí vận chuyển</td>
                                            <td className="total-line-price">
                                                <span className="order-summary-emphasis" data-checkout-total-shipping-target="0">
                                                    
                                                        —
                                                    
                                                </span>
                                            </td>
                                        </tr>

                                    </tbody>
                                    <tfoot className="total-line-table-footer">
                                        <tr className="total-line">
                                            <td className="total-line-name payment-due-label">
                                                <span className="payment-due-label-total">Tổng cộng</span>
                                            </td>
                                            <td className="total-line-name payment-due">
                                                <span className="payment-due-currency">VND</span>
                                                <span className="payment-due-price" data-checkout-payment-due-target="">
                                                    {total}
                                                </span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="main-header">
                    

                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/cart">Giỏ hàng</a>
                        </li>

                        <li className="breadcrumb-item breadcrumb-item-current">
                            Thông tin giao hàng
                        </li>

                    </ul>

                </div>
                <div className="main-content">

                    <div className="step">
                        <div className="step-sections steps-onepage" step="1">


                            <div className="section">
                                <div className="section-header">
                                    <h2 className="section-title">Thông tin giao hàng</h2>
                                </div>
                                <div className="section-content section-customer-information no-mb">


                                    <p className="section-content-text">
                                        Bạn đã có tài khoản?
                                        <a href="/account/login?urlredirect=%2Fcheckouts%2F9bb14289e81f499cb931125acfc0e1b2%3Fstep%3D1">Đăng nhập</a>
                                    </p>


                                    <div className="fieldset">


                                        <div className="field field-required  ">
                                            <div className="field-input-wrapper">
                                                <label className="field-label" htmlFor="billing_address_full_name">Họ và tên</label>
                                                <input placeholder="Họ và tên" autoCapitalize="off" spellCheck="false" className="field-input" size="30" type="text" id="billing_address_full_name" name="billing_address[full_name]" defaultValue={auth.user.name} />
                                            </div>

                                        </div>



                                        <div className="field field-required field-two-thirds  ">
                                            <div className="field-input-wrapper">
                                                <label className="field-label" htmlFor="checkout_user_email">Email</label>
                                                <input placeholder="Email" autoCapitalize="off" spellCheck="false" className="field-input" size="30" type="email" id="checkout_user_email" name="checkout_user[email]" defaultValue={auth.user.email}/>
                                            </div>

                                        </div>



                                        <div className="field field-required field-third  ">
                                            <div className="field-input-wrapper">
                                                <label className="field-label" htmlFor="billing_address_phone">Số điện thoại</label>
                                                <input placeholder="Số điện thoại" autoCapitalize="off" spellCheck="false" className="field-input" size="30" maxLength="15" type="tel" id="billing_address_phone" name="billing_address[phone]" defaultValue={auth.user.phone}/>
                                            </div>

                                        </div>


                                        <div className="field field-required  ">
                                            <div className="field-input-wrapper">
                                                <label className="field-label" htmlFor="billing_address_address1">Địa chỉ</label>
                                                <input placeholder="Địa chỉ" autoCapitalize="off" spellCheck="false" className="field-input" size="30" type="text" id="billing_address_address1" name="billing_address[address1]" defaultValue={auth.user.address.diaChi}/>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="section-content">
                                    <div className="fieldset">

                                        <form id="form_update_location" className="clearfix order-checkout__loading" acceptCharset="UTF-8" method="post">
                                            <input name="selected_customer_shipping_province" type="hidden" defaultValue=""/>
                                            <input name="selected_customer_shipping_district" type="hidden" defaultValue=""/>
                                            <input name="selected_customer_shipping_ward" type="hidden" defaultValue=""/>
                                            <input name="utf8" type="hidden" defaultValue="✓"/>
                                            <div className="order-checkout__loading--box">
                                                <div className="order-checkout__loading--circle"></div>
                                            </div>

                                            <div className="field field-show-floating-label field-required field-third ">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="customer_shipping_province"> Tỉnh / thành  </label>
                                                    <input type='text' defaultValue={auth.user.address.tinhThanhPho} className="field-input" id="customer_shipping_province" name="customer_shipping_province" />
                                                                
                                                </div>

                                            </div>


                                            <div className="field field-show-floating-label field-required field-third ">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="customer_shipping_district">Quận / huyện</label>
                                                    <input type='text' defaultValue={auth.user.address.quanHuyen} className="field-input" id="customer_shipping_district" name="customer_shipping_district"/>
                                                </div>

                                            </div>

                                            <div className="field field-show-floating-label field-required  field-third  ">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="customer_shipping_ward">Phường / xã</label>
                                                    <input type='text' defaultValue={auth.user.address.phuongXa} className="field-input" id="customer_shipping_ward" name="customer_shipping_ward"/>
                                                </div>

                                            </div>



                                        </form>

                                    </div>
                                    
                                </div>
                                <div id="change_pick_location_or_shipping">



                                    <div id="section-shipping-rate">
                                        <div className="section-header">
                                            <h2 className="section-title">Phương thức vận chuyển</h2>
                                        </div>
                                        <div className="section-content">

                                            <div className="content-box  blank-slate">
                                                <i className="blank-slate-icon icon icon-closed-box "></i>
                                                <p>Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển.</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div id="section-payment-method" className="section">
                                        <div className="section-header">
                                            <h2 className="section-title">Phương thức thanh toán</h2>
                                        </div>
                                        <div className="section-content">
                                            <div className="content-box">


                                                <div className="radio-wrapper content-box-row">
                                                    <label className="radio-label" defaultValue="payment_method_id_941686">
                                                                    <div className="radio-input">
                                                                        <input id="payment_method_id_941686" className="input-radio" name="payment_method_id" type="radio" defaultValue="941686" defaultChecked/>
                                                                    </div>
                                                                    <span className="radio-label-primary">Thanh toán khi giao hàng (COD)</span>
                                                                </label>
                                                </div>



                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="step-footer">

                            <form id="form_next_step" acceptCharset="UTF-8" method="post">
                                <input name="utf8" type="hidden" defaultValue="✓"/>
                                <button type="submit" className="step-footer-continue-btn btn">
                                            <span className="btn-content">Hoàn tất đơn hàng</span>
                                            <i className="btn-spinner icon icon-button-spinner"></i>
                                        </button>
                            </form>
                            <a className="step-footer-previous-link" href="/cart">
                                <svg className="previous-link-icon icon-chevron icon" xmlns="http://www.w3.org/2000/svg" width="6.7" height="11.3" viewBox="0 0 6.7 11.3"><path d="M6.7 1.1l-1-1.1-4.6 4.6-1.1 1.1 1.1 1 4.6 4.6 1-1-4.6-4.6z"></path></svg> Giỏ
                                hàng
                            </a>

                        </div>
                    </div>

                </div>
                <div className="main-footer">

                </div>
            </div>
        </div>

    </div>

</div>
)
  
}
export default Checkout