export interface Review {
  name: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  rating: { type: Number, max: 5, required: true },
  helpfull: {type: Number, default: 0},
  unhelpfull: {type: Number, default: 0},
}