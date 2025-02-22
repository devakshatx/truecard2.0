
export async function GET(req, { params }) {
    const data = {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "code": "USD",
                "symbol": "$",
                "no_of_decimal": 2,
                "exchange_rate": 1/83,
                "symbol_position": "before_price",
                "thousands_separator": "comma",
                "decimal_separator": "comma",
                "system_reserve": 0,
                "status": 1,
                "created_by_id": null,
                "created_at": "2024-05-02T08:34:46.000000Z",
                "updated_at": "2024-05-02T08:34:46.000000Z",
                "deleted_at": null
            },
            {
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
            },
            {
                "id": 3,
                "code": "GBP",
                "symbol": "\u00a3",
                "no_of_decimal": 2,
                "exchange_rate": 100,
                "symbol_position": "before_price",
                "thousands_separator": "comma",
                "decimal_separator": "comma",
                "system_reserve": 0,
                "status": 1,
                "created_by_id": null,
                "created_at": "2024-05-02T08:34:46.000000Z",
                "updated_at": "2024-05-02T08:34:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 4,
                "code": "EUR",
                "symbol": "\u20ac",
                "no_of_decimal": 2,
                "exchange_rate": 56,
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
        ],
        "first_page_url": "https:\/\/laravel.pixelstrap.net\/multikart\/api\/currency?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https:\/\/laravel.pixelstrap.net\/multikart\/api\/currency?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https:\/\/laravel.pixelstrap.net\/multikart\/api\/currency?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https:\/\/laravel.pixelstrap.net\/multikart\/api\/currency",
        "per_page": 4,
        "prev_page_url": null,
        "to": 4,
        "total": 4
    }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
