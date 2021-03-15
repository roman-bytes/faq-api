exports.handler = function (event, context, callback) {
  const faqs = [{
    "question": "Is this product waterproof?",
    "answer": "Yes. You can take this anywhere and put it in any type of liquid."
  }, {
    "question": "Is this product waterproof?",
    "answer": "Yes. You can take this anywhere and put it in any type of liquid."
  }, {
    "question": "Is this product waterproof?",
    "answer": "Yes. You can take this anywhere and put it in any type of liquid."
  }, {
    "question": "Is this product waterproof?",
    "answer": "Yes. You can take this anywhere and put it in any type of liquid."
  }];
  callback(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
    statusCode: 200,
    body: faqs.toString()
  });
};
