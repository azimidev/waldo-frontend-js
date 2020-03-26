# waldo

- I have used Vue CLI to install a Vue.js app to implement this task. This could have been done by React as well.
- I have used [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for AJAX call. [Axios](https://github.com/axios/axios) could've been used as well.
- [`vuejs-paginate`](https://github.com/lokyoung/vuejs-paginate#readme) is used for pagination. Since the API is already paginated, I needed to find a way to call the next pages for example `page=2` or `page=3` upon pressing the next button or previous button. This package can do that.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
