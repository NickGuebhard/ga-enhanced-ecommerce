
// Refund an entire transaction by providing the transaction ID. This example assumes the details
// of the completed refund are available when the page loads:
dataLayer.push({
  'ecommerce': {
    'refund': {
      'actionField': {'id': 'T12345'}         // Transaction ID. Required for purchases and refunds.
    }
  }
});
