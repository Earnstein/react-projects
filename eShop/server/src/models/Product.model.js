import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    slug: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    rating: {
      type: Number,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);



// productSchema.pre("insertMany", async function (next, docs) {
//   try {
//     await Promise.all(
//       docs.map(async (doc) => {
//         const slug = slugify(doc.name, {
//           replacement: "-",
//           remove: undefined,
//           lower: true,
//           strict: true,
//           locale: "vi",
//           trim: true,
//         });
//         doc.slug = slug;
//       })
//     );
//     next(null, docs);
//   } catch (error) {
//     next(error);
//   }
// });


const Product = mongoose.model("Product", productSchema);

export default Product;
