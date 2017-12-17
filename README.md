# fuji

## Usage.

```shell-session:~/fuji
$ yarn
$ yarn run build
$ yarn start
```

### Advance preparation.

**1) Configuration of your Blog server.**

  Add '/api' endpoint and Connecting this product with API port.

**2) Preparing the NodeJS for execution environment.**

### One. Edit .env file for 'access key' and 'secret key'.

**1) Add 'ACCESS_KEY' and 'SECRET_KEY' environment value.**

```file:.env
ACCESS_KEY="[access_key]"
SECRET_KEY="[secret_key]"
```

**2) Add 'PORT' environmrnt value of this product.**

```file:.env
...(read usage.one-(1))
PORT="[api_port_number]"
```

### Two. Add 'a' tag and 'script' tag in sample blog page.

**1) Add 'a' tag.**

```html:sample.html
<a href='https://www.amazon.co.jp/gp/bestsellers/[category_name]/[node_id]/ref=zg_bs_nav_hb_2_[child_node_id]' target='blank'>
Ranking site is here!
</a>
```

**2) Add 'script' tag.**

```html:sample.html
<script src='http://[site_host]/widget.js'>
</script>
```

### Three. Set 'dataset' and 'class' attribute in 'a' tag.

**1) Add 'dataset' attribute.**

```html:sample.html
<a ...(read usage.two)... 
  data-associ_tag='[associate_tag]'
  data-node_id='[node_id]'
  data-category='[category_name]'
  data-rate='[percentage_of_discount_amount]'
  data-size='[parts_size(small/medium/large)]'
  data-parts='[parts_name(salesranking/newrelease/bestsellers)]'>
...
</a>
```

**2) Add 'class' attribute.**

```html:sample.html
<a ...(read usage.two and this usage.(1))... class="amazon-widget-[1-3]">
...
</a>
```

### Four. Edit 'index.html' file for this product.

**1) Edit 'index.html' file.**

```html:index.html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Amazon Blog Pats</title>
<link rel="shortcut icon" href="/assets/icon/favicon.ico" />
<link rel="stylesheet" href="/assets/js/common.css">
</head>
<body>
<div id="app"></div>
<script src="/assets/js/log4js.min.js"></script>
<script src="/assets/js/common.js"></script>
<script src="/assets/js/app.bundle.js"></script>
</body>
</html>
```

### Five.  Copy files of this product.

**1) Copy 'widget.js' and 'index.html' file.**

  Copy this file in the root directory of sample blog site.

**2) Copy 'common.js' file.**

**3) Copy 'app.bundle.js' file.**

**4) Copy 'log4js.js' file.**

  Copy this file in the javascript directory of sample blog site.

**5) Copy 'common.css' file.**

  Copy this file in the css directory of sample blog site.

end.
