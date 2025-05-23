import clickToPay from '../../JSON/clickToPay.json';
const payment ={
  "id": "43bf2f10-ed23-4aba-ba10-891de7e63f65",
  "version": 8,
  "versionModifiedAt": "2025-03-17T07:24:09.805Z",
  "lastMessageSequenceNumber": 3,
  "createdAt": "2025-03-17T07:24:05.489Z",
  "lastModifiedAt": "2025-03-17T07:24:09.805Z",
  "lastModifiedBy": {
      "clientId": "xxSiPKLouCf3CRkqu20Byd0N",
      "isPlatformClient": false,
      "anonymousId": "10012614-ad9e-40cc-bd42-b4b900925b37"
  },
  "createdBy": {
      "clientId": "xxSiPKLouCf3CRkqu20Byd0N",
      "isPlatformClient": false,
      "anonymousId": "10012614-ad9e-40cc-bd42-b4b900925b37"
  },
  "amountPlanned": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 501900,
      "fractionDigits": 2
  },
  "paymentMethodInfo": {
      "paymentInterface": "cybersource",
      "method": "clickToPay",
      "name": {
          "en": "Click to Pay"
      }
  },
  "custom": {
      "type": {
          "typeId": "type",
          "id": "28bba466-fc03-4801-a823-6c7e6e3586b0"
      },
      "fields": {
          "isv_deviceFingerprintId": "84bc3678-851f-474f-8866-10a11af041a7",
          "isv_merchantId": "chtest",
          "isv_token": clickToPay.isv_token,
          "isv_saleEnabled": false,
          "isv_shippingMethod": "SINGLE",
          "isv_acceptHeader": "*/*",
          "isv_AVSResponse": "Y",
          "isv_authorizationStatus": "AUTHORIZED",
          "isv_metadata": "{\"1\":\"testValue1\",\"2\":\"testValue2\"}",
          "isv_responseCode": "00",
          "isv_responseDateAndTime": "2025-03-17T07:24:09Z",
          "isv_userAgentHeader": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0"
      }
  },
  "paymentStatus": {},
  "transactions": [
      {
          "id": "48ff2ba5-4c2f-4e8b-8b21-348a179dc36c",
          "timestamp": "2025-03-17T07:24:06.280Z",
          "type": "Authorization",
          "amount": {
              "type": "centPrecision",
              "currencyCode": "USD",
              "centAmount": 501900,
              "fractionDigits": 2
          },
          "interactionId": clickToPay.authReversalId,
          "state": "Success"
      }
  ],
  "interfaceInteractions": [],
  "anonymousId": "10012614-ad9e-40cc-bd42-b4b900925b37"
};

const payments = {
  id: 'efee6eb7-2400-4731-89ad-9ef1e5361ea4',
  version: 9,
  lastMessageSequenceNumber: 4,
  createdAt: '2021-11-10T11:28:43.582Z',
  lastModifiedAt: '2021-11-10T11:28:53.502Z',
  lastModifiedBy: {
    clientId: '4OdEsQlt0ZNkkwpineHHUy3h',
    isPlatformClient: false,
    anonymousId: '9f9da50d-abc8-416b-a31d-ea319abf31fc',
  },
  createdBy: {
    clientId: '4OdEsQlt0ZNkkwpineHHUy3h',
    isPlatformClient: false,
    anonymousId: '9f9da50d-abc8-416b-a31d-ea319abf31fc',
  },
  amountPlanned: {
    type: 'centPrecision',
    currencyCode: 'USD',
    centAmount: clickToPay.centAmountValue,
    fractionDigits: 2,
  },
  paymentMethodInfo: {
    paymentInterface: 'cybersource',
    method: 'clickToPay',
    name: {
      en: 'Click to Pay',
    },
  },
  custom: {
    type: { typeId: 'type', id: '28701886-4e26-4cab-924e-9b0da3829f88' },
    fields: {
      isv_deviceFingerprintId: '8a22fb00-dc63-496b-b0de-9f1d1fd36a50',
      isv_cardExpiryYear: '25  ',
      isv_token: clickToPay.isv_token,
      isv_customerIpAddress: '106.202.150.94',
      isv_maskedPan: '411111XXXXXX1111',
      isv_cardExpiryMonth: '05',
      isv_userAgentHeader: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
      isv_cardType: '001',
    },
  },
  paymentStatus: {},
  transactions: [
    {
      id: '1b3c1147-7ceb-43ec-96cf-af12f2b7e828',
      type: 'Authorization',
      amount: {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 6970,
        fractionDigits: 2,
      },
      interactionId: clickToPay.authReversalId,
      state: 'Success',
    },
  ],
  interfaceInteractions: [],
  anonymousId: '9f9da50d-abc8-416b-a31d-ea319abf31fc',
};

const cart = {
  limit: 20,
  offset: 0,
  count: 1,
  total: 1,
  results: [
    {
      type: 'Cart',
      id: '3d09ed42-1b1b-450a-b670-269437683939',
      version: 20,
      lastMessageSequenceNumber: 1,
      createdAt: '2022-04-11T08:33:23.168Z',
      lastModifiedAt: '2022-04-11T08:34:17.468Z',
      lastModifiedBy: {
        clientId: '0GrQ8c2D9t1iSjzJF8E3Ygu3',
        isPlatformClient: false,
        customer: {
          typeId: 'customer',
          id: 'def6c669-eed5-4c57-ba2e-5fb04bfed1fa',
        },
      },
      createdBy: {
        clientId: '0GrQ8c2D9t1iSjzJF8E3Ygu3',
        isPlatformClient: false,
        customer: {
          typeId: 'customer',
          id: 'def6c669-eed5-4c57-ba2e-5fb04bfed1fa',
        },
      },
      customerId: 'def6c669-eed5-4c57-ba2e-5fb04bfed1fa',
      locale: 'en-US',
      lineItems: [
        {
          id: '72dd04a7-918e-40d8-be33-1c4de9bfcdbd',
          productId: '7e3ccfc6-36ee-4995-ab1d-bb5095b08bbe',
          name: {
            en: 'Sherwani',
          },
          productType: {
            typeId: 'product-type',
            id: '31d56c4e-d578-4dab-a313-780b5f1e7556',
            version: 1,
          },
          productSlug: {
            en: 'a1',
          },
          variant: {
            id: 1,
            sku: 'SKU-1',
            prices: [
              {
                id: '1fbaed84-99cc-4922-9776-c1ea3cd553e6',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'EUR',
                  centAmount: 15845,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 7922,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: '9360ab21-ba82-4dca-8c39-ae0577547c8e',
                  },
                },
              },
              {
                id: '68018b50-2c8a-4304-b67a-ae15389be32d',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 5980,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2990,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: '9360ab21-ba82-4dca-8c39-ae0577547c8e',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://ik.imagekit.io/ldqsn9vvwgg/images/505833.jpg',
                dimensions: {
                  w: 300,
                  h: 375,
                },
              },
            ],
            attributes: [],
            assets: [],
          },
          price: {
            id: '68018b50-2c8a-4304-b67a-ae15389be32d',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 5980,
              fractionDigits: 2,
            },
            country: 'US',
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 2990,
                fractionDigits: 2,
              },
              discount: {
                typeId: 'product-discount',
                id: '9360ab21-ba82-4dca-8c39-ae0577547c8e',
              },
            },
          },
          quantity: 1,
          discountedPricePerQuantity: [],
          taxRate: {
            name: 'test-tax-category',
            amount: 0.2,
            includedInPrice: true,
            country: 'US',
            id: 'HxMyojUT',
            subRates: [],
          },
          addedAt: '2022-04-11T08:33:23.498Z',
          lastModifiedAt: '2022-04-11T08:33:23.498Z',
          state: [
            {
              quantity: 1,
              state: {
                typeId: 'state',
                id: '438c0901-36c4-41ec-9a86-2853d6c73d0d',
              },
            },
          ],
          priceMode: 'Platform',
          totalPrice: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 2990,
            fractionDigits: 2,
          },
          taxedPrice: {
            totalNet: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 2492,
              fractionDigits: 2,
            },
            totalGross: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 2990,
              fractionDigits: 2,
            },
            totalTax: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 498,
              fractionDigits: 2,
            },
          },
          lineItemMode: 'Standard',
        },
      ],
      cartState: 'Ordered',
      totalPrice: {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 3980,
        fractionDigits: 2,
      },
      taxedPrice: {
        totalNet: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 3317,
          fractionDigits: 2,
        },
        totalGross: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 3980,
          fractionDigits: 2,
        },
        taxPortions: [
          {
            rate: 0.2,
            amount: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 663,
              fractionDigits: 2,
            },
            name: 'test-tax-category',
          },
        ],
        totalTax: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 663,
          fractionDigits: 2,
        },
      },
      country: 'US',
      shippingInfo: {
        shippingMethodName: 'UHL',
        price: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 990,
          fractionDigits: 2,
        },
        shippingRate: {
          price: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 990,
            fractionDigits: 2,
          },
          tiers: [],
        },
        taxRate: {
          name: 'test-tax-category',
          amount: 0.2,
          includedInPrice: true,
          country: 'US',
          id: 'HxMyojUT',
          subRates: [],
        },
        taxCategory: {
          typeId: 'tax-category',
          id: '44e3081f-e822-44cc-918a-e79240a7284f',
        },
        deliveries: [],
        shippingMethod: {
          typeId: 'shipping-method',
          id: 'd7a87341-36bb-4fe2-96a9-5d5d1eada503',
        },
        taxedPrice: {
          totalNet: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 825,
            fractionDigits: 2,
          },
          totalGross: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 990,
            fractionDigits: 2,
          },
          totalTax: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 165,
            fractionDigits: 2,
          },
        },
        shippingMethodState: 'MatchesCart',
      },
      customLineItems: [],
      discountCodes: [],
      directDiscounts: [],
      paymentInfo: {
        payments: [
          {
            typeId: 'payment',
            id: '029bd8ed-ea47-480f-8bd0-959c1805604d',
          },
        ],
      },
      inventoryMode: 'None',
      taxMode: 'Platform',
      taxRoundingMode: 'HalfEven',
      taxCalculationMode: 'LineItemLevel',
      deleteDaysAfterLastModification: 90,
      refusedGifts: [],
      origin: 'Customer',
      shippingAddress: {
        firstName: 'john',
        lastName: 'doe',
        streetName: '1295 Charleston Road',
        additionalStreetInfo: '5th lane',
        postalCode: '94043',
        city: 'Mountain View',
        region: 'CA',
        country: 'US',
        phone: '9876543210',
        email: 'john.doe@wipro.com',
      },
      billingAddress: {
        firstName: 'john',
        lastName: 'doe',
        streetName: '1295 Charleston Road',
        additionalStreetInfo: '5th lane',
        postalCode: '94043',
        city: 'Mountain View',
        region: 'CA',
        country: 'US',
        phone: '9876543210',
        email: 'john.doe@wipro.com',
      },
      itemShippingAddresses: [],
      totalLineItemQuantity: 1,
    },
  ],
};

const authReversalId = clickToPay.authReversalId;

const authReversalID = '639721595636641210';

const shippingCart = {
  type: 'Cart',
  id: '26e44ca8-794f-4bc5-84db-4b476eb4fed1',
  version: 16,
  versionModifiedAt: '2023-04-21T07:15:39.775Z',
  lastMessageSequenceNumber: 1,
  createdAt: '2023-04-21T07:13:31.827Z',
  lastModifiedAt: '2023-04-21T07:15:39.775Z',
  lastModifiedBy: {
    clientId: 'C0f71msxpiTpAB0OiOaItOs8',
    isPlatformClient: false,
    anonymousId: '475f215e-9a1e-49f1-8756-8fadac9a5623',
  },
  createdBy: {
    clientId: 'C0f71msxpiTpAB0OiOaItOs8',
    isPlatformClient: false,
    anonymousId: '475f215e-9a1e-49f1-8756-8fadac9a5623',
  },
  anonymousId: '475f215e-9a1e-49f1-8756-8fadac9a5623',
  locale: 'en-US',
  lineItems: [
    {
      id: '77197bf1-a747-499b-88e4-df16ff235f9f',
      productId: 'c28cfa09-801e-4309-8e2e-edf39f85ddf2',
      name: {
        en: 'sandalen Aubrey Michael Kors brown',
        de: 'sandalen Aubrey Michael Kors brown',
        'en-US': 'sandalen Aubrey Michael Kors brown',
        'de-DE': 'sandalen Aubrey Michael Kors brown',
      },
      productType: {
        typeId: 'product-type',
        id: '404a5e8f-70a7-41a3-9b39-0b02b1b90b83',
        version: 1,
      },
      productSlug: {
        en: 'a5',
        de: 'a5',
        'en-US': 'a5',
        'de-DE': 'a5',
      },
      variant: {
        id: 1,
        sku: 'sku-5',
        prices: [
          {
            id: '4306d10f-8582-44f5-9cce-201be3066555',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 8000,
              fractionDigits: 2,
            },
            country: 'DE',
          },
          {
            id: '99663748-061c-46f1-b6ad-13cd7872b817',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 8000,
              fractionDigits: 2,
            },
            country: 'US',
          },
        ],
        images: [
          {
            url: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082405_1_medium.jpg',
            dimensions: {
              w: 300,
              h: 375,
            },
          },
        ],
        attributes: [],
        assets: [],
      },
      price: {
        id: '99663748-061c-46f1-b6ad-13cd7872b817',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 8000,
          fractionDigits: 2,
        },
        country: 'US',
      },
      quantity: 1,
      discountedPricePerQuantity: [],
      perMethodTaxRate: [],
      addedAt: '2023-04-21T07:13:32.176Z',
      lastModifiedAt: '2023-04-21T07:13:32.176Z',
      state: [
        {
          quantity: 1,
          state: {
            typeId: 'state',
            id: '8e52f9e7-5650-4d0f-a4bf-7d6ba7c2f98f',
          },
        },
      ],
      priceMode: 'Platform',
      lineItemMode: 'Standard',
      totalPrice: {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 8000,
        fractionDigits: 2,
      },
      taxedPricePortions: [],
    },
  ],
  cartState: 'Active',
  totalPrice: {
    type: 'centPrecision',
    currencyCode: 'USD',
    centAmount: 10180,
    fractionDigits: 2,
  },
  country: 'US',
  shippingMode: 'Multiple',
  shipping: [
    {
      shippingKey: 'shippingKey123',
      shippingInfo: {
        shippingMethodName: 'UHL',
        price: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 990,
          fractionDigits: 2,
        },
        shippingRate: {
          price: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 990,
            fractionDigits: 2,
          },
          tiers: [],
        },
        taxRate: {
          name: 'test-taxes-category',
          amount: 0.2,
          includedInPrice: true,
          country: 'US',
          id: 'yo5l4O7M',
          subRates: [],
        },
        taxCategory: {
          typeId: 'tax-category',
          id: '9ed4dda8-d050-4f6b-90a8-34901c33b6f8',
        },
        deliveries: [],
        shippingMethod: {
          typeId: 'shipping-method',
          id: '793cc3e5-20fa-4931-a22d-0bb7c9db8be3',
        },
        taxedPrice: {
          totalNet: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 825,
            fractionDigits: 2,
          },
          totalGross: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 990,
            fractionDigits: 2,
          },
          totalTax: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 165,
            fractionDigits: 2,
          },
        },
        shippingMethodState: 'MatchesCart',
      },
      shippingAddress: {
        streetName: 'ABC Street',
        streetNumber: '1234',
        postalCode: '94043',
        city: 'Mountain Views',
        region: 'CA',
        country: 'US',
        key: 'addressKeyOne',
      },
    },
    {
      shippingKey: 'myUniqueKey23455',
      shippingInfo: {
        shippingMethodName: 'DHL',
        price: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 1190,
          fractionDigits: 2,
        },
        shippingRate: {
          price: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 1190,
            fractionDigits: 2,
          },
          tiers: [],
        },
        taxRate: {
          name: 'test-taxes-category',
          amount: 0.2,
          includedInPrice: true,
          country: 'US',
          id: 'yo5l4O7M',
          subRates: [],
        },
        taxCategory: {
          typeId: 'tax-category',
          id: '9ed4dda8-d050-4f6b-90a8-34901c33b6f8',
        },
        deliveries: [],
        shippingMethod: {
          typeId: 'shipping-method',
          id: 'c80f6822-8b9d-476e-b4ac-3125fa789af2',
        },
        taxedPrice: {
          totalNet: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 992,
            fractionDigits: 2,
          },
          totalGross: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 1190,
            fractionDigits: 2,
          },
          totalTax: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 198,
            fractionDigits: 2,
          },
        },
        shippingMethodState: 'MatchesCart',
      },
      shippingAddress: {
        streetName: 'PRB Nagar',
        streetNumber: '1234',
        postalCode: '94043',
        city: 'Mountain Views',
        region: 'CA',
        country: 'US',
        key: 'addressKeyTwo',
      },
    },
  ],
  customLineItems: [],
  discountCodes: [],
  directDiscounts: [],
  paymentInfo: {
    payments: [
      {
        typeId: 'payment',
        id: '8bac631c-8d54-4c80-95fb-aac3f7b294cf',
      },
    ],
  },
  inventoryMode: 'None',
  taxMode: 'Platform',
  taxRoundingMode: 'HalfEven',
  taxCalculationMode: 'LineItemLevel',
  deleteDaysAfterLastModification: 90,
  refusedGifts: [],
  origin: 'Customer',
  billingAddress: {
    firstName: 'john',
    lastName: 'doe',
    streetName: '1295 Charleston Road',
    postalCode: '94043',
    city: 'Mountain View',
    region: 'CA',
    country: 'US',
    phone: '9876543210',
    email: 'john.doe@wipro.com',
  },
  itemShippingAddresses: [],
  totalLineItemQuantity: 1,
};

const multipleShippingPayment = {
  "id": "c693228a-fefe-4d4d-8791-5a37225eed46",
  "version": 8,
  "versionModifiedAt": "2025-03-17T10:00:04.139Z",
  "lastMessageSequenceNumber": 3,
  "createdAt": "2025-03-17T09:59:58.266Z",
  "lastModifiedAt": "2025-03-17T10:00:04.139Z",
  "lastModifiedBy": {
      "clientId": "xxSiPKLouCf3CRkqu20Byd0N",
      "isPlatformClient": false,
      "anonymousId": "af1d0296-0af7-4f8b-b95d-6f773498794f"
  },
  "createdBy": {
      "clientId": "xxSiPKLouCf3CRkqu20Byd0N",
      "isPlatformClient": false,
      "anonymousId": "af1d0296-0af7-4f8b-b95d-6f773498794f"
  },
  "amountPlanned": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 501900,
      "fractionDigits": 2
  },
  "paymentMethodInfo": {
      "paymentInterface": "cybersource",
      "method": "clickToPay",
      "name": {
          "en": "Click to Pay"
      }
  },
  "custom": {
      "type": {
          "typeId": "type",
          "id": "28bba466-fc03-4801-a823-6c7e6e3586b0"
      },
      "fields": {
          "isv_deviceFingerprintId": "e2013320-c36a-4b17-98fb-cad6b61d96ec",
          "isv_merchantId": "chtest",
          "isv_token": "2756441060512475901",
          "isv_saleEnabled": false,
          "isv_shippingMethod": "SINGLE",
          "isv_acceptHeader": "*/*",
          "isv_AVSResponse": "Y",
          "isv_authorizationStatus": "AUTHORIZED",
          "isv_metadata": "{\"1\":\"testValue1\",\"2\":\"testValue2\"}",
          "isv_responseCode": "00",
          "isv_responseDateAndTime": "2025-03-17T10:00:03Z",
          "isv_userAgentHeader": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0"
      }
  },
  "paymentStatus": {},
  "transactions": [
      {
          "id": "3ee79e8a-391f-4337-a186-036295e029e3",
          "timestamp": "2025-03-17T10:00:00.508Z",
          "type": "Authorization",
          "amount": {
              "type": "centPrecision",
              "currencyCode": "USD",
              "centAmount": 501900,
              "fractionDigits": 2
          },
          "interactionId": "7422056031066307304807",
          "state": "Success"
      }
  ],
  "interfaceInteractions": [],
  "anonymousId": "af1d0296-0af7-4f8b-b95d-6f773498794f"
};

const multipleShippingReversalId = clickToPay.multipleShippingAuthReversalId;

export default {
  payment,
  payments,
  cart,
  authReversalId,
  authReversalID,
  shippingCart,
  multipleShippingPayment,
  multipleShippingReversalId
}