# plus-equals

"plus-equals", or "p-e" for short, is one of the components that make up the p-et-alia framework of web components.

The component allows for incrementing a property of the host, or other "upSearched" components. The syntax for updating the host is shown below.

## [Demo](https://codepen.io/bahrus/pen/rNwwVaZ)

## Example 1:

```html
<counter-la></counter-la>
<d-fine templ-child 
    as=counter-la
    prop-defaults='{
        "count": 30
    }'
    transform='{
        "span": "count"
    }'
>
    <template>
        <button part=down data-d=-1>-</button>
        <plus-equals on=click val=target.dataset.d parse-val-as=int to-host prop=count></plus-equals>
        <span part=count></span>
        <button part=up data-d=1>+</button>
        <plus-equals on=click val=target.dataset.d parse-val-as=int to-host prop=count></plus-equals>
        <style>
            * {
                font-size: 200%;
            }
        
            span {
                width: 4rem;
                display: inline-block;
                text-align: center;
            }
        
            button {
                width: 4rem;
                height: 4rem;
                border: none;
                border-radius: 10px;
                background-color: seagreen;
                color: white;
            }
        </style>            
    </template>
</d-fine>
```

If using this component without bundling, with a simple static file web server, the following import map is required:

```html
<script type=importmap>
    {
        "imports": {
            "xtal-element/": "../node_modules/xtal-element/",
            "trans-render/": "../node_modules/trans-render/",
            "on-to-me/": "../node_modules/on-to-me/",
            "pass-up/": "../node_modules/pass-up/"
        }
    }
</script>
```

