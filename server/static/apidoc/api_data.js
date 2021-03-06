define({ "api": [
  {
    "type": "get",
    "url": "/api/user/item",
    "title": "获取用户",
    "description": "<p>获取用户</p>",
    "name": "item",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "返回数据:",
          "content": "{\n    \"success\" : \"true\",\n    \"data\" : {\n        \"id\" : \"id\",\n        \"name\" : \"name\"\n    },\n    \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"success\" : \"false\",\n   \"data\" null: ,\n   \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:9000/api/user/item"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/list",
    "title": "用户列表",
    "description": "<p>用户信息</p>",
    "name": "list",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"data\" : {\n      \"rows\" : {},\n      \"count\" : Number\n    },\n    \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"success\" : \"false\",\n   \"data\" null: ,\n   \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:9000/api/user/list"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signin",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "signin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "返回数据:",
          "content": "{\n    \"success\" : \"true\",\n    \"data\" : {\n        \"name\" : \"name\",\n        \"...\"  : \"...\"\n    },\n    \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"success\" : \"false\",\n   \"data\" null: ,\n   \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:9000/api/user/signin"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signout",
    "title": "用户退出",
    "description": "<p>用户退出</p>",
    "name": "signout",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"data\" : token,\n    \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"success\" : \"false\",\n   \"data\" null: ,\n   \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:9000/api/user/signout"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/userinfo",
    "title": "用户信息",
    "description": "<p>用户信息</p>",
    "name": "userinfo",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"data\" : {},\n    \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"success\" : \"false\",\n   \"data\" null: ,\n   \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:9000/api/user/userinfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
