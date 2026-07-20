"use client";

import { Star } from "lucide-react";

export default function BuyerReviews() {
  const reviews = [
    {
      farmer: "Ramesh Kumar",
      rating: 5,
      review:
        "Payment was released on time. Very professional buyer.",
    },
    {
      farmer: "Suresh Patel",
      rating: 4,
      review:
        "Communication was smooth and contract process was transparent.",
    },
    {
      farmer: "Ajay Singh",
      rating: 5,
      review:
        "Highly recommended. Quality verification was fair and quick.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-6">
        Farmer Reviews
      </h2>

      <div className="space-y-5">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="border rounded-xl p-5"
          >

            <div className="flex justify-between items-center">

              <h3 className="font-semibold text-lg">
                {review.farmer}
              </h3>

              <div className="flex gap-1">

                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

            </div>

            <p className="text-gray-600 mt-3">
              "{review.review}"
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}