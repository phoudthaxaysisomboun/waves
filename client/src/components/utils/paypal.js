import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout'
import { shape } from 'prop-types';

class Paypal extends Component {

    render() {

        const onSuccess = (payment) => {
            // console.log(JSON.stringify(payment))
            this.props.onSuccess(payment)

            //{"paid":true,"cancelled":false,"payerID":"LRRAMLAG3HAJJ","paymentID":"PAYID-LSME2SI2MP16546N09669026","paymentToken":"EC-0HE71318YN761393D","returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-LSME2SI2MP16546N09669026&token=EC-0HE71318YN761393D&PayerID=LRRAMLAG3HAJJ","address":{"recipient_name":"Phoudthaxay Sisomboun","line1":"1 Main St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US"},"email":"xigh@test.com"}
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (er) => {
            console.log(JSON.stringify(er))
        }

        let env = 'sandbox'
        let currency = 'USD'
        let total = this.props.toPay

        const client = {
            sandbox: 'AaeXdXLTpjq2Q6ViDGWSGZ6hENGY_zZ4ZjTMbGMkgu_VG0GkvcMRoT_eF9IAhUN-Z96w_7NlzrTxoCoB',
            production: ''
        }

        return (
            <div>
                <PaypalExpressBtn 
                    env = {env}
                    client = {client}
                    currency = {currency}
                    total = {total}
                    onError = {onError}
                    onSuccess = {onSuccess}
                    onCancel = {onCancel}
                    style = {{
                        size: 'large',
                        color: 'blue',
                        shape: 'rect',
                        
                    }}
                />
            </div>
        );
    }
}

export default Paypal;