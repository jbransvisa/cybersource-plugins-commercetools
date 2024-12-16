import crypto from 'crypto';

import restApi from 'cybersource-rest-client';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';

import { Constants } from '../../constants/constants';
import { CustomMessages } from '../../constants/customMessages';
import { FunctionConstant } from '../../constants/functionConstant';
import prepareFields from '../../requestBuilder/PrepareFields';
import { MidCredentialsType, PaymentType } from '../../types/Types';
import paymentUtils from '../../utils/PaymentUtils';
import multiMid from '../../utils/config/MultiMid';

/**
 * Retrieves public keys and verifies the capture context.
 * @param {string} captureContext - The capture context.
 * @param {PaymentType} paymentObj - The payment object.
 * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether the capture context is valid.
 */
const getPublicKeys = async (captureContext: string, paymentObj: PaymentType): Promise<boolean> => {
  let decodedCaptureContext: string;
  let parsedValue: string;
  let publicKeyURL: string;
  let pemPublicKey: string;
  let errorData: string;
  let mid: string;
  let paymentId = paymentObj?.id || '';
  const publicKeyPathParams = {
    kid: '',
  };
  const publicKeyHeaderParams = {
    Digest: '',
  };
  let midCredentials: MidCredentialsType = {
    merchantId: '',
    merchantKeyId: '',
    merchantSecretKey: '',
  };
  if (captureContext && paymentObj) {
    decodedCaptureContext = Buffer.from(captureContext.split(Constants.REGEX_DOT)[0], Constants.ENCODING_BASE_SIXTY_FOUR).toString('utf-8');
    parsedValue = JSON.parse(decodedCaptureContext)?.kid;
    const apiClient = new restApi.ApiClient();
    mid = paymentObj?.custom?.fields?.isv_merchantId ? paymentObj.custom.fields.isv_merchantId : '';
    midCredentials = multiMid.getMidCredentials(mid);
    if (midCredentials?.merchantId) {
      const configObject = prepareFields.getConfigObject(FunctionConstant.FUNC_GET_PUBLIC_KEYS, midCredentials, null, null);
      configObject && apiClient.setConfiguration(configObject);
    } else {
      paymentUtils.logData(__filename, FunctionConstant.FUNC_GET_PUBLIC_KEYS, Constants.LOG_WARN, '', midCredentials.merchantId + CustomMessages.ERROR_MSG_MERCHANT_ID_NOT_FOUND);
    }
    if (parsedValue) {
      publicKeyURL = Constants.PAYMENT_GATEWAY_PUBLIC_KEY_VERIFICATION + `${parsedValue}`;
      publicKeyPathParams.kid = parsedValue;
      const digest = crypto.createHash('sha256').update(JSON.stringify(null), 'utf8').digest(Constants.ENCODING_BASE_SIXTY_FOUR);
      publicKeyHeaderParams['Digest'] = `SHA-256=${digest}`;
      const startTime = new Date().getTime();
      return await new Promise((resolve, reject) => {
        apiClient.callApi(publicKeyURL, 'GET', publicKeyPathParams, {}, publicKeyHeaderParams, null, null, [], ['application/json'], ['application/json'], Constants.STR_OBJECT, (error: any, data: any, response: any) => {
          const endTime = new Date().getTime();
          paymentUtils.logData(__filename, FunctionConstant.FUNC_GET_PUBLIC_KEYS, Constants.LOG_DEBUG, 'PaymentId : ' + paymentId, 'Public Key Response =' + paymentUtils.maskData(JSON.stringify(response)), `${endTime - startTime}`);
          paymentUtils.logData(__filename, FunctionConstant.FUNC_GET_PUBLIC_KEYS, Constants.LOG_INFO, '', `${endTime - startTime}`);
          if (data) {
            let isSignatureValid;
            try {
              pemPublicKey = jwkToPem(data);
              isSignatureValid = jwt.verify(captureContext, pemPublicKey);
            } catch (exception) {
              paymentUtils.logData(__filename, FunctionConstant.FUNC_GET_PUBLIC_KEYS, Constants.LOG_ERROR, 'PaymentId : ' + paymentId, CustomMessages.ERROR_MSG_PUBLIC_KEY_VERIFICATION + Constants.STRING_HYPHEN + exception);
            }
            isSignatureValid?.flx?.data ? resolve(true) : reject(false);
          } else {
            if (error?.response && error?.response?.text && 0 < error?.response?.text?.length) {
              paymentUtils.logData(__filename, FunctionConstant.FUNC_GET_PUBLIC_KEYS, Constants.LOG_ERROR, 'PaymentId : ' + paymentId, CustomMessages.ERROR_MSG_PUBLIC_KEY_VERIFICATION + Constants.STRING_HYPHEN + error.response.text);
            } else {
              errorData = error?.response?.text ? error.response.text : JSON.stringify(error);
              paymentUtils.logData(__filename, FunctionConstant.FUNC_GET_PUBLIC_KEYS, Constants.LOG_ERROR, 'PaymentId : ' + paymentId, CustomMessages.ERROR_MSG_PUBLIC_KEY_VERIFICATION + Constants.STRING_HYPHEN + errorData);
            }
            reject(errorData);
          }
        });
      });
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default { getPublicKeys };
