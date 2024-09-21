const storeSchema = new mongoose.Schema({
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  // Reference to the User model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    subdomain: {
      type: String,
      unique: true,
      required: true,  // The subdomain where the store is hosted (e.g., mystore.yosef.com)
    },
    templateId: {
      type: String,  // ID of the selected template (from your predefined template list)
      required: true,
    },
    customizationData: {
      type: Object,  // Store the JSON customization data here (e.g., text, colors, layout)
      default: {},
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',  // Reference to the Product model
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  });
  
  module.exports = mongoose.model('Store', storeSchema);
  