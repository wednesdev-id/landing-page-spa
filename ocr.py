import urllib.request
import urllib.parse
import json
import base64

try:
    with open("src/assets/demo.png", "rb") as f:
        img_data = f.read()

    payload = urllib.parse.urlencode({
        "apikey": "helloworld",
        "language": "eng",
        "base64Image": "data:image/png;base64," + base64.b64encode(img_data).decode("utf-8")
    }).encode("utf-8")

    req = urllib.request.Request("https://api.ocr.space/parse/image", data=payload)
    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode())
        print(json.dumps(result, indent=2))
except Exception as e:
    print("Error:", e)
