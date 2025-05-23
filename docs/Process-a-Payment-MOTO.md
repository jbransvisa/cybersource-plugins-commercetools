# Process a Payment (MOTO)

MOTO transactions are Mail order/telephone order transactions. As the name suggests, the transaction will be initiated by the Merchant on behalf of customer. The required order information along with the billing details and payments details are collected from the customer through mail or telephone.

For the Commercetools Extension to support MOTO transaction, follow the steps mentioned below.

## Details

1.  Prepare your cart

    a. Ensure the cart origin set to 'Merchant' (Refer documentation for more information <https://docs.commercetools.com/api/projects/carts#cartorigin>)

    b. Ensure your cart locale is set

    c. Ensure the cart billing and shipping addresses are set. The default mapping of Commercetools address fields to Cybersource fields is as follows

    > **_NOTE:_** : If the cart has multiple shipping methods, the shipping address of the first available shipping method applied to the cart will be used to process the payment

    | Commercetools address       | Cybersource shipping fields | Cybersource billing fields | Notes                                                                                                                |
    | --------------------------- | --------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
    | firstName                   | shipTo_firstName            | billTo_firstName           |                                                                                                                      |
    | lastName                    | shipTo_lastName             | billTo_lastName            |                                                                                                                      |
    | streetNumber and streetName | shipTo_address1             | billTo_address1            | If both values populated they are concatenated together with a space between. Otherwise streetName is used by itself |
    | city                        | shipTo_city                 | billTo_city                |                                                                                                                      |
    | postalCode                  | shipTo_postalCode           | billTo_postalCode          |                                                                                                                      |
    | region                      | shipTo_state                | billTo_state               |                                                                                                                      |
    | country                     | shipTo_country              | billTo_country             |                                                                                                                      |
    | email                       | shipTo_email                | billTo_email               |                                                                                                                      |

2.  Tokenize Card details using Cybersource Microform v2.(Skip this step if the payment method is not Card Payment and proceed to step 4)

        Skip this step when using a saved token for a Card payment method and proceed to step 3

    a. Create a Commercetools payment (https://docs.commercetools.com/api/projects/payments) and populate the following

    | Property                           | Value                               | Required  | Notes                                                                                                                                                                                                                                                                                                              |
    | ---------------------------------- | ----------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | customer                           | Reference to Commercetools customer | See notes | Required for non-guest checkout. If using MyPayments API this will automatically be set to the logged in customer. One of customer or anonymousId must be populated. If using the Payments endpoint , for non-guest checkout , customerId needs to be set while updating the payment , using 'setCustomer' action. |
    | anonymousId                        | Id for tracking guest checkout      | See notes | Required for guest checkout. If using MyPayments API this will automatically be set. One of customer or anonymousId must be populated                                                                                                                                                                              |
    | paymentMethodInfo.paymentInterface | Cybersource                         | Yes       |                                                                                                                                                                                                                                                                                                                    |
    | paymentMethodInfo.method           | creditCard                          | Yes       |                                                                                                                                                                                                                                                                                                                    |
    | custom.type.key                    | isv_payment_data                    | Yes       | Required to update the custom fields, while updating payment                                                                                                                                                                                                                                                       |
    | custom.fields.isv_merchantId                      | Merchant Id used for the transaction                               | No       |             Required when you want to support Multi-Mid functionality. Populate this field with the value of merchant Id in which the transaction should happen. When this field is empty, default mid configuration will be considered for the transaction. The same mid will be used for the follow-on transactions.                                                                                                                                                                                                                                                                                                     |

    b. The response should have the `isv_tokenCaptureContextSignature` and `isv_tokenVerificationContext` custom fields, set the `isv_tokenCaptureContextSignature` custom field value to the captureContext of flex object which will load Cybersource Microform

        flexInstance = new Flex(captureContext);

    c. Use the Microform Integration V2 to tokenize card details. See <https://github.com/CyberSource/cybersource-flex-samples-node> for an example of how to use the captureContext obtained above and the Microform JS to tokenize a Card

3.  For saved token of a Card payment method, create a Commercetools payment (https://docs.commercetools.com/api/projects/payments) and populate the following

    | Property                              | Value                               | Required  | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | ------------------------------------- | ----------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | customer                              | Reference to Commercetools customer | See notes | Required for non-guest checkout. If using MyPayments API this will automatically be set to the logged in customer. One of customer or anonymousId must be populated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | anonymousId                           | Id for tracking guest checkout      | See notes | Required for guest checkout. If using MyPayments API this will automatically be set. One of customer or anonymousId must be populated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | amountPlanned                         | Amount to be processed              | Yes       | Should match cart gross total, unless split payments are being used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | paymentMethodInfo.paymentInterface    | Cybersource                         | Yes       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | paymentMethodInfo.method              | creditCard                          | Yes       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | custom.type.key                       | isv_payment_data                    | Yes       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | custom.fields.isv_savedToken          | Saved token value                   | Yes       | custom.fields.isv_tokens's "paymentToken" value from Customer object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | custom.fields.isv_tokenAlias          | Alias for saved token               | No        | custom.fields.isv_tokens's "alias" value from Customer object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | custom.fields.isv_maskedPan           | Masked Card number           | No        | custom.fields.isv_tokens's "cardNumber" value from Customer object. <br>Not required by extension but can be used for display                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | custom.fields.isv_cardType            | Card type                    | No        | custom.fields.isv_tokens's "cardType" value from Customer object. <br>Not required by extension but can be used for display                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | custom.fields.isv_cardExpiryMonth     | Card expiry month                   | No        | custom.fields.isv_tokens's "cardExpiryMonth" value from Customer object <br>Not required by extension but can be used for display                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | custom.fields.isv_cardExpiryYear      | Card expiry year                    | No        | custom.fields.isv_tokens's "cardExpiryYear" value from Customer object <br>Not required by extension but can be used for display                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | custom.fields.isv_deviceFingerprintId | Customer device fingerprint Id      | Yes       | Refer [Device Fingerprinting](./Decision-Manager.md#device-fingerprinting) to generate this value |
    | custom.fields.isv_saleEnabled         | false                               | No        | Set the value to true if sale has to be performed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | custom.fields.isv_merchantId                      | Merchant Id used for the transaction                               | No       |             Required when you want to support Multi-Mid functionality. Populate this field with the value of Merchant Id in which the transaction should happen. When this field is empty, default mid configuration will be considered for the transaction. The same mid will be used for the follow-on transactions.                                                                                                                                                                                                                                                                                                     |
    | custom.fields.isv_shippingMethod | Shipping method for the order                                                                                         | No    | Possible values: <ul> <li> `lowcost`: Lowest-cost service  </li> <li>`sameday`: Courier or same-day service </li> <li>`oneday`: Next-day or overnight service </li> <li>`twoday`: Two-day service </li> <li>`threeday`: Three-day service.</li> <li> `pickup`: Store pick-up </li> <li> `other`: Other shipping method </li> <li> `none`: No shipping method because product is a service or subscription </li>  |
    | custom.fields.isv_metadata | Metadata for the order                                                                                         | No    | This field can be used to send additional custom data as part of the authorization request. The data should be serialized into a string format (e.g., JSON string) before passing it in the request.<br>**Example:**"isv_metadata": "{\"1\":\"value1\", \"2\":\"value2\"}"   |
    | custom.fields.isv_accountPurchaseCount | Required to determine account creation history and purchase activity                             | No    | Provide the user's purchase count for the last six months. This value will be used to determine account creation history and populate the riskInformation section of the authorization request   |


    Also see [Decision Manager](Decision-Manager.md) for additional fields to be populated if you are using Decision Manager

4.  For Google Pay, Apple Pay and eCheck create a Commercetools payment (https://docs.commercetools.com/api/projects/payments) and populate the required fields mentioned in the respective documents


    - [Process a Payment With Google Pay](Process-a-Payment-GooglePay.md)
    - [Process a Payment With Apple Pay](Process-a-Payment-ApplePay.md)
    - [Process a Payment With eCheck](./Process-a-Payment-eCheck.md)


    and add the following properties

    | Property                      | Value                            | Required | Notes                                                                                                   |
    | ----------------------------- | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
    | custom.fields.isv_enabledMoto | Flag Indicating MOTO transaction | Yes      | Boolean value. Used by the extention to identify whether it is a normal transaction or MOTO transaction |

5.  Add the payment to the cart

6.  Update the Commercetools payment (<https://docs.commercetools.com/api/projects/payments>) with the fields mentioned in the step 5 of [Process a Card Payment Without Payer Authentication](./Process-a-Card-Payment-Without-Payer-Authentication.md) along with the below data

    | Property                      | Value                            | Required | Notes                                                                                                   |
    | ----------------------------- | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
    | custom.fields.isv_enabledMoto | Flag Indicating MOTO transaction | Yes      | Boolean value. Used by the extention to identify whether it is a normal transaction or MOTO transaction |

7.  Add a transaction to the payment

        If only Authorization is required, populate the following fields to the payment.

    | Property | Value                  | Notes                                 |
    | -------- | ---------------------- | ------------------------------------- |
    | type     | Authorization          |                                       |
    | state    | Initial                |                                       |
    | amount   | Amount to be processed | Should match amountPlanned on payment |

        If Sale is enabled, populate the following fields to the payment

    | Property | Value                  | Notes                                 |
    | -------- | ---------------------- | ------------------------------------- |
    | type     | Charge                 |                                       |
    | state    | Initial                |                                       |
    | amount   | Amount to be processed | Should match amountPlanned on payment |

8.  Verify the payment state and convey the payment result to the Merchant

    a. If the processing is successful, transaction state will be updated to **Success**, create an order in commercetools and display the order confirmation page. Use this document for order creation - <https://docs.commercetools.com/api/projects/orders#create-order>

    b. If the state of transaction is updated to **Pending** which is due to Fraud Check, create an order in Commercetools and display the order confirmation page

    c. If the state of transaction is updated to **Failure**, display the error page and See [Overview\#Errorhandling](Overview.md#error-handling) for handling errors or failures

## Stored values

When a token is saved as a subscription the saved token value will be returned as a custom property on the payment called isv_savedToken.

See [Commercetools Setup](Commercetools-Setup.md) for more details on the individual fields.
