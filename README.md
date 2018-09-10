# php-serialize-cli

Serialize and deserialize PHP-serialized data into JSON

## Use


```
echo 'a:1:{s:8:"greeting";s:12:"hello, world";}' | php-serialize-cli -d
```

or 

```
echo '{"greeting": "hello, world"}' | php-serialize-cli -e
```
