
export async function GET(req, { params }) {
    const settings = {
        "values": {
            "general": {
                "mode": "light-only",
                "site_url": "https:\/\/angular.pixelstrap.net\/multikart-rest\/",
                "copyright": "Copyright 2024 \u00a9 Multikart theme by pixelstrap",
                "site_name": "Multikart",
                "site_title": "Multikart Marketplace: Where Vendors Shine Together",
                "site_tagline": "Shop Unique, Sell Exceptional \u2013 Multikart's Multi-Vendor Universe.",
                "default_timezone": "Asia\/Kolkata",
                "favicon_image_id": 10,
                "min_order_amount": 0,
                "dark_logo_image_id": 3948,
                "product_sku_prefix": "FS",
                "tiny_logo_image_id": 1302,
                "default_currency_id": 2,
                "light_logo_image_id": 3950,
                "min_order_free_shipping": 50,
                "admin_site_language_direction": "ltr",
                "light_logo_image": {
                    "id": 3950,
                    "name": "f6",
                    "file_name": "f6.png",
                    "mime_type": "image\/png",
                    "disk": "public",
                    "created_by_id": 1,
                    "created_at": "2024-06-25T11:42:51.000000Z",
                    "asset_url": "\/storage\/3950\/f6.png",
                    "original_url": "https:\/\/laravel.pixelstrap.net\/multikart\/storage\/3950\/f6.png"
                },
                "dark_logo_image": {
                    "id": 3948,
                    "name": "12",
                    "file_name": "12.png",
                    "mime_type": "image\/png",
                    "disk": "public",
                    "created_by_id": 1,
                    "created_at": "2024-06-25T11:40:46.000000Z",
                    "asset_url": "\/storage\/3948\/12.png",
                    "original_url": "https:\/\/laravel.pixelstrap.net\/multikart\/storage\/3948\/12.png"
                },
                "favicon_image": {
                    "id": 10,
                    "name": "favicon",
                    "file_name": "favicon.png",
                    "mime_type": "image\/png",
                    "disk": "public",
                    "created_by_id": 1,
                    "created_at": "2024-05-02T08:54:01.000000Z",
                    "asset_url": "\/storage\/10\/favicon.png",
                    "original_url": "https:\/\/laravel.pixelstrap.net\/multikart\/storage\/10\/favicon.png"
                },
                "tiny_logo_image": {
                    "id": 1302,
                    "name": "Frame 44",
                    "file_name": "Frame-44.png",
                    "mime_type": "image\/png",
                    "disk": "public",
                    "created_by_id": 1,
                    "created_at": "2024-05-15T12:33:58.000000Z",
                    "asset_url": "\/storage\/1302\/Frame-44.png",
                    "original_url": "https:\/\/laravel.pixelstrap.net\/multikart\/storage\/1302\/Frame-44.png"
                },
                "default_currency":   {
                    "id": 2,
                    "code": "INR",
                    "symbol": "\u20b9",
                    "no_of_decimal": 2,
                    "exchange_rate": 1,
                    "symbol_position": "before_price",
                    "thousands_separator": "comma",
                    "decimal_separator": "comma",
                    "system_reserve": 0,
                    "status": 1,
                    "created_by_id": null,
                    "created_at": "2024-05-02T08:34:46.000000Z",
                    "updated_at": "2024-05-02T08:34:46.000000Z",
                    "deleted_at": null
                }
            },
            "delivery": {
                "default": {
                    "title": "Standard Delivery",
                    "description": "Approx 5 to 7 Days"
                },
                "same_day": {
                    "title": "Express Delivery",
                    "description": "Schedule"
                },
                "default_delivery": 1,
                "same_day_delivery": true,
                "same_day_intervals": [
                    {
                        "title": "Morning",
                        "description": "8.00 AM - 12.00 AM"
                    },
                    {
                        "title": "Noon",
                        "description": "12.00 PM - 2.00 PM"
                    },
                    {
                        "title": "Afternoon",
                        "description": "02.00 PM - 05.00 PM"
                    },
                    {
                        "title": "Evening",
                        "description": "05.00 PM - 08.00 PM"
                    }
                ]
            },
            "analytics": {
                "facebook_pixel": [],
                "google_analytics": []
            },
            "activation": {
                "multivendor": true,
                "track_order": true,
                "login_number": true,
                "point_enable": true,
                "coupon_enable": true,
                "wallet_enable": true,
                "guest_checkout": true,
                "stock_product_hide": false,
                "store_auto_approve": true,
                "product_auto_approve": true
            },
            "maintenance": {
                "title": "We'll be back Soon..",
                "end_date": "2024-7-31",
                "start_date": null,
                "description": "We are busy to updating our store for you.",
                "maintenance_mode": false,
                "maintenance_image_id": 3863,
                "maintenance_image": {
                    "id": 3863,
                    "name": "maintenance",
                    "file_name": "maintenance.png",
                    "mime_type": "image\/png",
                    "disk": "public",
                    "created_by_id": 1,
                    "created_at": "2024-06-21T12:10:25.000000Z",
                    "asset_url": "\/storage\/3863\/maintenance.png",
                    "original_url": "https:\/\/laravel.pixelstrap.net\/multikart\/storage\/3863\/maintenance.png"
                }
            },
            "wallet_points": {
                "signup_points": 100,
                "min_per_order_amount": 100,
                "point_currency_ratio": 30,
                "reward_per_order_amount": 10
            },
            "google_reCaptcha": {
                "secret": "ENTER_YOUR_SECRET_KEY",
                "status": false,
                "site_key": "ENTER_YOUR_SITE_KEY"
            },
            "payment_methods": [
                {
                    "name": "cod",
                    "title": "Cash On Delivery",
                    "status": true
                },
                {
                    "name": "paypal",
                    "title": "PayPal",
                    "status": true
                },
                {
                    "name": "stripe",
                    "title": "Stripe",
                    "status": true
                },
                {
                    "name": "sslcommerz",
                    "title": "SSLCommerz",
                    "status": true
                },
                {
                    "name": "flutter_wave",
                    "title": "FlutterWave",
                    "status": true
                },
                {
                    "name": "paystack",
                    "title": "Paystack",
                    "status": true
                },
                {
                    "name": "mollie",
                    "title": "Mollie",
                    "status": true
                },
                {
                    "name": "bank_transfer",
                    "title": "Bank Transfer",
                    "status": true
                },
                {
                    "name": "bkash",
                    "title": "bKash",
                    "status": true
                },
                {
                    "name": "ccavenue",
                    "title": "CCAvenue",
                    "status": true
                },
                {
                    "name": "phonepe",
                    "title": "PhonePe",
                    "status": true
                },
                {
                    "name": "instamojo",
                    "title": "InstaMojo",
                    "status": true
                },
                {
                    "name": "razorpay",
                    "title": "RazorPay",
                    "status": true
                }
            ],
            "sms_methods": [
                {
                    "name": "twilio",
                    "title": "Twilio",
                    "status": true
                }
            ]
        }
    };

  return new Response(JSON.stringify(settings), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
