import urllib.request
import urllib.parse
import json
import base64
from PIL import Image

# 1. Image dims
try:
    img = Image.open('src/assets/setup.png')
    print('Size:', img.size)
except Exception as e:
    print('Image open error:', e)

# 2. OCR
try:
    with open("src/assets/setup.png", "rb") as f:
        img_data = f.read()

    payload = urllib.parse.urlencode({
        "apikey": "helloworld",
        "language": "eng",
        "isOverlayRequired": "true",
        "base64Image": "data:image/png;base64," + base64.b64encode(img_data).decode("utf-8")
    }).encode("utf-8")

    req = urllib.request.Request("https://api.ocr.space/parse/image", data=payload)
    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode())
        lines = result.get('ParsedResults', [{}])[0].get('TextOverlay', {}).get('Lines', [])
        
        print("\n--- OCR Lines and Bounding Boxes ---")
        for line in lines:
            text = line.get('LineText')
            # get bounding box of the line (min top, max top+height, min left, max left+width)
            words = line.get('Words', [])
            if words:
                left = min(w['Left'] for w in words)
                top = min(w['Top'] for w in words)
                width = sum(w['Width'] for w in words)
                height = max(w['Height'] for w in words)
                print(f"[{left}, {top}, {width}, {height}] - {text}")
            else:
                print(f"[?] - {text}")
except Exception as e:
    print("OCR Error:", e)
