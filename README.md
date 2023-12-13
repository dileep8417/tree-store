# JavaScript Tree API

Welcome to the JavaScript Tree API! This simple application allows you to manage a tree structure through a set of RESTful endpoints.

## Getting Started

Before you begin, ensure that you have **Node.js** installed and configured on your machine.

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the command `npm install` to install the necessary dependencies.
4. Start the server by running `npm run start`.

The server will be up and running at [http://localhost:3001/](http://localhost:3001/).

## API Endpoints

### 1. GET /api/tree

Retrieves the entire tree stored in memory.

**Example:**
```json
[
  {
    "1": {
      "label": "root",
      "children": {
        "2": {
          "label": "ant",
          "children": {}
        },
        "3": {
          "label": "bear",
          "children": {
            "4": {
              "label": "cat",
              "children": {}
            }
          }
        }
      }
    }
  }
]
```

### 2. POST /api/tree

Stores a new node into the existing tree.

**Payload:**
```json
{
    "parent": "<id>",
    "label": "<label>"
}
```
