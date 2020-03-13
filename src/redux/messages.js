const response = fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxvcmloZW5kZXJzb24iLCJpYXQiOjE1ODM3NjcxMzYsImV4cCI6MTU4Mzg1MzUzNn0.-btQWOKVT-6Awkf2V8aPJ3w2OeprueVZI2krSIS_j4o",
    },
  });