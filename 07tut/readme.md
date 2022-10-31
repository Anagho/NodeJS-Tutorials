##### Tutorial 7
# Middlewares in Express Framework
This tutorial is all about learning middlewares in the express framework.
### What are Middlewares?
: A middleware is really anything between a request and a response.
#### Types of Middlewares
: There are three types of middlewares:
1. Built-in middlewares
2. Custom middlewares
3. Middlewares from third-parties

#### Examples of built-in middlewares
1. **app.use()**
    : app.use() is often used to apply middlewares to handle all routes comming in just like we use *http* module.
    ##### Example:
```javascript
    app.use(express.urlencoded({ extended: false }))
```


