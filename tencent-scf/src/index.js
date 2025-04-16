'use strict';
exports.main_handler = async (event, context, callback) => {
  return {
    code: 200,
    message: 'success',
    data: {
      name: 'tencent-serverless'
    }
  }
};