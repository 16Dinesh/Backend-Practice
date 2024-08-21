import requests

x = requests.get('https://nobero.com/products/lunar-echo-oversized-t-shirt-1?variant=45663963218086')

print(x.status_code)
print(x.text)