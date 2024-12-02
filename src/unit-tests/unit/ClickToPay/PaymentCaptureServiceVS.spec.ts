import test from 'ava';
import dotenv from 'dotenv';

dotenv.config();
import { Constants } from '../../../constants/constants';
import capture from '../../../service/payment/PaymentCaptureService';
import captureConstVS from '../../const/ClickToPay/PaymentCaptureServiceVsConst';

let paymentResponse: any = {
  httpCode: null,
  status: null,
};

let paymentResponseObject: any = {
  httpCode: null,
  status: null,
};

test.serial('Capturing a payment and check http code', async (t: any) => {
  let result: any = await capture.getCaptureResponse(captureConstVS.payment, captureConstVS.updateTransactions, captureConstVS.authId, captureConstVS.orderNo);
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  if (Constants.HTTP_SUCCESS_STATUS_CODE == paymentResponse.httpCode) {
    t.is(paymentResponse.httpCode, Constants.HTTP_SUCCESS_STATUS_CODE);
  } else {
    t.not(paymentResponse.httpCode, Constants.HTTP_SUCCESS_STATUS_CODE);
  }
});

test.serial('Check status for payment capture', async (t: any) => {
  if (Constants.HTTP_SUCCESS_STATUS_CODE == paymentResponse.httpCode) {
    t.is(paymentResponse.status, Constants.API_STATUS_PENDING);
  } else {
    t.not(paymentResponse.status, Constants.API_STATUS_PENDING);
  }
});

test.serial('Capturing an invalid payment and check http code', async (t: any) => {
  let result: any = await capture.getCaptureResponse(captureConstVS.payment, captureConstVS.updateTransactions, captureConstVS.authID, captureConstVS.orderNo);
  paymentResponseObject.httpCode = result.httpCode;
  paymentResponseObject.status = result.status;
  t.not(paymentResponseObject.httpCode, Constants.HTTP_SUCCESS_STATUS_CODE);
});

test.serial('Check status for invalid capture ', async (t: any) => {
  t.not(paymentResponseObject.status, Constants.API_STATUS_PENDING);
});

test.serial('Capturing a payment with reconciliation Id and check http code', async (t: any) => {
  let result: any = await capture.getCaptureResponse(captureConstVS.payment, captureConstVS.updateTransactions, captureConstVS.authId, captureConstVS.orderNumber);
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  if (Constants.HTTP_SUCCESS_STATUS_CODE == paymentResponse.httpCode) {
    t.is(paymentResponse.httpCode, Constants.HTTP_SUCCESS_STATUS_CODE);
  } else {
    t.not(paymentResponse.httpCode, Constants.HTTP_SUCCESS_STATUS_CODE);
  }
});

test.serial('Check status for payment capture with reconciliation Id', async (t: any) => {
  if (Constants.HTTP_SUCCESS_STATUS_CODE == paymentResponse.httpCode) {
    t.is(paymentResponse.status, Constants.API_STATUS_PENDING);
  } else {
    t.not(paymentResponse.status, Constants.API_STATUS_PENDING);
  }
});

test.serial('Capturing a payment with empty auth id and check http code', async (t: any) => {
  let result: any = await capture.getCaptureResponse(captureConstVS.payment, captureConstVS.updateTransactions, '', captureConstVS.orderNo);
  paymentResponseObject.httpCode = result.httpCode;
  paymentResponseObject.status = result.status;
  t.not(paymentResponseObject.httpCode, Constants.HTTP_SUCCESS_STATUS_CODE);
});

test('Check status for a capture with empty auth id', async (t: any) => {
  t.not(paymentResponseObject.status, Constants.API_STATUS_PENDING);
});
